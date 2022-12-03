const express = require('express')
const PORT = 8080
const {MongoClient} = require('mongodb')
require('dotenv').config()
const URI = `mongodb+srv://berend:${process.env.MONGO_KEY}@cluster0.6cnzvon.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.get('/', (req, res) => {
    res.json('hello server')
})

app.post('/signup', (req, res) => {
    res.json('hello server')
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
        console.log(e)
        console.error('error fetch users')
    } finally {
        client.close()
    }
})


app.listen(PORT, () => console.log(`🚀🚀 server UP: Listening on port ${PORT} 🚀🚀 ${process.env.MONGO_KEY}`))