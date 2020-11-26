const Order         =       require('../models/order');
const User          =       require('../models/user')

class OrderController{

    static async get(req,res){
        
            Order.aggregate([
                { 
                    $group: {
                    "_id": "$userId",
                    "noOfOrders": { $sum:1 },
                    "averageBillValue": { $avg:"$subTotal"} 
                    }
                },

            ])
            .then(orderDetails=>{

                res.status(200).send({
                    data: orderDetails,
                    message: 'Average Bill Calculated !'
                })

            }).catch(err=>{

                res.status(500).send({
                    message:err
                })

            })
    }

    static async updateNoOfOrder(req,res){
        
        Order.aggregate([{
                $group: {
                "_id": "$userId",
                "noOfOrders": { $sum:1 },
                }
        }])
        .then(orderDetails=>{
            
            try{

                orderDetails.forEach(async order=>{
                    let user=await User.findOneAndUpdate({_id:order._id},{noOfOrders:order.noOfOrders},{new:true})
                    // console.log('User Details')
                    // console.log(user);
                 })
                 res.status(200).send({
                     success:true,
                     message: 'Successfully Updated!'
                 })

            }catch(err){
                res.status(500).send({
                    message:err
                })
            }

        }).catch(err=>{

            res.status(500).send({
                message:err
            })

        })

    }

}

module.exports=OrderController;