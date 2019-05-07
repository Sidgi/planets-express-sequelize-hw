const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(logger('combined'))
const planetRouter = require('./routes/planetRouter')
app.use('/planets', planetRouter)
app.listen(PORT,()=>{ console.log('listening port '+ PORT) })