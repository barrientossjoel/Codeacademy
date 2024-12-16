let isLocked = false;

//Default If else block
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

//To ternary operator
isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

//Default
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

//To ternary operator
favoritePhrase === 'Love That!' ? console.log('I love that!')
 : console.log("I don't love that!");