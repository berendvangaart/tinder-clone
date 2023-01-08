const express = require('express')
const PORT = 8080
const {MongoClient} = require('mongodb')

const jwt = require('jsonwebtoken')
require('dotenv').config()
//const URI = `mongodb+srv://berend:${process.env.MONGO_KEY}@cluster0.6cnzvon.mongodb.net/?retryWrites=true&w=majority`
const URI = `mongodb://localhost:27017/`
const {v4: uuidv4} = require('uuid')
const bcrypt = require("bcrypt");
const cors = require('cors')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, `${file.originalname}`)
    }
})
const upload = multer({
    storage: storage,
    maxFieldSize: 100000000, // 100 MB
    maxFileSize: 100000000, // 100 MB
});

const app = express()
app.use(express.static('storage'));
app.use("/storage", express.static('storage'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/**
 * create a new user
 * hash passwords create unique id - persist in db - issue JWT
 */

app.post('/signup', upload.single('image'), async (req, res) => {
    const client = new MongoClient(URI)

    const userRequestBody = req.body
    const hashedPassword = await bcrypt.hash(userRequestBody.password, 10)
    const uid = uuidv4()

    const user = {
        id: uid,
        img: userRequestBody.imageName,
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

        // check if user exists
        const exists = await users.findOne({email: userRequestBody.email.toLowerCase()})
        if (exists) return res.status(409).send('user already exists.')

        const insertedUser = await users.insertOne(user)
        const token = jwt.sign(insertedUser, user.email, {
            expiresIn: 60 * 24,
        });

        // Send the response
        res.status(201).json({token, userId: uid, email: userRequestBody.email.toLowerCase()})

    } catch (e) {
        console.error('something went wrong: ', e)
    } finally {
        await client.close()
    }
})

app.post('/login', async (req, res) => {

    const client = new MongoClient(URI)
    const {email, password} = req.body

    try {
        await client.connect()
        const db = client.db('app')
        const users = db.collection('users')

        const user = await users.findOne({email: email.toLowerCase()})

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(user, user.email, {
                expiresIn: 60 * 24,
            })
            res.status(201).json({token, userId: user.id, email: email.toLowerCase(), matches: user.matches})
        } else {
            res.status(400).send('bad credentials')
        }


    } catch (e) {
        console.error('error login', e)
    } finally {
        await client.close()
    }
})

/**
 * return all users
 */
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



app.post('/match', async (req, res) => {
    const client = new MongoClient(URI)

    const {userId, matchId} = req.body

    try {
        await client.connect()
        const db = client.db('app')
        const users = db.collection('users')

        const query = {Id: userId}
        const updateDocument = {
            $push: {matches: {userId: matchId} }
        }

         // const user = await users.updateOne(query, updateDocument)
        const user = await users.updateOne({id: userId }, {$push : {matches: matchId}})
        res.send(user)
    } catch (e) {
        console.error('error fetch users', e)
    } finally {
        await client.close()
    }
})


app.listen(PORT, () => console.log(`🚀🚀 server UP: Listening on port ${PORT} 🚀🚀`))