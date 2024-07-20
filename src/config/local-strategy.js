import passport from "passport";
import pkg from 'passport-local';
const { Strategy: LocalStrategy } = pkg;
import User from '../models/userModel.js';


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return done(new Error("User not found"));
        }
        done(null, user);
    } catch (err) {
        done(err);
    }
});

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                console.log('Incorrect username');
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                console.log('Incorrect password');
                return done(null, false, { message: 'Incorrect password.' });
            }

            done(null, user);
        } catch (err) {
            done(err);
        }
    })
);
