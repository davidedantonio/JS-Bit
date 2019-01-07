#The `let` keyword

## Declaring function scoped variables

The JavaScript variables that are declared using the var keyword are called as function scoped variables.

```javascript
var tomato = '🍅'; //accessible globally

function myFunction() {
  console.log(tomato)

  var pear = '🍐' //accessible throughout function

  if (true) {
    var meat = '🍖' // accessible throughout function
    console.log(pear)
  }

  console.log(meat)
}

myFunction()
```

## Declaring block scoped variables

Variables that are declared using the `let` keyword are called as block scoped variables. The block scoped variables behave the same way as the function scoped variables when declared outside a function, that is, they are accessible globally.

```javascript
let tomato = '🍅'; //accessible globally

function myFunction() {
  console.log(tomato)

  let pear = '🍐' //accessible throughout function

  if (true) {
    let meat = '🍖' // accessible throughout the "if" statement
    console.log(pear)
  }

  console.log(meat)
}

myFunction()
```

## Re-declaring variables

When you declare a variable using the var keyword that is already declared using var keyword (in the same scope) then it's overwritten.

```javascript
var a = '🍅';
var a = '🍖';

console.log(a);

function myFunction() {
 var b = '🍖';
 var b = '🍐';
 console.log(b);
}

myFunction(); // '🍖' '🍐'
```

When you declare a variable with a name that's already accessible in a function (or inner function), or is a sub-block using var or the let keyword respectively, then it's a different variable.

```javascript
var a = 1;
let b = 2;

function myFunction() {
  var a = 3; //different variable
  let b = 4; //different variable

  if(true) {
    var a = 5; //overwritten
    let b = 6; //different variable

    console.log(a); // 5
    console.log(b); // 6
  }

  console.log(a); // 5
  console.log(b); // 4
}

myFunction();

console.log(a); // 1
console.log(b); // 2
```