const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    _Id:mongoose.Types.ObjectId,
    courseName:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    startingDate:{type:String,required:true},
    endDate:{type:String,required:true},
    imageId:{type:String,required:true},
    imageUrl:{type:String,required:true},
    uid:{type:String,required:true}

})

module.exports = mongoose.model('Course', courseSchema);