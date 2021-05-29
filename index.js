import express from 'express'
// const express = require('express')
import userRouter from './router/users.js'
import bodyParser from 'body-parser' // incoming post requests bodies //

const app = express()
const PORT = 5000

app.use(bodyParser.json()) // we will be using json data in our application

app.use('/users', userRouter) // all of my rotes are startring with /users

app.listen(PORT, () => {
  console.log(`SERVER running on port: http://localhost: ${PORT}`)
})
