const dotenv = require('dotenv').config();

export default {
    mysql: {
        connectionLimit: 10,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.JWT_EXPIRATION
    }
}