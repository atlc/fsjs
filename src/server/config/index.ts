const dotenv = require('dotenv').config();

export default {
    mysql: {

    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.JWT_EXPIRATION
    }
}