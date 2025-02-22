// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const {userId, productId, rating} = req.query;
  const err = rateProductModel(userId,productId,rating);
  const products = fetchAllProducts();
  const product = products.find(p => p.id == productId);
  if(err){
    res.status(400).send(err);
  }else{
    res.status(200).send({
      "success": true,
      "msg": {
          "id": product.id,
          "name": product.name,
          "price": product.price,
          "ratings": [
              {
                  "rating": rating,
                  "userId": userId
              }
          ]
      }
    })
  }
};
