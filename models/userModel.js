const mongoose = require('mongoose');

const Data =  mongoose.model('data', new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    text:{
        type:String
    }
}))

module.exports = Data;