// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI)

export const api = express();

import postRouter from './../../Routes/postsRouts';
import userRouter from './../../Routes/userRouts';

//middleware
api.use(express.json())

api.use("/api/", postRouter);
api.use("/api/user", postRouter);

export const handler = serverless(api);
