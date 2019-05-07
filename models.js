const Sequelize = require('sequelize');
const solarDb = new Sequelize({
  database:"solar_system_db",
  dialect:"postgres",
  operatorsAliases: false
})

const Planet = solarDb.define("planet",{
name:{
  type: Sequelize.STRING,
  allowNull:false
},
num_moons:{
  type:Sequelize.INTEGER,
  allowNull:false
},
color: Sequelize.CHAR(255)
})

module.exports = {
  solarDb,
  Planet
}