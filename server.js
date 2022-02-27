const express = require('express')
const app = express()
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

const PORT = 8080
app.listen(PORT, 'localhost', () => {
    console.log(`Server running on port ${PORT}`)
})