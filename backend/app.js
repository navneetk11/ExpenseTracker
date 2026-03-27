
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const CategoryRouter = require('./routes/CategoryRouter');
const errorhandler = require('./middlewares/errorhandlerMiddleware');
const app = express();


//connect to mongodb
mongoose
.connect(process.env.MONGO_URI)
.then(() =>console.log("DB Connected")) 
.catch((e) => console.log(e));


//middleware
app.use(express.json());

//route
app.use("/",userRouter);
app.use("/",CategoryRouter);

//error
app.use(errorhandler);

//start the server
const port = process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});