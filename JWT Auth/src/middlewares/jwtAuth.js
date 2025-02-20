// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"
const jwtAuth = (req, res, next) => {
  // Write your code here
  const token =req.cookies.token;

  if(!token){
    res.status(401).send({ success: false, msg: {name:"jsonWebTokenError",message: "jwt must be provided"} });
  }
  try{
    const payload = jwt.verify(token,"mMyWDpQd5eK5rTd0Qkz6OT4r6YxCaLyA");
    console.log(payload);
  }catch(err){
    return res.status(401).send({ success: false, msg: err });
  }
  next();
};
export default jwtAuth;


