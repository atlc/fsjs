import { Router } from 'express';
import { hash, compare } from '../../utils/passwords';
import { createToken } from '../../utils/tokens';
import db from '../../db';
import { IUser } from '../../../common/types';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashed = await hash(password);
        const newUser = await db.Users.do.create({ email, hashed })
        res.send(newUser);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user: IUser = (await db.Users.get.by_field('email', email))[0];
        if (!user.email) {
            throw new Error('Unable to authenticate');
        } else {
            const compared = await compare(password, user.hashed);
            if (compared) {
                delete user.hashed;
                const token = createToken({ userid: user.id });
                // await db.Users.do.add_authtoken(user.id, token);
                res.json({ userid: user.id, token });
            } else {
                throw new Error('Unable to authenticate');
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});


export default router;