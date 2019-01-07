# The spread Operator

- A spread operator is represented by the " ... " token.
- A spread operator splits an iterable object into the individual values.
- A spread operator can be placed wherever multiple function arguments or multiple elements (for array literals) are expected in code.
- The spread operator is commonly used to spread the values of an iterable object into the arguments of a function.

Before ES6, for providing the values of an array as function argument, the programmers used the `apply()` method of functions:

```javascript
function sum(a, b) {
  return a + b
}

var data = [1, 4]
var result = sum.apply(null, data)
console.log(result) // Output "5"
```
Here, the apply method takes an array, extracts the values, passes them as individual arguments to the function, and then calls it. ES6 provides an easy way to do this, using the spread operator:

```javascript
function sum(a, b) {
  return a + b
}

let data = [1, 4]
let result = sum(...data)

console.log(result) // Output "5"
```

## Making array values a part of another array

It can also be used to make the array values a part of another array.

```javascript
let array1 = [2, 3, 4]
let array2 = [1, ...array1, 5, 6, 7]

console.log(array2) //Output "1, 2, 3, 4, 5, 6, 7"
```

## Pushing the values of an array into another array

Sometimes, we may need to push the values of an existing array into the end of another existing array.

```javascript
let fruits = ['🍎', '🍐']
let meat = ['🍖']

// Old way
let doughnut = fruits.concat(meat, '🍩')
console.log(doughnut) // // [ '🍅', '🍐', '🍖,', '🍩' ]

// ES6
let doughnutEs6 = [...fruits, ...meat, '🍩']
console.log(doughnutEs6) // [ '🍅', '🍐', '🍖,', '🍩' ]
```

## Spreading multiple arrays

Multiple arrays can be spread on a single line of expression:

```javascript
let array1 = [1]
let array2 = [2]
let array3 = [...array1, ...array2, ...[3, 4]] // multi array spread
let array4 = [5]

function sum(a, b, c, d, e) {
  return a + b + c + d + e
}

let result = sum(...array3, ...array4) // multi array spread
console.log(result) // Output "15"
```