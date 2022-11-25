const express = require("express");
const router = express.Router();
const Post = require("../database/models/Post");
const User = require("../database/models/User");

// INDEX
router.get("/", async (req, res) => {
   try {
      const post = await Post.findAll({
         include: {
            model: User,
            as: "autor",
            attributes: ["name"],
         },
         attributes: ["title", "body"],
      });

      res.json(post);
   } catch (error) {
      console.log(error);
   }
});

// CREATE
router.post("/", async (req, res) => {
   try {
      const posts = await Post.create({
         title: req.body.title,
         body: req.body.body,
      });

      res.json(posts);
   } catch (error) {
      console.log(error);
   }
});

// READ ONE
router.get("/:id", async (req, res) => {
   const { id } = req.params;

   try {
      const post = await Post.findByPk(id);

      res.json(post);
   } catch (error) {
      console.log(error);
   }
});

//  UPDATE
router.put("/:id", async (req, res) => {
   const { body } = req;
   const { id } = req.params;

   try {
      const post = await Post.update(
         {
            title: body.title,
            body: body.body,
         },
         {
            where: {
               id,
            },
         }
      );

      res.json(post);
   } catch (error) {
      console.log(error);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const { id } = req.params;

   try {
      const post = await Post.destroy({
         where: { id },
      });

      res.json(post);
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
