function hasTargetSum(array, target) {
  // Write your algorithm here
  const checkedNumbers = {};
  for (const num of array) {
    const compareNum = target - num;
    if (compareNum in checkedNumbers) return true;
    checkedNumbers[num] = compareNum;
  }
  return false;
}

console.log(hasTargetSum([28, 55, 24, 69], 83));

/* 
  Write the Big O time complexity of your function here
*add to obj => O(1)
*for loop => O(n)
*obj lookup and assign => O(1)
Big O time complexity of the function is O(n)
*/

/* 
  Add your pseudocode here
*create obj to add the numbers
*subtract a num from the target to compare with any other in obj
*if result match a num in obj, return true, otherwise return false
*/

/*
  Add written explanation of your solution here
  *the function creates a checkedNumbers object to add the numbers
  *loops thro the array and gets diff between the num and target
  *compares the diff with a num in the obj, then return true if matching, else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
