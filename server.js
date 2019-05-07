const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = 3000;
app.get('/',async(req,res)=>{
  res.send('Test message')
});
app.listen(PORT,()=>{ console.log('listening port '+ PORT) })