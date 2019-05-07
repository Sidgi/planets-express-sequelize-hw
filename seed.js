const {Planet} = require('./models');
const planets = require('./data');

const createPlanets = async()=>{
  try{
    await Planet.bulkCreate(planets); 
  }catch(e){
    console.log(e.message)
  } 
}

const main = async ()=>{
  await createPlanets();
  process.exit();
}
main();