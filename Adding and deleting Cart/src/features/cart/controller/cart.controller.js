// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart, removeFromCart } from "../model/cart.model.js";
export const addToCartController = (req, res) => {
  // Write your code here
  const {productId,quantity} = req.query;
  const userId = req.userId;
  console.log(userId);
  const result = addToCart(userId,productId,quantity);
  res.status(201).send({success:true,item:result});
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const cartItemId = req.params.itemId;
  const userId = Number(req.userId);
  const result = removeFromCart(userId,cartItemId);
  if(result){
    res.status(200).send({success:true,deletedCartItem: result[0]});
  }else{
    res.status(400).send({success:false, msg:"operation not allowed"});
  }
};
