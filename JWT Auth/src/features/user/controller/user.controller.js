// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"
import { addUser, confirmLogin, getAllUsers } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  // const { email, password } = req.body;
  // if (!email || !password) {
  //   return res.status(400).json({ status: "failure", msg: "invalid user details" });
  // }
  let status = confirmLogin(req.body);
  if (!status.UserID && !status.email) {
    return res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    const token = jwt.sign({UserID:status.UserID,email: status.email},"mMyWDpQd5eK5rTd0Qkz6OT4r6YxCaLyA",{
      expiresIn:"1h"
    })
    res
      .status(200).cookie("token",token,{maxAge: 24 * 60 * 60 *1000})
      .json({ status: "success", msg: "login successfull", token });
   
};
