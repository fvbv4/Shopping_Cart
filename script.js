// /* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

// /* Create 3 or more product objects using object literal notation 
//    Each product should include five properties
//    - name: name of product (string)
//    - price: price of product (number)
//    - quantity: quantity in cart should start at zero (number)
//    - productId: unique id for the product (number)
//    - image: picture of product (url string)
// */

// /* Images provided in /images folder. All images from Unsplash.com
//    - cherry.jpg by Mae Mu
//    - orange.jpg by Mae Mu
//    - strawberry.jpg by Allec Gomes
// */

// /* Declare an empty array named cart to hold the items in the cart */

// /* Create a function named addProductToCart that takes in the product productId as an argument
//   - addProductToCart should get the correct product based on the productId
//   - addProductToCart should then increase the product's quantity
//   - if the product is not already in the cart, add it to the cart
// */

// /* Create a function named increaseQuantity that takes in the productId as an argument
//   - increaseQuantity should get the correct product based on the productId
//   - increaseQuantity should then increase the product's quantity
// */

// /* Create a function named decreaseQuantity that takes in the productId as an argument
//   - decreaseQuantity should get the correct product based on the productId
//   - decreaseQuantity should decrease the quantity of the product
//   - if the function decreases the quantity to 0, the product is removed from the cart
// */

// /* Create a function named removeProductFromCart that takes in the productId as an argument
//   - removeProductFromCart should get the correct product based on the productId
//   - removeProductFromCart should update the product quantity to 0
//   - removeProductFromCart should remove the product from the cart
// */

// /* Create a function named cartTotal that has no parameters
//   - cartTotal should iterate through the cart to get the total cost of all products
//   - cartTotal should return the total cost of the products in the cart
//   Hint: price and quantity can be used to determine total cost
// */

// /* Create a function called emptyCart that empties the products from the cart */

// /* Create a function named pay that takes in an amount as an argument
//   - amount is the money paid by customer
//   - pay will return a negative number if there is a remaining balance
//   - pay will return a positive number if money should be returned to customer
//   Hint: cartTotal function gives us cost of all the products in the cart  
// */

// /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


// /* The following is for running unit tests. 
//    To fully complete this project, it is expected that all tests pass.
//    Run the following command in terminal to run tests
//    npm run test
// */

const products = []; 
const cherry = {
  name: "cherry",
  price: 2,
  quantity: 0,
  productId: 101,
  image: "./images/cherry.jpg"
};
const orange = {
  name: "orange",
  price: 3,
  quantity: 0,
  productId: 102,
  image: "./images/orange.jpg"
};
const strawberry = {
  name: "strawberry",
  price: 1,
  quantity: 0,
  productId: 103,
  image: "./images/strawberry.jpg"
};
products.push (cherry, orange, strawberry);      /* move the 3 product objects into the the product array*/
let cart = [];
function addProductToCart (productId){          /* this function adds products to the cart, if product already in cart then increase quantity by 1*/
  const product = products.find(p => p.productId === productId);
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  }
  else {
    cart.push(product);
    product.quantity = 1;
  }
}; 
function increaseQuantity (productId){          /*this function increases the quantitiy of a product already in the cart by 1*/
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  }
}; 
function decreaseQuantity (productId){          /*this function decreases the quantitiy of a product already in the cart by 1 and removes it if quantity = 0*/
  const productIdex = cart.findIndex(product => product.productId === productId);
  if (productIdex !== -1){
    cart [productIdex].quantity -= 1;
    if (cart [productIdex].quantity === 0){  
      cart.splice(productIdex, 1);
    } 
  }
}; 
function removeProductFromCart (productId){     /*this function removes a product from the cart not matter the quantity*/
  const productIdex = cart.findIndex(product => product.productId === productId);
  if (productIdex !== -1){
    cart [productIdex].quantity = 0;  
    cart.splice(productIdex, 1);
  }
}; 
function cartTotal(){       /* this function provides the total cost in the cart based in the products in the cart*/
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};
// function emptyCart (){     /* this function empties the cart*/
//   cart = [];
// };
let paid = 0;
function pay (amount){    /* this function shows the amount to be pay and */
  paid += amount;
  let total = cartTotal();
  let remaining = paid - total;
  if (remaining > 0){
  paid = paid - remaining;
  } 
  return remaining;
};
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  // emptyCart,
};