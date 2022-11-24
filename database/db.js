const { Sequelize } = require("sequelize");
// const { database } = require("../config");

const sequelize = new Sequelize("sequelize1", "root", "", {
   host: "localhost",
   dialect: "mysql",
   port: 3306,
});

module.exports = sequelize;
