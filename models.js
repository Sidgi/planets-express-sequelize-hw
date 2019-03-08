const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'solar_system_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true, // use underscored column names for columns generated by sequelize (e.g. timestamps as created_at rather than createdAt)
  }
});


//Create your models here:


module.exports = {

};
