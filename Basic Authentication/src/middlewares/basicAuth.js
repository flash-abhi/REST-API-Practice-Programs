// Please don't change the pre-written code
// Import the necessary modules here
 import { getAllUsers } from "../features/user/model/user.model.js";
const basicAuthMiddleware = (req,res,next) => {
  // Write your code here
  const authHeader = req.headers["authorization"];
  if(!authHeader){
    return res.status(401).send({success:"false", message:"no authorization details found"});
  }

  console.log(authHeader);
  // 2. Extract Credential. [Basic wjffjjfjhhfhfjhfjjfhhghfjsjnruruncj]
  const base64Credentials = authHeader.replace("Basic ","");
  console.log(base64Credentials);
  // 3. Decode Credential 
  const decodeCredentails = Buffer.from(base64Credentials, "base64").toString("utf-8");
  console.log(decodeCredentails); //[username:password]

  const cred  = decodeCredentails.split(":");

  const user = getAllUsers().find(u => u.email == cred[0] && u.password == cred[1]);

  if(user){
    next();
  }
  else{
    res.status(401).send({success:"false", message:"authorization failed"});
  }
  
};

export default basicAuthMiddleware;
