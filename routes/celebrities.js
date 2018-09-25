const express = require('express');
const router  = express.Router();


router.get("/pepe", (req,res) => {
  res.render("error");
})


router.get("/lolo", (req,res) => {
  res.redirect("/juan");
})

module.exports = router;