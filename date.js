// find the today date
const today = new Date()
console.log(today);

const date1 = new Date("2023-02-21");
const date2 = new Date("2023-11-23");
if(date1.getTime() < date2.getTime()) {
  console.log('february was before november');
}
else{
  console.log('february was not before november')
}