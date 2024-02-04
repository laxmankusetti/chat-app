import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

import connectToMongodb from './db/connectToMongodb.js';

const port = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

// const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);
app.use('/api/users', userRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

server.listen(port, () => {
    connectToMongodb();
    console.log(`server is running on the port no ${port}`)
})
