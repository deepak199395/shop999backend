const ExpessModel = require("../MongoModels/CoroexpenseModel")

const CreateExpessController=async(req,res)=>{
  try {
    const {DayAmmount,date,description}= req.body
    const creatExpess= await ExpessModel.create({
      DayAmmount,
      date,
      description
    })
    res.status(201).send({
      success: true,
      message:"Expense created successfully",
      data:creatExpess
    })
} catch (error) {
  res.status(500).send({
    success: false,
    message: "Error creating expense",
    error: error.message
    })
    
  }
}
const getExpessController =async(req,res)=>{
  try {
    const getExpess=await ExpessModel.find()
    res.status(201).send({
      success: true,
      message:"Expense fetched successfully",
      data:getExpess
    })

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching expense",
      error: error.message
      })
    
  }
}
module.exports={CreateExpessController,getExpessController}; 

