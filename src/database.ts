import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`);
        console.log(`Database is connected to:${db.connection.name}...` );
    } catch (err) {
        console.error(err);
    }
})()