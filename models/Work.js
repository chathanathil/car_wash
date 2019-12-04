const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// Create Schema
const WorkSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    name:{
        type:String,
        required:true
    },
    vno:{
      type:String,
      required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    amount:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    }
})

module.exports=Work=mongoose.model('work',WorkSchema);