// function evenOrOdd(number) {
//   let result = number % 2;
//   let x ='';
//   if(result == 0){
//     console.log(x = 'Even')
//   }else{
//     console.log(x ='Odd')
//   }
//   return x
// }
// console.log(evenOrOdd(4))
// function evenOrOdd(number){
//   return result = (number % 2  == 0) ? 'Even' : 'Odd';
// }
// console.log(evenOrOdd(3))
const evenOrOdd = (number) => number % 2 == 0 ? 'Even' : 'Odd';

console.log(evenOrOdd(-7))