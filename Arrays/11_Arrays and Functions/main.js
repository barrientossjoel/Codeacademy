const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement (newArr){
  newArr.pop() // removes the last element of the array
}

removeElement(concept)

console.log(concept)