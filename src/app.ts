import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { connectToMongoDB } from './database';

connectToMongoDB();

export const app = express();

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Rotas


app.get('/', (req, res) => res.send('Postal Code API'));