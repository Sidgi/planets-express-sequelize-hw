const express = require('express');
const starRouter = express.Router();
const {Star,Planet} = require('../models')
starRouter.get('/',async(req,res)=>{
  try{
    const allStar = await Star.findAll({
      include: [Planet]
    })
    res.send(allStar)
  }catch(e){
    console.log(e.message)
  }
 
})

module.exports = starRouter;