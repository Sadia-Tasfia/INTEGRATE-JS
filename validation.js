// check all types like number , string , boolean, isNaN
const number = 23;
const fullName = 'sadia tasfia';

if (typeof number === "number") {
  console.log("value is a number");
} else {
  console.log("value is not a number");
}

// check array , object
const numbers = [2, 30, "tasfia", 203];
const student = {
  name: 'sadia tasfia' ,
  job : 'student',
  age : 23
}

console.log(typeof numbers);
// check for array like this ..otherwise if use typeof then it'll show object not array
console.log(Array.isArray(numbers));
console.log(typeof student);
// student is not array ..it's a object .. ans is false
// console.log(Array.isArray(student));

// check isNaN 
console.log(isNaN(number));
console.log(isNaN(fullName));
console.log(isNaN([]));
console.log(isNaN({}))