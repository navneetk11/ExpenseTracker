const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
   //get token from header
const headerObj = req.headers;
const token = headerObj?.authorization?.split(" ")[1]; 
//verify token
const verifyToken = jwt.verify(token, process.env.JWT_SECRET,(err, decoded)=>{
    console.log(decoded);
    if(err){
        return false;
    }
    else{
        return decoded
    }
});
if(verifyToken){
    req.user = verifyToken.id;
    next();
}
else{
    const error = new Error("Token expired,login again");
    next(error);
}

};
module.exports = isAuthenticated;