const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model

const MarioCharSchema = new Schema({
  username: {
      type:String,
      required:true
  },
  email: {
    type:String,
    required:true
  },  
  password: {
    type:String,
    required:true
   },  
   
  date: {
    type:Date,
    default:Date.now
  },  
});

const MarioChar = mongoose.model('mariochar',MarioCharSchema);
 //this tells that "mariochar" is a colletion, "MarioChar" is the model and schema of the model is MarioCharSchema.

 module.exports = MarioChar; //so that we can use this in all the files in this project