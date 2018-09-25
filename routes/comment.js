const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment")


router.get("/", (req, res) => {
  Comment.find()
  .populate("author", "username")
  .populate("destinatario")
  .then(comment => {
    console.log(comment);
    console.log(comment[1].destinatario.username)
    res.render("comments/comment");
  })
})

module.exports = router;