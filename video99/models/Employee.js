const mongoose=require('mongoose');

const employeschema=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    ismanager:Boolean
});

const Employee=mongoose.model('Employee',employeschema);
module.exports=Employee