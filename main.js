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

//Find largest item in each subarray (in this case, array contains 4 subarrays):

//Procedural version:
function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
	results[i] = largestNumber;
  }
  return results;
}

//Declarative version:
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

//Advanced declarative version:
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}