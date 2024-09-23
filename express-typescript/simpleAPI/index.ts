import express, { Request, Response } from "express";
const cors = require("cors");
import mongoose from 'mongoose'
import controller from './controller/index'

const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(cors());
app.use(express.json());
app.use(morgan('common'));
app.use('/memo', controller.memoRouter());
mongoose.connect('mongodb://root:example@mongo:27017/memoApp?authSource=admin');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
