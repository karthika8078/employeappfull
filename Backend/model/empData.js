const mongoose=require('mongoose');
//creating the schema
const movieSchema=mongoose.Schema({
    EmployeeId:String,
    EmployeeName:String,
    Designation: String,
    Department: String,
    Location: String,
    salary: Number
  });
const empData=mongoose.model('employees',movieSchema);  // movie = collection name
module.exports=empData;  // exprot the schema