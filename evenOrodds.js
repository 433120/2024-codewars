// Codewars.com
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript 

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