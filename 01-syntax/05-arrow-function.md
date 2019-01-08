# The arrow functions

ES6 provides a new way to create functions using the => operator. These functions are called as arrow functions. This new method has a shorter syntax, and the arrow functions are the anonymous functions

```javascript
let circleArea = (pi, r) => {
  let area = pi * r * r
  return area
}

let result = circleArea(3.14, 3)

console.log(result) // 28.25999999999
```

If an arrow function contains just one statement, then you don't have to use the `{}` brackets to wrap the code. When `{}` brackets are not used then the value of the statement in the body is automatically returned.

```javascript
let circleArea = (pi, r) => pi * r * r
let result = circleArea(3.14, 3)
console.log(result) // 28.25999999999
```

## The value of "this" in an arrow function

In the arrow functions, also called “**fat arrow**” functions the value of this keyword is same as the value of `this` keyword of the enclosing scope (the global or function scope, inside whichever the arrow function is defined), instead of referring to the context object (that is, the object inside of which the function is a property), which is the value of this in traditional functions.

