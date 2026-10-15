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

# problem 4

Write a function gcd that computes the greatest common divisor (GCD) of two non-negative integers a and b.

The greatest common divisor is the largest positive integer that divides both numbers without leaving a remainder.

If one of the numbers is 0 and the other is positive, their GCD is the positive number.
If both numbers are 0, return 0.
Examples
gcd(12, 18);
// 6
gcd(7, 13);
// 1


# Problem 5

Given an array of numbers, return the length of the longest contiguous streak in which each number is strictly greater than the previous number.

If the input array is empty, return 0.

Examples
longestIncreasingStreak([1, 2, 3, 1, 2]);
// => 3 (streak [1, 2, 3])
longestIncreasingStreak([5, 4, 3, 2, 1]);
// => 1 (no adjacent element is strictly greater)
Example 1
Input: nums = [1,2,3,1,2]

Output: 3

Explanation: The subarray [1, 2, 3] has length 3 and is strictly increasing.

Example 2
Input: nums = [5,4,3,2,1]

Output: 1

Explanation: No element is greater than its previous element, so any single element of length 1 is the longest streak.


# Problem 6
Given an array arr and a positive integer size, split the array into consecutive subarrays (chunks) where each subarray has a length of at most size.

The final chunk may contain fewer elements than size if the array cannot be split evenly. Return all chunks in a new array.

Examples
chunkArray([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
chunkArray(["a", "b", "c", "d"], 2);
// => [["a", "b"], ["c", "d"]]


# Problem 7
Determine if a given string represents a valid Bangladeshi mobile number. A valid number must conform to one of the following formats:

Starts with 01, followed by 9 more digits. The digit immediately after 01 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 01712345678)
Starts with +8801, followed by 9 more digits. The digit immediately after +8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., +8801712345678)
Starts with 8801, followed by 9 more digits. The digit immediately after 8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 8801712345678)
All characters must be digits, except for the optional leading + sign.

Example 1
Input: phoneNumber = "01712345678"

Output: true

Example 2
Input: phoneNumber = "+8801987654321"

Output: true


# Problem 8

Write a function `daysBetweenDates` that calculates the absolute number of whole days between two calendar dates given in `YYYY-MM-DD` format.

The calculation must accurately account for varying month lengths and leap years. The dates can be provided in any order.

## Examples

```js
daysBetweenDates("2020-01-15", "2020-01-20");
// 5

```

```js
daysBetweenDates("2020-01-15", "2019-12-31");
// 15

```



# Problem 9

Write a function toQueryString that takes a flat object of key-value pairs (where values are strings or numbers) and converts it into a URL query string.

Each pair must be formatted as key=value, and pairs must be joined by &. Both keys and values should be encoded using standard URI component encoding (e.g. encodeURIComponent). Pairs should appear in the order returned by Object.entries(params).

Do not include a leading ? in the output. If the input object has no keys, return an empty string "".

Examples
toQueryString({ search: "hello world", page: 1 });
// => "search=hello%20world&page=1"
toQueryString({ sort: "asc", limit: 10 });
// => "sort=asc&limit=10"


# Problem 10

