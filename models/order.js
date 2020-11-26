const mongoose=require('mongoose');


const OrderSchema=new mongoose.Schema({

     userId:{
         type:mongoose.Types.ObjectId,
         required:true,
         ref:'User'
     },
     subTotal:{
         type:Number
     },
     date:{
         type:Date,
         default:Date.now
     }
},
{
    timestamps: true,
    toObject: {
        transform: (obj, ret) => {
            ret.id = ret._id;
            delete ret.__v;
            return ret;
        }
    }
}
)

module.exports=mongoose.model('Order',OrderSchema);
