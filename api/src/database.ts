import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        // const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`);
        
        const db = await mongoose.connect(config.MONGO_URI!);
        console.log(`Database is connected to:${db.connection.name}...` );
    } catch (err) {
        console.error(err);
    }
})()