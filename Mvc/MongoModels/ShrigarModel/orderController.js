const Order = require("../../MongoModels/ShrigarModel/OrderModel");

const createOrderController = async (req, res) => {
  try {
    const { items, address, totalAmount } = req.body;
    if (!items?.length || !address || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Missing order data",
      });
    }
    const order = await Order.create({
      userId: req.user._id,
      items,
      address,
      totalAmount,
    });
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
const getMyOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSingleOrderController = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!order) {
      res.status(404).json({
        success: false,
        flage: "N",
        message: "Order not found",
      });
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateOrderStatusController =async()=>{
    try {
        const{status}=req.body;
        const order= await Order.findByIdAndUpdate(req.params.id,{orderStatus:status},{new:true});
        res.status(200).json({
            flage:"Green",
            success:true,
            order
        })
    } catch (error) {
        res.status(500).json({
            flage:"Red",
            success:false,
            message:error.message
        })
        
    }
}
module.exports = {
  createOrderController,
  getMyOrdersController,
  getSingleOrderController,
  updateOrderStatusController
};
