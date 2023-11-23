const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        requiered: true,
        unicue: true,
    },
    email: {
        type: String,
        lowercase: true,
        unicue: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },

}, { timestamps: true })

userSchema.static.signup = async function (email, password, phone, name) {
    const exist = await this.findOne({ email })

    if (exist) {
        throw Error('Email is already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash, name, phone })

    return user
}

module.exports = mongoose.model('Users', userSchema)
