const Posts = require('../models/PostModel')

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const post = await Posts.find({}).sort({ createdAt: -1 })
        // res.set('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN);
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// create post
const createPost = async (req, res) => {
    const { body, author, userid } = req.body
    try {
        const post = await Posts.create({ body, author, userid })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// create Telegram post
const createTelegramPost = async (req, res) => {
    const body = JSON.stringify(req.body);

    const author = "Дмитро";
    const userid = "6575fc028cebe2359499e33d";
    try {
        const post = await Posts.create({ body: body, author: author, userid: userid })
        // res.status(200).json(post)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// dellete post
const deletePost = async (req, res) => {
    // const { postid, userid } = req.query
    const { postid, userid } = req.body
    // if (userid === "Anonymous") {
    //     return res.status(200).json("Anonymous posts can't be delated")
    // }

    try {
        const post = await Posts.findOne({ _id: postid }).deleteOne({ userid: userid })
        // const post = await Posts.findOne({ _id: postid }).deleteOne()
        // const post = await Posts.deleteOne({ _id: postid })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// dellete comment
const deleteComent = async (req, res) => {
    // console.log(req)

    // return res.send(req.query)
    // return res.send("delete posts")
}

// update post
const updatePost = async (req, res) => {
    const { postid, newComment, author = "Anonymous", userid = "Anonymous" } = req.query
    try {
        const post = await Posts.findOne({ _id: postid })
        post.comments.push({ body: newComment, author: author, userid: userid })
        await post.save();
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// create copmment
const createComment = async (req, res) => {
    const { postid, newComment, author = "Anonymous", userid = "Anonymous" } = req.query
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
    getAllPosts,
    createPost,
    deletePost,
    deleteComent,
    updatePost,
    createComment,
    createTelegramPost,
}
