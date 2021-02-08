import * as mysql from 'mysql';
import config from '../config';
import { prettylog } from '../utils/prettylogger';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(queryString: string, values?: any[]) => {
    const sqlString = mysql.format(queryString, values);
    prettylog(sqlString);
    return new Promise<T>((resolve, reject) => {
        pool.query(sqlString, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

import Books from './queries/books';
import Categories from './queries/categories';

export default {
    Books,
    Categories
}