var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todos')
var {User} = require('./models/user')

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var todos = new Todo({
    text: req.body.text
  })

  todos.save().then((doc) => {
    res.send(doc)
  },(e) => {
    res.status(400).send(e)
  })
})
// app.post('/users',(req,res) => {
//   var users = new User({
//     email: req.body.email
//   })
//   users.save().then((user) => {
//     res.send(user)
//   },(e)=> {
//     res.send(e)
//   })
//
// })


app.listen(3000,() => {
  console.log('Server is up on port 3000');
})

module.exports = {app}
