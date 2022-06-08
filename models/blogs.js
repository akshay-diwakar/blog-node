const { strictEqual } = require('assert')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    snippets:{
        type : String,
        required : true
    },
    body:{
        type : String,
        required : true
    },
},{timestamps : true});

const Blog = mongoose.model('Blog',BlogSchema)

module.exports = Blog