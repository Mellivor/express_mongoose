const express = require('express');
const router = express.Router();

const {
    createTelegramPost,
    } = require('../controllers/postsControllers');

router.post("/posts", createTelegramPost);

module.exports = router;
