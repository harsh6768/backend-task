const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
       
    name:{
        type:String,
        required:true,
    },
    noOfOrders:{
        type:Number,
        default:0
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

module.exports=mongoose.model('User',UserSchema);
