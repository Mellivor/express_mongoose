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
        requiered: true,
    },

}, { timestamps: true })

userSchema.statics.signup = async function ({ name, phone, email, password }) {

    const nameExist = await this.exists({ name })
    const emailExist = await this.exists({ email })

    if (nameExist) {
        throw Error("name are used")
    }

    if (emailExist) {
        throw Error('Email is already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ name, phone, email, password: hash })

    return user
}

module.exports = mongoose.model('Users', userSchema)
