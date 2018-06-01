var mongoose = require('mongoose')

var User = mongoose.model('User',{
  email:{
    type: String,
    required: true,
    minlength: 1,
    lowercase: true,
    trim: true
  }
})

module.exports = {User}
