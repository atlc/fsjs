import { Query } from '../index';

const all = () => Query('SELECT * from Users');
const single = (id: number) => Query('SELECT * from Users where id=?', [id]);
const by_field = (field: string, value: string) => Query('SELECT * from Users where ?? = ?', [field, value]);
const create = (values: any) => Query('INSERT INTO Users SET ?', [values]);
const update = (id: number, values: any) => Query('UPDATE Users SET ? where id=?', [values, id]);
const destroy = (id: number) => Query('DELETE FROM Users where id=?', [id]);
const add_authtoken = (userid: number, token: string) => Query('INSERT INTO AuthTokens SET ?', [userid, token]);

export default {
    get: { all, single, by_field },
    do: { create, update, destroy, add_authtoken }
}