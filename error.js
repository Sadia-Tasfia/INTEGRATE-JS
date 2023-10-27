// range error ( not in js that frequently)
const numbers = [12, 54, 72, 28, 19];
// console.log(numbers[24]);
//  you should not do it (most of the time)
numbers.length = 3;
console.log(numbers);
console.log(numbers.length);

// reference error (let , const show this error but var not... var show undefined)
console.log(money);
const money = 9000;
console.log(5748742356224556)

// syntex error
// for(i=0 ; i>10 i++){
// }