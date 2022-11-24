const { DataTypes } = require("sequelize");
const db = require("../db");

const Address = db.define(
   "Address",
   {
      street: DataTypes.STRING,
   },
   { timestamps: false }
);

module.exports = Address;
