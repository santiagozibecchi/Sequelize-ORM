const express = require("express");
const router = express.Router();
const User = require("../database/models/User");
const Address = require("../database/models/Address");
const Post = require("../database/models/Post");

// * API /api/users

// muestra todos los usuarios
router.get("/", async (req, res) => {
   try {
      const users = await User.findAll({
         include: [
            {
               model: Address,
               as: "domicilio",
               attributes: ["street"],
            },
            {
               model: Post,
               as: "publicaciones",
               attributes: ["title", "body"],
               where: {
                  title: "Foo",
               },
            },
         ],
         attributes: ["name", "age"],
      });
      res.json(users);
   } catch (error) {
      console.log(error);
   }
});

// * Ver la direccion de usuario /api/users/:id/domicilio
router.get("/:id/domicilio", async (req, res) => {
   const { id } = req.params;
   try {
      const user = await User.findByPk(id);

      user.getDomicilio().then((dom) => {
         res.json(dom);
      });
   } catch (error) {
      console.log(error);
   }
});

// * Ver las publicaciones del usuario /api/users/:id/publicaciones
router.get("/:id/publicaciones", async (req, res) => {
   const { id } = req.params;
   try {
      const user = await User.findByPk(id);

      user.getPublicaciones().then((pub) => {
         res.json(pub);
      });
   } catch (error) {
      console.log(error);
   }
});

// CREATE
router.post("/", async (req, res) => {
   const { name, email, age } = req.body;

   try {
      const user = await User.create({
         name,
         email,
         age,
      });

      res.json(user);
   } catch (error) {
      res.status(400).json(error);
      console.log(error);
   }
});

module.exports = router;
