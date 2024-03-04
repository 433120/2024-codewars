//Codewars.com
//https://www.codewars.com/kata/53369039d7ab3ac506000467

//NORMAL
// function boolToWord(bool){
//     var result ='';
//     if (bool){
//         result='Yes';
//     }else{
//         result='No';
//     }
//     return result;
// }


//TERNARY SOLUTION
// function boolToWord( bool ){
//     return result= (bool===true) ?'Yes' : 'No'
//   }

//   console.log(boolToWord(false))

//CODE EXPRESSION SOLUTION
// const boolToWord = (bool)=> bool == true ?'Yes':'No';
const boolToWord = (bool)=> bool ? 'Yes':'No';

console.log(boolToWord(false))