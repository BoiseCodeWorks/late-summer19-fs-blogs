import express from 'express'
import _blogService from '../services/blogService'
import { runInNewContext } from 'vm';
export default class BlogController {

  constructor() {
    this.router = express.Router()
      .get('', this.getAllBlogs)
      .get('/:blogId', this.getBlogById)
      .post('', this.createBlog)
      .delete('/:blogId', this.delortBlog)
  }

  async getAllBlogs(req, res, next) {
    try {
      let blogs = await _blogService.find()
      res.send(blogs)
    }
    catch (error) {
      next(error)
    }
  }
  async getBlogById(req, res, next) {
    try {
      let blog = await _blogService.findById(req.params.blogId)
      res.send(blog)
    } catch (error) {
      next(error)
    }
  }
  async createBlog(req, res, next) {
    try {
      let newBlog = await _blogService.create(req.body)
      res.send(newBlog)
    } catch (error) {
      next(error)
    }
  }

  async delortBlog(req, res, next) {
    try {
      await _blogService.remove(req.params.blogId)
      res.send("Delorted")
    } catch (error) {
      next(error)
    }
  }
}