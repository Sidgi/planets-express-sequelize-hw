const express = require('express');
const {Planet} = require('../models')
const planetRouter = express.Router();
const bodyParser = require('body-parser');
planetRouter.use(bodyParser.json());
planetRouter.get('/',async(req,res)=>{
  try{
    const allPlanets = await Planet.findAll();
    res.send(allPlanets);
  }catch(e){
    console.log(e.message)
  } 
});

planetRouter.get('/:id',async(req,res)=>{
  try{
    const onePlanet = await Planet.findByPk(req.params.id);
    res.send(onePlanet);
  }catch(e){
    console.log(e.message)
  }
})

planetRouter.post('/create',async(req,res)=>{
  try{
    await Planet.create(req.body);
    await res.send('succeded');
  }catch(e){
    await console.log(e.message)
  }
})
planetRouter.get('/random', async(req,res)=>{
  try{

  }catch(e){
    console.log(e.message)
  }
})
module.exports = planetRouter;