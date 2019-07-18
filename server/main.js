import express from "express"
import bp from "body-parser"
import cors from 'cors'
import "./db/dbConfig"

let port = 3000
let server = express()
server.use(bp.json())
server.use(cors())

import BlogController from './controllers/blogController'
server.use('/api/blogs', new BlogController().router)



server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})
server.listen(port, () => {
  console.log("server is running on port: ", port)
})
