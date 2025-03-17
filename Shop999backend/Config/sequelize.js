const {Sequelize} = require("sequelize");
// MySQL Connection
const sequelize= new Sequelize("sportProducts","root","Qpmz@199395",{
    host: "localhost",
    dialect: "mysql",
    logging: false, 
})
const connectMySQL =async()=>{
    try {
        await sequelize.authenticate();
        console.log("MySQL Database connected successfully!".cyan.underline.bgMagenta);
    } catch (error) {
        console.log("MySQL Database connection failed!".red.underline.bgRed.bgMagenta);
}
}
module.exports = { sequelize, connectMySQL };
