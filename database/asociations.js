const Post = require("./models/Post");
const User = require("./models/User");
const Address = require("./models/Address");

// * Relacion 1 a 1
// Cada usario sólo va a tener una direccion
// Añade una clave foranea del tipo userId a la tabla address
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave UserId a la tabla address
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });

// * Uno a muchos
// Los usuarios pueden tener muchas publicaciones
// Se añade una clave userId a la tabla posts
User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
// Se añade una clave userId a la tabla posts
Post.belongsTo(User, { as: "autor", foreignKey: "autorId" });
