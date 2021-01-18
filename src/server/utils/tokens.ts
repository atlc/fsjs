import * as jwt from 'jsonwebtoken';
import config from '../config';

export interface IPayload {
    userid: number;
}

export const createToken = (payload: IPayload) => {
    const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiry });
    return token;
}