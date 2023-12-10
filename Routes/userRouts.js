const express = require('express');
const router = express.Router();

const { getAllUsers,
    deleteUser,
    updateUser,
    getOneUser,
    loginUser,
    singupUser
} = require('../controllers/userControllers');

router.post("/signup", singupUser);

router.get("/user/:id", getOneUser);

router.post("/user", updateUser);

router.post("/login", loginUser);

module.exports = router;
