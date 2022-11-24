const Post = require("./models/Post");
const User = require("./models/User");
const Address = require("./models/Address");

// * Relacion 1 a 1
// Cada usario sólo va a tener una direccion
// Añade una clave foranea del tipo userId a la tabla address
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave UserId a la tabla address
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });
