const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

const Star = solarDb.define("star",{
  name:Sequelize.STRING,
  size:Sequelize.STRING,
  life_cycle: Sequelize.STRING
})
Star.hasMany(Planet);
Planet.belongsTo(Star);
module.exports = {
  solarDb,
  Planet,
  Star,
  Op
}