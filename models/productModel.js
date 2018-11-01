'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  Id: {
    type: String,
    required: 'PrductId'
  },
  Description: {
    type: String,
    default: ""
  },
  Value: {
    type: Number,
    default: 0.0
  },
  Created_date: {
    type: String,
    default: ""
  },
  Type: {
    type: [{
      type: String,
      enum: ['Pants', 'Shirt', 'none']
    }],
    default: ['none']
  }
});

module.exports = mongoose.model('Products', ProductSchema);