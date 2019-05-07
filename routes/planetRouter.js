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

planetRouter.get('/one/:id',async(req,res)=>{
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
      const all = await Planet.findAll();
      const length = all.length;
      const randNumber = Math.floor(Math.random()*length);
      const randomPlanet = await Planet.findAll({
        where:{
          id:randNumber
        }
      })
      res.send(randomPlanet)
  }catch(e){
    console.log(e.message)
  }
})
planetRouter.delete('/delete/:id',async(req,res)=>{
  try{
   const deletedPlanet =  await Planet.findByPk(req.params.id);
   await deletedPlanet.destroy();
   res.send(deletedPlanet)
  }catch(e){
    console.log(e)
  }
})
module.exports = planetRouter;