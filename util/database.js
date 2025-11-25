const Sequelize = required("sequelize");

//username and password for db
const sequelize = new Sequelize("sequlize-shopping", "root","password", {
    //dialect tells were talking in sql
dialect:"mysql",
host: "localhost",


});
//exports so it can be used in other files
module.exports=sequelize;