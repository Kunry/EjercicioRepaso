// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Comment = require("../models/Comment")

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/repaso', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Admin"
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    rol: "DonPepe"
  }
]
let comment = {
  title: "En un lugar de la Mancha",
  text: "Hola buenos días Pepe :D"
}

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  // console.log(usersCreated[0]._id)
  // console.log(`${usersCreated.length} users created with the following id:`);
  // console.log(usersCreated.map(u => u._id));
  Comment.collection.drop
  comment.author = usersCreated[0]._id;
  comment.destinatario = usersCreated[1]._id;
  console.log(comment);
  // const newComment = new Comment(comment)
  return Comment.create(comment);
})
.then(comment => {
  console.log(comment);
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})