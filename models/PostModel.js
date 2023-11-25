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
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
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
    comments: [commentSchema],

}, { timestamps: true })

module.exports = mongoose.model('Posts', postsSchema)
