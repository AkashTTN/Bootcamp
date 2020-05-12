const express = require('express');
const router = express.Router();
const checkNotAuthenticated = require('../middlewares/CheckNotAuthenticated');
const users = require('../models/user.controller'); 

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

router.post('/', checkNotAuthenticated, users.create)

module.exports = router