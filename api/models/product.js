'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
 name:{type:String, require:true},
  brand:{type:String, require:true},
  image:{type:String, require:true},
  desc:{type:String, require:true},
  status:{type:String, required:true},
  product_url:{type:String, required:true}
  /*Created_date: {
    type: Date,
    default: Date.now
  },*/
  /*status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }*/
});

var collection_name = 'product';

module.exports = mongoose.model('product', TaskSchema,collection_name);
