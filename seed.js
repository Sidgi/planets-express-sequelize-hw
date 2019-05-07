const {Planet,Star,Op} = require('./models');
const planets = require('./data');


const createPlanets = async()=>{
  try{
    await Planet.bulkCreate(planets); 
  }catch(e){
    console.log(e.message)
  } 
}
const createStars = async()=>{
  try{
   let whiteDwarf =  await Star.create({
      name:'whiteDwarf',
      size:'big',
      life_cycle:'Fusion of Heavier Elements',
    });
   let supernova = await Star.create({
      name:'supernova',
      size:'very big',
      life_cycle:'Supernovae and Planetary Nebulae',
    })
    const novaPlanets = await Planet.findAll(
      {
          where:{
            id:{
              [Op.in]: [45, 50]
            }
        }
      }
    )
    const dwarfPlanets = await Planet.findAll({
      where:{
        id:{
          [Op.in]: [51, 55]
        }
      }
    })
    // novaPlanets.setStars(supernova)
    // dwarfPlanets.setStars(whiteDwarf)
    await supernova.setPlanets(novaPlanets)
    await whiteDwarf.setPlanets(dwarfPlanets)
  }catch(e){
    console.log(e.message)
  }
}


const main = async ()=>{
  await createPlanets();
  await createStars();
  process.exit();
}
main();