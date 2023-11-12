const express = require('express');
const router = express.Router();

const { getAllPosts,
    createPost,
    deletePost,
    deleteComent,
    updatePost,
    createComment } = require('../controllers/postsControllers');

const { getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getOneUser } = require('../controllers/userControllers');


router.get("/posts", getAllPosts);

router.post("/posts", createPost);

router.delete("/posts/", deletePost);

router.delete("/comment/", deleteComent);

router.patch("/posts/", updatePost);

router.post("/comment/", createComment);

router.post("/user", createUser);

router.get("/user/:id", getOneUser);

router.post("/user", updateUser);

module.exports = router;
