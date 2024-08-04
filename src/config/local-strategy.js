import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/userModel.js'; // assuming you have a User model

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            console.log('Local strategy called with username:', username);
            if (!username || !password) {
                console.log('Missing credentials');
                return done(null, false, { message: 'Missing credentials' });
            }
            const user = await User.findOne({ username: username }).exec();
            if (!user) {
                console.log('User not found');
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                console.log('Incorrect password');
                return done(null, false, { message: 'Incorrect password.' });
            }

            console.log('User authenticated successfully:', user.username);
            return done(null, user);
        } catch (err) {
            console.error('Error in local strategy:', err);
            return done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    console.log('Serializing')
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        console.log('Deserializing');
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});