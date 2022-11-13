import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DB: process.env.MONGO_DB || 'products-db',
    MONGO_USER: 'admin',
    MONGO_PASSWORD: 'admin',
    MONGO_HOST: 'localhost',
    PORT: process.env.PORT || 8080,
}