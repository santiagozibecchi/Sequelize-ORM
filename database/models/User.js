const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define(
   "User",
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notNull: {
               msg: "El campo no puede estar vacio",
            },
            isAlpha: {
               args: true,
               msg: "El nombre sólo puede contener letras",
            },
            len: {
               args: [3, 10],
               msg: "El nombre tiene que ser entre 2 y 10 caracteres",
            },
         },
      },
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: "Tiene que ser un correo valido",
            },
         },
      },
      age: {
         type: DataTypes.INTEGER,
         validate: {
            isInt: {
               args: true,
               msg: "La edad tiene que ser un número",
            },
            min: {
               args: 1,
               msg: "La edad tiene que ser mayor o igual que 1",
            },
            max: {
               args: 150,
               msg: "No puede ser mayor a 150 años",
            },
            // * Validacion personalizadas
            esPar(value) {
               if (value % 2) {
                  throw new Error("La edad tiene que ser un numero par");
               }
            },
         },
      },
      //0: usuario normal, 1: es administrador
      role: {
         type: DataTypes.INTEGER,
         defaultValue: 0,
      },
   },
   { timestamps: false }
);

module.exports = User;
