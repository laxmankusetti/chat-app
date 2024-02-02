import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';

import connectToMongodb from './db/connectToMongodb.js';

dotenv.config();

const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
    connectToMongodb();
    console.log(`server is running on the port no ${port}`)
})
