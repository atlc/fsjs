import { Query } from '../index';

const all = () => Query('SELECT * from Books');
const single = (id: number) => Query('SELECT * from Books where id=?', [id]);
const by_field = (field: string, value: string) => Query('SELECT * from Books where ?? = ?', [field, value]);
const create = (values: any) => Query('INSERT INTO Books SET ?', [values]);
const update = (id: number, values: any) => Query('UPDATE Books SET ? where id=?', [values, id]);
const destroy = (id: number) => Query('DELETE FROM Books where id=?', [id]);

export default {
    get: { all, single, by_field },
    do: { create, update, destroy }
}