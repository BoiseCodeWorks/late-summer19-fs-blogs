import express from 'express'
export default class BlogController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllBlogs)

  }
  async getAllBlogs(req, res, next) {
    try {
      let blog
    }
  }

}