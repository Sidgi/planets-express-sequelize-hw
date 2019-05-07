const {solarDb}= require('./models');

const sync = async()=>{
  try{
    await solarDb.sync({force:true})
  }catch(e){
    console.log(e)
  }finally{
    process.exit()
  }
}

sync()