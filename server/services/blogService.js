import mongoose, { Schema } from 'mongoose'
let _schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
})

export default mongoose.model("Blog", _schema)