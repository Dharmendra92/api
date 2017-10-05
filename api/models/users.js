'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 name:{type:String, require:true},
  profile_picture:{type:String, require:true},
  gender:{type:String, require:true},
  locale:{type:String, require:true},
  email:{type:String, require:true},
  
  Created_At: {
    type: Date,
    default: Date.now
  },

  Updated_At: {
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

/*var collection_name = 'users';*/

module.exports = mongoose.model('users', UserSchema);
