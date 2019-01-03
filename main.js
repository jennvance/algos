//Reverse a string:
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Factorialize:
function factorialize(num){
  if(num ===0){
    return 1;
  }
  return num * factorialize(num-1)
}