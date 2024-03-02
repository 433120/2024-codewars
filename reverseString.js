// Codewars.com
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// function solution(str){
//     return str.split("").reduce((acc, char) => char + acc, ""); 
//   }

//REVERSE()
function solution(str){
    return str.split("").reverse().join(""); 
  }

console.log(solution("hello"))