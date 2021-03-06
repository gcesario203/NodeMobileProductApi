import express from 'express';
import 'reflect-metadata';
import createConnection from './database'
import {RoutesHandler} from './routes'
import cors from 'cors'

createConnection();
const app = express();
const routes = new RoutesHandler();

app.use(cors())
app.use(express.json())
app.use(routes.init())

export {app}