let tomato = '🍅'; //accessible globally

function myFunction() {
  console.log(tomato)

  let pear = '🍐' //accessible throughout function

  if (true) {
    let meat = '🍖,' // accessible throughout the "if" statement
    console.log(pear)
  }

  console.log(meat)
}

myFunction()