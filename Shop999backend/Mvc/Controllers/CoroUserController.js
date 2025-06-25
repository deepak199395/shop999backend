const CoroRegiModel = require("../MongoModels/CoroRegiModel")
const { hashPassword, comparePassword } = require("../../Helper/utils/hash");

const CreateCoroUser = async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword, gender, age, address } = req.body;
        // validation
        if (!name || !email || !phone || !password || !confirmPassword || !gender
            || !age || !address) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        // cheack existing user
        const existingUser = await CoroRegiModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const cororegi = await CoroRegiModel.create({
            name,
            email,
            phone,
            password,
            confirmPassword,
            gender,
            age,
            address
        })
        //validations
        res.status(201).send({
            flage: "Y",
            message: "User created successfully",

            data: cororegi
        })
    } catch (error) {
        res.status(500).send({
            flage: "N",
            message: "Error in creating user",
            data: error
        })
    }
}
// get corouser 
const CorouserregiGet = async (req, res) => {
    try {
        const corouser = await CoroRegiModel.find()
        res.status(200).send({
            flage: "Y",
            message: "User list",
            data: corouser
        })
    } catch (error) {
        res.status(500).send({
            flage: "N",
            message: "Error in getting user list",
            data: error
        })
    }
}
// get corouser by id
const CorouserregiGetById = async (req, res) => {
    try {
        const corouser = await CoroRegiModel.findById(req.params.id)
        if (!corouser) {
            res.status(404).json({ message: "User not found" })
        } else {
            res.status(200).send({
                flage: "Y",
                message: "User found",
                data: corouser
            })
        }
    } catch (error) {
        res.status(500).send({
            flage: "N",
            message: "Error in getting user by id",
            data: error
        })
    }
}
// update corouser
const CorouserregiUpdate = async (req, res) => {
    try {
        const corouser = await CoroRegiModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!corouser) {
            res.status(404).json({ message: "User not found" })
        } else {
            res.status(200).send({
                flage: "Y",
                message: "User updated",
                data: corouser
            })
        }
    } catch (error) {
        res.status(500).send({
            flage: "N",
            message: "Error in updating user",
            data: error
        })
    }
}
// delete corouser
const CorouserregiDelete = async (req, res) => {
    try {
        const corouser = await CoroRegiModel.findByIdAndDelete(req.params.id)
        if (!corouser) {
            res.status(404).json({ message: "User not found" })
        } else {
            res.status(200).send({
                flage: "Y",
                message: "User deleted",
                data: corouser
            })
        }
    } catch (error) {
        res.status(500).send({
            flage: "N",
            message: "Error in deleting user",
            data: error
        })
    }
}
// LOGIN
const CorouserregiLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    const corouser = await CoroRegiModel.findOne({ email });
    if (!corouser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await comparePassword(password, corouser.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Incorrect credentials",
      });
    }

    // ✅ Remove password field before sending response
    const { password: pwd, confirmPassword, ...userWithoutPassword } = corouser._doc;

    res.status(200).send({
      success: true,
      message: "User login successfully",
      data: userWithoutPassword,
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in login user",
      data: error.message,
    });
  }
};

module.exports = { CreateCoroUser, CorouserregiGet, CorouserregiGetById, CorouserregiUpdate, CorouserregiDelete,CorouserregiLogin }; 