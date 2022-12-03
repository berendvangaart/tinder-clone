const express = require('express')
const PORT = 8080

const app = express()

app.listen(PORT, () => console.log(`🚀🚀 server UP: Listening on port ${PORT} 🚀🚀`))

app.get('/', (req, res) => {
    res.json('hello server')
})