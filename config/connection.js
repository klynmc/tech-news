// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

/* console.log(process.env.USERNAME);
console.log(process.env.PASSWORD) */

// create connection to our database, pass in your MySQL information for username and password
 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
 
module.exports = sequelize;

/* try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
   } */