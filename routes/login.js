const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkNotAuthenticated = require('../middlewares/CheckNotAuthenticated');

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/google', checkNotAuthenticated, passport.authenticate('google', {
    scope: ['profile'],
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.render('../views/index.ejs', { name: req.user.user.name })
})

module.exports = router