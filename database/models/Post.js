const { DataTypes } = require("sequelize");
const db = require("../db");

const Post = db.define("Post", {
   title: DataTypes.STRING,
   body: DataTypes.TEXT,
});

module.exports = Post;
