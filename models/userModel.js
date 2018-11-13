'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: 'user required'
  },
  // email: {
  //   type: String,
  //   unique: true,
  //   lowercase: true,lowercase: true,
  //   trim: true,
  //   required: 'email required'
  // },
  password: {
    type: String,
    required: 'Password required'
  },
  hashPassword: {
    type: String,
    default: ""
  },
  Created_date: {
    type: String, 
    default: Date.now
  } 
});

UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.hashPassword);
}

module.exports = mongoose.model('User', UserSchema);