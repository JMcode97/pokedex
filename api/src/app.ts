import express, { urlencoded } from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import  productRoutes  from './routes/products.routes'

const app = express();

app.set('port', config.PORT || 8080);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productRoutes);

export default app;