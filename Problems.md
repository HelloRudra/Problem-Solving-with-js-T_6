# Problem 1

Write a function mergeSortedArrays that takes two arrays of numbers, each already sorted in ascending order, and merges them into a single sorted array.

Your solution should take advantage of the fact that both input arrays are already sorted.

Examples
mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// => [1, 2, 3, 4, 5, 6]
mergeSortedArrays([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]

# Problem 2

Write a function calculateCartTotal that calculates the final total cost of a shopping cart.

Each item in the items array is an object with:

price (number): the unit price
quantity (number): the number of units
discount (number): the percentage discount on that item (e.g., 10 means 10% off)
The function also accepts a taxRate (number), representing the tax percentage (e.g., 8 means 8% sales tax) applied to the combined total after item discounts.

Return the final total rounded to 2 decimal places.

Examples
Example 1
calculateCartTotal([
  { price: 100, quantity: 2, discount: 10 },
  { price: 50, quantity: 1, discount: 0 }
], 10);
// Returns 253