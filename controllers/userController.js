'use strict';

 var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('User');


exports.register = function(req, res) {
    
  var newUser = new User(req.body);

  /// Generate Hash password and hash it again 
  var current_date = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  newUser.password = current_date + random;
  newUser.hashPassword = bcrypt.hashSync(newUser.password, 10);
  
  newUser.save(function(err,user){
    if (err) {
      
      return res.status(400).send({
        message: err
      });
    } else {
      user.hashPassword = "";
      return res.json(user);
    }
  });
};

exports.signIn = function(req, res) {
  User.findOne({
    user: req.body.user
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ user: user.user, _id: user._id}, 'RESTFULAPIs')});
      }
    }
  });
};


exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

