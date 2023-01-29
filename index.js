// function toCamelCase(str){
//     let splitted = str.split(/[_-]/)
//     console.log(splitted);
//     let newArr = splitted[0]
//     for (let i = 1; i < splitted.length; i++) {

//        const newStr = splitted[i][0].toUpperCase()
//       const another = splitted[i].slice(1)
//        newArr +=  newStr + another

//     }

//     return newArr.toString()

// }

// toCamelCase("")

//=================================================================================================================
// function findWolf(arr) {
//   const wolf = arr.reverse().findIndex((e) => e === "wolf");

//   return wolf === 0
//     ? "Pls go away and stop eating my sheep"
//      : "Oi! Sheep number " + wolf + "! You are about to be eaten by a wolf!";
// }

// findWolf([
//   "sheep",
//   "sheep",
//   "sheep",
//   "wolf",
//   "sheep",
//   "sheep",
//   "sheep",
//   "sheep",
// ]);

//=================================================================================================================

// function digitalRoot(n) {

//     while(n > 9){
//       const num = n.toString().split("")
//       console.log(num);
//        const res = num.reduce((val,acc)=>

//             +acc + +val)
//         console.log(res);
//         n = res
//     }
//     return n
//   }

//   console.log(digitalRoot(564));

//=================================================================================================================

// function multiply3And5(n){
//     let sum = 0
//     for (let i = 0; i < n; i++) {

//         if(i % 3 === 0 || i % 5 ===0){
//             sum += i
//         }

//     }
//     return sum;
// }

// multiply3And5(10)

//=================================================================================================================

// function findOdd(A) {
//     let odd = 0
//     let count = 0
//    const sorted = A.sort((a,b) => a - b)
//     for (let i = 0; i < sorted.length; i++) {

//         if(odd === sorted[i]){
//             count++
//         }
//         else {

//             if(count % 2 !== 0) break;
//             odd = sorted[i]
//             count = 1
//         }
//     }
//     return odd

//   }

//   console.log(findOdd([0,1,0,1,2]));

//=================================================================================================================

//   function enough(cap, on, wait) {
//     const spare = cap - on - wait
//     return spare >= 0?  "He can fit all " + wait + " passengers" :
//     "He can't fit " + (spare*-1) + " of the " + wait + " waiting"
//   }

//=================================================================================================================

// function mirrorImage(arr){
//   for (let i = 0; i < arr.length-1; i++) {
//    const a = arr[i]
//    const b = arr[i+1]

//     if(a.toString().split("").reverse().join("") === b.toString()){
//       return [a,b]
//     }

//   }
//   return [-1,-1]

// }

// console.log(mirrorImage([3,6,19,91,9,3]));

//=================================================================================================================

// function solution(string) {
//   let newStr = "";
//   for (let i = 0; i < string.length; i++) {
//     newStr +=
//       string[i] === string[i].toUpperCase() ? " " + string[i] : string[i];
//   }
//   return newStr;
// }

// console.log(solution("camelCaseAgain"));

//=================================================================================================================

function countAnimals(animals, count) {
  console.log(animals.match(new RegExp(animals, count)));
}
countAnimals("dog,cat", ["dog", "cat"]);
