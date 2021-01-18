import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as JwtStrategy from 'passport-jwt';
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

passport.use(new JwtStrategy.Strategy({
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
}, async (payload: IPayload, done) => {
    try {
        // const [user] = await db.Users.get.single(payload.userid);
        // if (user) {
        //     delete user.password;
        //     done(null, user);
        // } else {
        //     done(null, false);
        // }
    } catch (e) {
        done(e);
    }
}))