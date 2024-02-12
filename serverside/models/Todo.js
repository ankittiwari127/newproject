const mongoose =require("mongoose");
const todoSchema =new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true,
            maxLength:50,
        },
        lastname:{
            type:String,
            required:true,
            maxLength:50,
        },
        password:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }

    }
); 
//todo ke naam se is model ko access kahi bhi karenge
module.exports=mongoose.model("Todo",todoSchema);