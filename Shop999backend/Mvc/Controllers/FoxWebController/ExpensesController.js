const DailyExpensesModel = require("../../MongoModels/foxWeb/DailyExpensesModel");
const ExpenseController=async(req,res)=>{
   try {
     const {expenses,reasonOfExpenses,dateOfExpenses}=req.body;
    const expense= await DailyExpensesModel.create({
        expenses,
        reasonOfExpenses,
        dateOfExpenses
    })
    res.status(200).send({
        sucsess:true,
        flage :green,
        massage:"expenss added succsefully",
        expense
    })
   } catch (error) {
    res.status(500).send({
        sucsess:false,
        massage:"error in creating expenses",
        error
    })
   }
}
module.exports={ExpenseController}