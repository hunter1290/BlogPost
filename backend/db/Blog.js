const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    email:{
           type:String,
           required:true,
    },
    likes:{
        type:Number,
        
    },
    content:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    author:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("blog",blogSchema)
