const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET

const requireSignIn= (req,res,next)=>{
    try {
        const token = req.headers.authorization?.splice("")[1]
        if(!token){
            return res.status(401).send({
                 success: false,
                message: "Authorization token missing"
            })
        }
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Unauthorized",
            error
        });
    }
};

module.exports={requireSignIn}