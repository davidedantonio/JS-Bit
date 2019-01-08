# The destructuring assignment

The destructuring assignment is an expression that allows you to assign the values or properties of an iterable or object, to the variables, using a syntax that looks similar to the array or object construction literals respectively. A destructuring assignment makes it easy to extract data from iterables or objects by providing a shorter syntax. A destructuring assignment is already present in the programming languages, such as Perl and Python, and works the same way everywhere.

There are two kinds of destructuring assignment expressions — the array and object destructuring assignment.

## The array desctructuring assignment

If we want to extract data using arrays, it's quite simple using destructuring assignment. Before ES6, the programmers used to do it this way to assign the values of an array to the variables:

```javascript
var myArray = ["Hello", "I" , "am", "Davide"]
var greeting = myArray[0]
var pronoun = myArray[1]
var verb = myArray[2]
var name = myArray[3]
```

In ES6, we can do this in just one line statement using the array destructuring assignment:

```javascript
var introduction = ["Hello", "I" , "am", "Davide"]
var [greeting, pronoun, verb, name] = introduction

console.log(greeting) // "Hello"
console.log(pronoun) // "I"
console.log(verb) // "am"
console.log(name) // "Davide"
```

We can also do this with the same result.

```javascript
var [greeting, pronoun, verb, name] = ["Hello", "I" , "am", "Davide"]

console.log(greeting) // "Hello"
console.log(pronoun) // "I"
console.log(verb) // "am"
console.log(name) // "Davide"
```

### Declaring Variables before Assingment

The variables can be declared before being assigned like this.

```javascript
var greeting, pronoun, verb, name
[greeting, pronoun, verb, name] = ["Hello", "I" , "am", "Davide"]

console.log(greeting) // "Hello"
console.log(pronoun) // "I"
console.log(verb) // "am"
console.log(name) // "Davide"
```

Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second variable in the array and so on.

### Ignoring values

```javascript
let [greeting, , verb, name] = ["Hello", "I" , "am", "Davide"]

console.log(greeting) // "Hello"
console.log(verb) // "am"
console.log(name) // "Davide"
```

### Using the rest operator in the array destructuring

We can prefix the last variable of the array destructuring expression using the " ... " token. In this case, the variable is always converted into an array object, which holds the rest of the values of the iterable object, if the number of other variables is less than the values in the iterable object.

```javascript
let [greeting, ...others] = ["Hello", "I" , "am", "Davide"]

console.log(greeting) // "Hello"
console.log(Array.isArray(others)) // true
console.log(others) // ["I" , "am", "Davide"]
```

### Default value for variables

While destructuring, you can also provide the default values to the variables if an array index is `undefined`.

```javascript
let [greeting, pronoun, verb, name = "Davide"] = ["Hello", "I" , "am"]

console.log(name) // "Davide"
```

### Swapping values using destructuring assignment

One more thing. We can use destructuring assignment to swap the values of variables. Before ES6 the programmers do something like this:

```javascript
var a = 3
var b = 6

var temp = a
a = b
b = temp

console.log(a) // 6
console.log(b) // 3
```

With ES6 desctructuring assignment we can swap values in this simple way:

```javascript
var a = 3
var b = 6

[a,b] = [b,a]

console.log(a) // 6
console.log(b) // 3
```

## The object destructuring assignment

An object destructuring assignment is used to the extract property values of an object and assign them to the variables. Before ES6 coming, the programmers to do it assigned the values to the variables one at a time in this way:

```javascript
var object {name: "Davide", age: 35}
var name = object.name
var age = object.age
```

