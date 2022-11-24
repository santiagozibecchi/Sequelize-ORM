const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("User", {
   name: DataTypes.STRING,
   birthday: DataTypes.DATE,
});

module.exports = User;
