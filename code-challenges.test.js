// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffleRest', () => {
  it('Will take in an array, shift off the first element, then shuffle the array', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffleRest(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleRest(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// b) Create the function that makes the test pass.

// First I create a function called shuffleRest that takes in an array as a parameter. Then I will use the shift function to remove the first element from the array. Next, I will iterate through the array using a for loop, randomly select an index from the entire array, then swap that index with the current value of i. This way, there is a chance for the value to end up atany index, including the one it was already at. Then I return the array.

const shuffleRest = (array) => {
  array.shift()
  for (let i = 0; i < array.length; i++) {
    let randIndex = Math.floor(Math.random() * (array.length));
    let temp = array[i]
    array[i] = array[randIndex]
    array[randIndex] = temp
  }
  return array
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('tallyVotes', () => {
  it('Will take in an object, sum the positive and negative votes, and return the total', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(tallyVotes(votes1)).toEqual(11)
    expect(tallyVotes(votes2)).toEqual(-31)
  })
})

// b) Create the function that makes the test pass.

// I will make a function called tallyVotes that takes in an object as parameter. Then, I will access the objects upVotes key, and subtract the stored value from the value in the downVotes key, and return the result.

const tallyVotes = (obj) => {
  return obj.upVotes - obj.downVotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('uniqueArray', () => {
  it('Will take in two arrays, and return one with all the unique values', () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(uniqueArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// First I will make a function called uniqueArray that takes in two arrays as parameters. The function will create a new array, and then iterate through the first argument array, check if the current value is inside the new array with .includes, and push it in if it is not. It will then do the same for the second array, and return the newArr as the result.

const uniqueArray = (arr1, arr2) => {
  let newArr = []
  arr1.forEach(element => {
    if(!newArr.includes(element)){
      newArr.push(element)
    }
  });
  arr2.forEach(element => {
    if(!newArr.includes(element)){
      newArr.push(element)
    }
  });
  return newArr
}

describe('uniqueArray2', () => {
  it('Will take in two arrays, and return one with all the unique values', () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    dataArrays = [dataArray1, dataArray2]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(uniqueArray2(dataArrays)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Here I refactored my code to take in a single array of arrays as a parameter and adaptively iterate through as many as are passed, but I was unable to figure out how to use the spread operator to take a dynamic number of arguments. I tried using the arguments object but could not find how to use the spread operator with that either.

const uniqueArray2 = (dataArrays) => {
  let newArr = []
  dataArrays.forEach(arr => {
    arr.forEach(element => {
      if(!newArr.includes(element)){
        newArr.push(element)
      }
    });
  })
  return newArr
}