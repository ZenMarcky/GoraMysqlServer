


const {verify} = require('jsonwebtoken');
require('dotenv').config();

const validateToken = (request,response,next)=>{
const accessToken = request.header("userToken");

if(!accessToken){
    response.json({error:"User not login"});
}
else{
try{
    const verifyToken = verify(accessToken,process.env.JWT_SECRET);
    request.user = verifyToken;
    if(verifyToken){
        return next();
    }
    }
    
catch(error){
    return response.json({error:error});
    }
}
}

module.exports = {validateToken};