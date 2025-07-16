function sym(...args) {
  // Remove duplicates from each array
  const sets = args.map((arr) => [...new Set(arr)]);

  // Start with the first set
  let result = sets[0];

  for (let i = 1; i < sets.length; i++) {
    result = mergeTwo(result, sets[i]);
  }

  return [...new Set(result)].sort((a, b) => a - b);
}

function mergeTwo(args1, args2) {
  let res = [];

  args1.forEach((value) => {
    if (!args2.includes(value)) {
      res.push(value);
    }
  });

  args2.forEach((value) => {
    if (!args1.includes(value)) {
      res.push(value);
    }
  });

  return res;
}

// Completed
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // should contain only three elements.

// sym([1, 2, 3], [5, 2, 1, 4, 5]) //  [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) // should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) //  [1, 4, 5].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) //  [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) // should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) //  [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) // should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) //  [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // should contain only eight elements.

// sym([1, 2, 3], [5, 2, 1, 4]); //  [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]); // should contain only three elements.

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //  [2, 3, 4, 6, 7].

//console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //  [3, 4, 5].
