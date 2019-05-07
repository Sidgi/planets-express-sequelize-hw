const Sequelize = require('sequelize');
const solarDb = new Sequelize({
  database:"solar_system_db",
  dialect:"postgres",
  operatorsAliases: false
})

const Planet = solarDb.define("planet",{
name:{
  type: Sequelize.TEXT,
},
num_moons:{
  type:Sequelize.INTEGER,
},
color: Sequelize.TEXT
})

module.exports = {
  solarDb,
  Planet
}