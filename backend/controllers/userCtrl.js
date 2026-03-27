const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
//User registration

const usersController= {
//Regsiter

register: asyncHandler(async( req, res) =>{
    const {username,email,password} = req.body;
    //validation

    if(!username || !email || !password){
        throw new Error("All fields are required");

    }
    //check if user already exists
    const userExists= await User.findOne({email});
    if(userExists){
        throw new Error("User already exists");
    }

    //hash the user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user

    const userCreated = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    res.json({
        username: userCreated.username,
        email: userCreated.email,
        id: userCreated._id,

    });
}),
//Login

login : asyncHandler(async(req,res)=>{
     //get user data 
     const {email,password}= req.body;

     //check if email is valid
     const user = await User.findOne({email});
     if(!user){
        throw new Error("Invalid login credentials");
     }

     //compare password
     const isMatch = await bcrypt.compare(password,user.password);
     if(!isMatch){
        throw new Error("Invalid login credentials");
     }
     //

     //generate token
     const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
     });

     //send response
     res.json({
        message: "Login successful",
        token,
        id: user._id,
        email: user.email,
        username: user.username,
     });


}),


//Profile
profile: asyncHandler(async(req,res)=>{
    console.log(req.user);
    //find user 
   const user = await User.findById(req.user);
    if(!user){  
        throw new Error("User not found");
    }
    //send response
    res.json({
       
        email: user.email,
        username: user.username,});
}),
//update or change password 

ChangeUserPassword: asyncHandler(async(req,res)=>{
   const {newPassword} = req.body;
    //find user 
   const user = await User.findById(req.user);
    if(!user){  
        throw new Error("User not found");
    }
    //hash the new password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    //update password
    user.password = hashedPassword;
    await user.save();//resave the user with the new password


    //send response
    res.json({
        message: "Password updated successfully",

       });


}),
//update user profile
updateUserProfile: asyncHandler(async (req, res) => {
    const { email, username } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      {
        username,
        email,
      },
      {
        new: true,
      }
    );
    res.json({ message: "User profile updated successfully", updatedUser });
  }),
};

module.exports= usersController;