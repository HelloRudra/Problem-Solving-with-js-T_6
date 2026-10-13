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

# Problem 3

Write a function isValidEmail that checks whether a given string is a valid email address according to a simplified format specification.

A string is considered a valid email address if and only if:

It has the format <local>@<domain>.<tld>.
Local part (before @): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9), periods (.), underscores (_), or hyphens (-).
Domain part (between @ and .): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9) or hyphens (-).
Top-Level Domain (TLD) (after .): Contains at least two characters and consists only of alphabetical letters (a-z, A-Z).
The email must not contain any spaces or additional @ characters.
Examples
isValidEmail("user@example.com");
// => true

isValidEmail("invalid.email@");
// => false