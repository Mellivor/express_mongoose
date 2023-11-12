const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        requiered: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    phone: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('Users', userSchema)
