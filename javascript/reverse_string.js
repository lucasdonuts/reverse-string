function reverseString(str) {
  arr = str.split('')
  new_arr = []

  for(let i = arr.length - 1; i >=0; i--) {
    new_arr.push(arr[i])
  }

  return new_arr.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
