const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postsSchema = new Schema({
    body: {
        type: String,
        requiered: true
    },
    author: {
        type: String,
    },
    userid: {
        type: String,
    },
    likes: {
        type: Number,
    },
    liked: {
        type: Array,
    },
    comments: []
}, { timestamps: true })

module.exports = mongoose.model('Posts', postsSchema)
