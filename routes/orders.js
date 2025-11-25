const {Order} =required('../models/order');
const express =require ('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    const orderList=await Order.find();

    if (!orderList){
        res.status(500).json({success:false})
    }
    res.send(orderList);
})


router.post('/',async(req,res)=>{
//loop orderItems
  const orderItemsIds = await Promise.all(  
  req.body.orderItems.map(async (orderItem) => {
    let newOrderItem = new OrderItem({
      quantity: orderItem.quantity,
      product: orderItem.product
    });
    newOrderItem = await newOrderItem.save();
    return newOrderItem._id;   
  })
);
console.log(orderItemsIds); 

console.log (orderItemsIds);

    let order= new Order({
        orderItems: orderItemsIds,
        shippingAddress: req.body.shippingAddress,
        city: req.body.city,
        country: req.body.country,
        phone: req.body.phone,
        user: req.body.user,
    })
    order= await order.save();

    if (!order)
        return res.status (400).send('the order cannot be found!')
    res.send (order);
})

module.exports=router;