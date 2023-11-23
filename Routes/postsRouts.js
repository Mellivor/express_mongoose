const express = require('express');
const router = express.Router();

const { getAllPosts,
    createPost,
    deletePost,
    deleteComent,
    updatePost,
    createComment } = require('../controllers/postsControllers');

router.get("/posts", getAllPosts);

router.post("/posts", createPost);

router.delete("/posts/", deletePost);

router.delete("/comment/", deleteComent);

router.patch("/posts/", updatePost);

router.post("/comment/", createComment);


module.exports = router;
