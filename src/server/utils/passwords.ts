import * as bcrypt from 'bcrypt';

export const hash = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const compare = (password: string, encrypted: string) => {
    return bcrypt.compareSync(password, encrypted);
}