const express = require('express');
const router  = express.Router();
const User = require("../models/User")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/juan", (req,res) => {
  // User.find({})
  // .then(users => {
  //   res.render("kike/prueba1", {users});
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  const users = [{name:"Pepe"}, {name:"lolo"}, {name:"kike"}];

  res.render("kike/prueba1",  {users})
  console.log("Es una rama diferente")
})

module.exports = router;
