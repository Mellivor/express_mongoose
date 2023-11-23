const express = require('express');
const router = express.Router();

const { getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getOneUser,
    loginUser,
    singupUser
} = require('../controllers/userControllers');

router.post("/signup", singupUser);

router.get("/user/:id", getOneUser);

router.post("/user", updateUser);

module.exports = router;
