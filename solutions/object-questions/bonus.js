// Bonus: Mix `map()`, `filter()`, and `forEach()` with Objects

// Problem Statement:
// Write a function that does the following:
// 1. Filters out all products with a price less than 30.
// 2. Maps over the remaining products to apply a 10% discount.
// 3. Logs the updated product details using `forEach()`.

function processProducts(arr) {
  // Step 1: Filter products with price >= 30
  const filteredProducts = arr.filter((product) => product.price >= 30);

  // Step 2: Map to apply a 10% discount on the remaining products
  const discountedProducts = filteredProducts.map((product) => {
    return {
      name: product.name,
      price: product.price * 0.9, // Applying 10% discount
    };
  });

  // Step 3: Use forEach to log the updated details
  discountedProducts.forEach((product) => {
    console.log(`Product: ${product.name}, Price: ${product.price.toFixed(2)}`);
  });
}

const products = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 40 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 10 },
];

processProducts(products);
// Expected output:
// 'Product: Pants, Price: 36.00'
// 'Product: Shoes, Price: 45.00'
