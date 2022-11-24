const express = require("express");
const router = express.Router();
const User = require("../database/models/User");
const Address = require("../database/models/Address");

// * API /api/users

router.get("/", async (req, res) => {
   try {
      const addresses = await Address.findAll({
         include: {
            model: User,
            as: "residente",
            attributes: ["name", "age"],
         },
      });
      res.json(addresses);
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
