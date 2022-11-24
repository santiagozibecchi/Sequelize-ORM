const express = require("express");
const router = express.Router();
const User = require("../database/models/User");

// * API /api/users

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
