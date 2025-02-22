// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../../user/model/user.model.js";
let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here

  // checking for users.
  const user = getAllUsers().find(u => u.id == userId);
  if(!user){
    return {
      "success": false,
      "msg": "user not found"
  };
  }
  // checking for product.
  const product = products.find(p => p.id == productId);
  if(!product){
    return {
      "success": false,
      "msg": "product not found"
  };
  }
  // checking for ratings.
  if(rating <= 5 && rating >=0 ){
    if(!product.ratings){
      product.ratings = [];
      product.ratings.push(
        {
          "userId": userId,
          "rating": rating
        }
      )
    }else{
      // checking if rating already exists.
      const existingRatingIndex = product.ratings.findIndex(u => u.id == userId);
      if(existingRatingIndex >= 0){
        product.ratings[existingRatingIndex] = {
          "userId": userId,
          "rating": rating
        };
      }else{
        product.ratings.push({
          "userId": userId,
          "rating": rating
        });
      }
    }
  }else{
    return {
      "success": false,
      "msg": "rating should be b/w 0 and 5"
  }
  }

};
