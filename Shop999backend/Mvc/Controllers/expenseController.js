const Profilemodel = require("../MongoModels/CoroexpenseModel")

const CreateExpessController=async(req,res)=>{
  try {
    const {DayAmmount,date,description}= req.body
    const creatExpess= await Profilemodel.create({
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
const getExpessController =()=>{
  try {
    const getExpess= Profilemodel.find()
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

