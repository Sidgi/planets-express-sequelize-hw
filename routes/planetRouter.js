const express = require('express');
const {Planet} = require('../models')
const planetRouter = express.Router();

planetRouter.get('/planets',async(req,res)=>{
  const allPlanets = await Planet.findAll();
  res.json(allPlanets);
});

module.exports = planetRouter;