let fruits = ['🍎', '🍐']
let meat = ['🍖']

// Old way
let doughnut = fruits.concat(meat, '🍩')
console.log(doughnut) // // [ '🍅', '🍐', '🍖,', '🍩' ]

// ES6
let doughnutEs6 = [...fruits, ...meat, '🍩']
console.log(doughnutEs6) // [ '🍅', '🍐', '🍖,', '🍩' ]

