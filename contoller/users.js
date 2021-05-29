// mock representation of ur server
let users = []
import { v4 as uuidv4 } from 'uuid'
export const createUser = (req, res) => {
  const user = req.body
  const userId = uuidv4()
  const userWithId = { ...user, id: userId }
  // console.log(userWithId)
  users.push(userWithId)
  res.send(`user with username ${user.firstName} added successfully`)
}

export const deleteUser = (req, res) => {
  const { id } = req.params
  // console.log(id)

  //delete id 123
  // vaibhav 123
  // vidhan 321
  users = users.filter((user) => user.id !== id)
  res.send(`user with user id ${id} got deleted`)
}

export const getAllUsers = (req, res) => {
  res.send(users)
  // a get request to ur route "/user"
}

// get the details of particular id using users.find

// using patch update the particular id
