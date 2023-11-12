const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    body: {
        type: String,
        requiered: true
    },
    author: {
        type: String,
        // default: "Anonimus",
    },
    userid: {
        // type: mongoose.SchemaTupes.ObjectID,
        type: String,
        default: "Anonimus",
    },
    likes: {
        type: Number,
    },
    liked: {
        type: Array,
    }
}, { timestamps: true })

const postsSchema = new Schema({
    body: {
        type: String,
        requiered: true
    },
    author: {
        type: String,
        default: "Anonimus"
    },
    userid: {
        // type: mongoose.SchemaTupes.ObjectID,
        // rel: "User",
    },
    likes: {
        type: Number,
    },
    liked: {
        type: Array,
    },
    // comments: [commentSchema]
}, { timestamps: true })

module.exports = mongoose.model('Posts', postsSchema)
