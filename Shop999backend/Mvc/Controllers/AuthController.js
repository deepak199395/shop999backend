const userModel = require("../Models/UserSchem")
const createUserController = async (req, res) => {
    try {
        const { name, lastname, email, password, phone } = req.body;
        // validations
        if (!name || !lastname || !email || !password || !phone) {
            return res.status(400).send({
                message: "Please fill all the fields"
            });
        }
        // cheack existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "User already exists"
            })
        }
        // create userr
        const user = await userModel.create({ name, lastname, email, password, phone })
        res.status(201).send({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error creating user",
            error

        })
    }
}
// get userController
const getUserController = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
            users
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error retrieving users",
            error
        })

    }
}
// Login  editcontroller
const LoginController=async(req,res)=>{

    try {
        const {email,password}=req.body
        // validation
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Email and password are required"
                })
        }
        // find user
        const user= await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found"
                })
        }
        res.status(201).send({
            success:true,
            massage:"user Login succefully",
            user


        })
    } catch (error) {
        console.log("error while login",error)
        res.status(500).send({
            success:false,
            message:"Error while login",
            error

        })
    }
}

module.exports = { createUserController, getUserController ,LoginController}