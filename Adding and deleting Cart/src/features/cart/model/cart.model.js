// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../../user/model/user.model.js";
import { fetchAllProducts } from "../../product/model/product.model.js";
let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  quantity = Number(quantity);

  // Check if the cart already contains this product for the user
  const existingItem = cartItems.find(i => i.userId == userId && i.productId == productId);

  if (existingItem) {
    // If the product exists in cart, update the quantity
    existingItem.quantity += quantity;
  } else {
    // Otherwise, create a new cart entry
    const newItem = new cartModel(userId, productId, quantity);
    cartItems.push(newItem);
  }

  return cartItems; 
  
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  console.log(userId,cartItemId);
  const cartItemIndex = cartItems.findIndex(i => i.userId == userId && i.id == cartItemId);
  console.log(cartItemIndex);
  if(cartItemIndex != -1){
    const deletedItem = cartItems.splice(cartItemIndex,1);
    console.log(deletedItem);
    return deletedItem;
  }else {
    return null;
  }
};
