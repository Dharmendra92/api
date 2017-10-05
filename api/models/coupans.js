'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
 name:{type:String, require:true},
 
  Created_date: {
    type: Date,
    default: Date.now
  },
  Updated_date: {
    type: Date,
    default: Date.now
  }
  
  /*status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }*/
});

var collection_name = 'coupans';

module.exports = mongoose.model('coupans', TaskSchema,collection_name);
