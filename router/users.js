import express from 'express'
const routers = express.Router() // initilize all of our routers
import { createUser, deleteUser, getAllUsers } from '../contoller/users.js'

routers.get('/', getAllUsers)

routers.post('/', createUser)

routers.delete('/:id', deleteUser)

export default routers
