
const express=require('express')
const cors=require('cors')
const morgan=require('morgan');
const app=new express;


app.use(morgan('dev'));
app.use(cors());

const cRoute=require('./routes/empRoutes');
app.use('/emp', cRoute)
const userroute=require('./routes/user')
app.use("/user",userroute)

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');




app.listen(PORT,()=>{console.log(`Server is initiated on PORT ${PORT}`);})