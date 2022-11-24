const express = require("express");
const app = express();
const sequelize = require("./database/db");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
   res.send("Hello world");
});

app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));

// Arrancamos en servidor
app.listen(PORT, () => {
   console.log(`App arrancando en http://localhost/${PORT}`);

   // Coneccion a la base de datos
   sequelize
      .sync({ force: true })
      .then(() => {
         console.log("Conectado a la base de datos");
      })
      .catch((error) => {
         console.log("Error al conectar la base de datos ", error);
      });
});
