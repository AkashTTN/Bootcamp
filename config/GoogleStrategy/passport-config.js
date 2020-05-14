const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const googleUsers = require('../../models/GoogleUser/googleUser.controller');

function initialize(passport) {
    passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/login/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        googleUsers.getUserById(profile.id)
            .then(async (currentUser) => {
                // Create user if the user doesnt exist
                if (!currentUser) {
                    const user = await googleUsers.create({ name: profile.displayName, id: profile.id })
                    // console.log('user added', user)
                    done(null, user)
                } else {
                    console.log('users exists')
                    done(null, currentUser)
                }
            })
    }))
}

module.exports = initialize