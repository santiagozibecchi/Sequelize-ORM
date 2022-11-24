const express = require("express");
const router = express.Router();
const User = require("../database/models/User");
const Address = require("../database/models/Address");

// * API /api/users

router.get("/", async (req, res) => {
   try {
      const users = await User.findAll({
         include: {
            model: Address,
            as: "domicilio",
            attributes: ["street"],
         },
         attributes: ["name", "age"],
      });
      res.json(users);
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
