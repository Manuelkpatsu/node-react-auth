const express = require('express');
const router = express.Router();

const { 
    register, 
    login, 
    forgotPassword, 
    resetPassword 
} = require('../controllers/auth')

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.put("/reset-password/:resetToken", resetPassword);

module.exports = router;
