const express = require('express')
const PORT = 8080
const {MongoClient} = require('mongodb')
require('dotenv').config()
const URI = `mongodb+srv://berend:${process.env.MONGO_KEY}@cluster0.6cnzvon.mongodb.net/?retryWrites=true&w=majority`
const { v4: uuidv4 } = require( 'uuid')
const bcrypt = require("bcrypt");
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json('hello server')
})

/**
 * create a new user
 * hash passwords create unique id - persist in db
 */
app.post('/signup', async (req, res) => {
    const client = new MongoClient(URI)

    console.log(req.body)

    const userRequestBody = await req.body
    const hashedPassword = await bcrypt.hash(userRequestBody.password, 10)

    const user = {
        id: uuidv4(),
        img: userRequestBody.img,
        firstName: userRequestBody.firstName,
        lastName: userRequestBody.lastName,
        bio: userRequestBody.bio,
        password: await hashedPassword,
        email: userRequestBody.email.toLowerCase(),
        linkedin: userRequestBody.linkedin,
        jobTitle: userRequestBody.jobTitle,
        matches: []
    }

    try {

        await client.connect()
        const db = client.db('app')
        const users = db.collection('users')

        const exists = users.findOne({email : userRequestBody.email.toLowerCase()})
        console.log(exists)

        // if (exists) return res.status(409).send('user already exists.')

        const insertedUser = await users.insertOne(user)

        console.log(insertedUser)

    } finally {
        await client.close()
    }

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(URI)

    try {
        await client.connect()
        const db = client.db('app')
        const users = db.collection('users')
        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } catch (e) {
        console.error('error fetch users', e)
    } finally {
        await client.close()
    }
})


app.listen(PORT, () => console.log(`🚀🚀 server UP: Listening on port ${PORT} 🚀🚀 ${process.env.MONGO_KEY}`))