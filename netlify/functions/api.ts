// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI)

export const api = express();

api.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
})

import telegramRouter from '../../Routes/telegramRouts';
import userRouter from './../../Routes/userRouts';
import postRouter from '../../Routes/postsRouts';

//middleware
api.use(express.json())

api.use("/api/", postRouter);
api.use("/api/user", userRouter);
api.use("/api/telegram", telegramRouter);

export const handler = serverless(api);
