// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI)

export const api = express();

import postRouter from './../../Routes/postsRouts';

//middleware
api.use(express.json())

console.log(process.env.MONGODB_URI);
// api.use(async (req, res, next) => {
//     const mongoConnect = await mongoose.connect(process.env.MONGODB_URI);

//     next()
// })



api.use("/api/", postRouter);


export const handler = serverless(api);
