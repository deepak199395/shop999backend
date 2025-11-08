const userModel = require('../MongoModels/CoroAuthRegisterModel');

const CreateRegiUserController = async (req, res) => {
  try {
    const { fullName, email, phone, password, country, city, pincode, profilePhoto, role } = req.body;

    // Validation
    if (!fullName || !email || !phone || !password || !country || !city || !pincode || !profilePhoto || !role) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // Check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists, please login",
      });
    }

    // Create new user
    const user = await userModel.create({
      fullName,
      email,
      phone,
      password,
      country,
      city,
      pincode,
      profilePhoto,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

module.exports = { CreateRegiUserController };
