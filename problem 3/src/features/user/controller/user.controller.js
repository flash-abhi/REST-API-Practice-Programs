// Please don't change the pre-written code
// Import the necessary modules here
import { addUser ,confirmLogin} from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  // Write your code here
  const data = req.body;
  const user = addUser(data);
res.status(201).send({status:"success", user:user});
};

export const loginUser = (req, res) => {
  // Write your code here
  const data = req.body;
  const result = confirmLogin(data);
   if(!result){
      res.status(400).send({status:"failure",msg:"invalid user details"});
    }
    else{
      res.send({status:"success" ,msg:"Login Successful"});
    }
};
