const asyncHandler = require("express-async-handler");
const Category = require("../model/Category");
const User = require("../model/User");
//User registration

const categoryController= {

//add category

create: asyncHandler(async( req, res) =>{
    const {name,type} = req.body;
    if(!name || !type){
        throw new Error("All fields are required");
    }
    //convert name to lowercase
    const normalizedName = name.toLowerCase();

    //check if category is valid 
    const validTypes = ["income", "expense"];
    if(!validTypes.includes(type.toLowerCase())){
        throw new Error("Invalid category type"+ type);
    }
   
    //check if category already exists for the user
    const categoryExists = await Category.findOne({
        user: req.user,
        name: normalizedName,
        
    });
    if(categoryExists){
        throw new Error(`Category  ${categoryExists.name} already exists`);
    }
  //create category
  const category = await Category.create({
    user: req.user,
    name: normalizedName,
    type: type,
  });
   res.status(201).json(category);
}),

//List categories

lists: asyncHandler(async(req,res)=>{
    const categories = await Category.find({user: req.user});
    res.status(201).json(categories);
     
}),


//update category
update: asyncHandler(async(req,res)=>{
    
}),

//delete category

delete: asyncHandler(async(req,res)=>{
   
}),

};

module.exports= categoryController;