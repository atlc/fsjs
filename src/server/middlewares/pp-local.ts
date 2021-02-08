import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
// import db from '../db';
import config from '../config';
import { compare } from '../utils/passwords';
import type { IPayload } from '../utils/tokens';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        // const [user] = await db.Users.get.by_field('email', email);
        // if (user && compare(password, user.password)) {
        //     delete user.password;
        //     done(null, user);
        // } else {
        //     done(null, false);
        // }
    } catch (e) {
        done(e);
    }
}));