const Sequelize = require('sequelize');
const solarDb = new Sequelize({
  database:"solar_system_db",
  dialect:"postgres",
  define:{
    underscored: true
  }
})

const Planet = solarDb.define('planet',{
name:{
  type: Sequelize.STRING,
  allowNull:false
},
num_moons:{
  type:Sequelize.INTEGER,
  allowNull:false
}
})

module.exports = {
  solarDb,
  Planet
}