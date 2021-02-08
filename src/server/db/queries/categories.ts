import { Query } from '../index';

const all = () => Query('SELECT * from Categories');
const single = (id: number) => Query('SELECT * from Categories where id=?', [id]);

export default {
    get: { all, single }
}