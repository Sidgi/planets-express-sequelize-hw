const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(logger('combined'))
const planetRouter = require('./routes/planetRouter');
const starRouter = require('./routes/starRouter');
app.use('/planets', planetRouter)
app.use('/stars',starRouter);
app.listen(PORT,()=>{ console.log('listening port '+ PORT) })