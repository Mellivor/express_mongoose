const User = require('../models/UserModel')

//login user
const loginUser = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//singup user
const singupUser = async (req, res) => {
    const { name, email, phone, password } = req.body

    if (!name) {
        res.status(400).json({ error: "name required" })
    }

    if (!password) {
        res.status(400).json({ error: "password required" })
    }

    try {
        const user = await User.signup({ name, email, phone, password })
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get user
const getOneUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// dellete post
const deleteUser = async (req, res) => {
    // const { postid, userid } = req.query
    const { postid, userid } = req.body
    if (userid === "Anonymous") {
        return res.status(200).json("Anonymous posts kant be deleted")
    }

    try {
        const post = await Posts.findOne({ _id: postid }).deleteOne({ userid: userid })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update post
const updateUser = async (req, res) => {
    const { postid, newComment, author = "Anonymous", userid = "Anonimus" } = req.query
    try {
        const post = await Posts.findOne({ _id: postid })
        post.comments.push({ body: newComment, author: author, userid: userid })
        await post.save();
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getAllUsers,
    deleteUser,
    updateUser,
    getOneUser,
    loginUser,
    singupUser,
}
