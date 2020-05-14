const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../../models/LocalUser/localUser.controller')

function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await users.getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                // console.log('local user', user)
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
}

module.exports = initialize