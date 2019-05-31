// 1. Every new word must be in UpperCase---fix this

let string = 'i am in the easy code';

function toUpperCase(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0]) {
         arr[i][0].toUpperCase()
        }
    }
    return arr
}
console.log(toUpperCase(string));


// 2.  Reverse the provided string.
//
// function reverseString(str) {
//     let arr = [];
//     let res = str.split('');
//     for (let i = res.length-1; i >= 0; i--) {
//         arr.push(res[i);
//     }
//     return arr.join('')
// }
// console.log(reverseString('hello'));


// 3. Factorial of number
// function factorialize(num) {
//     if (num === 0) { return 1; }
//     return num * factorialize(num - 1);
// }
// console.log(factorialize(10));


// 4. Multiply table
//
// for (let i = 1; i <= 9; i++){
//     let a =  + 7 + ' * ' + i + ' = ';
//     console.log(a)
//     console.log(i * 7)
// }


// 5. Return the length of the longest word in the provided sentence.
//
// function findLongestWordLength(str) {
//     let res = 0;
//     let arr = str.split(' ');
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > res) {
//             res = arr[i].length
//         }
//     }
//     return res
// }
//----------------------------------------------
//     let res = str.split(' ');
//     res.sort(function (a, b) {
//         return b.length - a.length;
//     });
//     return res[0].length
//----------------------------------------------


// 6. Add symbol to string
//
// / function addNewSymbol(string, handler) {
//     let str = '';
//     for (let i = 0; i < string.length; i++){
//         str += handler(string[i])
//     }
//     return str;
// }
// let newStr = addNewSymbol('---', function (symbol) {
//    return symbol + '||'
// })
// console.log(newStr)


// 7. Sort arr, don't use sort method.
// [5, 1, 10, 15, 2, 7, 6, 14, 3, 2, 1]
//
// function mySort(){
//     var myArr = [5, 1, 10, 15, 2, 7, 6, 14, 3, 2, 1];
//     for(var i = 1; i < myArr.length; i++){
//         if(myArr[i] < myArr[i-1]){
//             var temp = myArr[i];
//             myArr[i] = myArr[i-1];
//             myArr[i-1] = temp;
//             i = 0;
//         }
//     }
//     var myString = myArr[0];
//     for(i = 1; i < myArr.length; i++){
//         myString += ', ' + myArr[i];
//         }
//         alert(myString);
//     }


// 8. Return an array consisting of the largest
//    number from each provided sub-array
//
// function largestOfFour(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let maxArrValue = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             if (maxArrValue < arr[i][j]) {
//                 maxArrValue = arr[i][j];
//             }
//         }
//         result.push(maxArrValue);
//     }
//     return result;
// }
// console.log(largestOfFour([
//         [4, 5, 1, 3],
//         [13, 27, 18, 26],
//         [32, 35, 37, 39],
//         [1000, 1001, 857, 1]
//     ]
// ));


// 9. Check if a string (first argument, str) ends with
//    the given target string (second argument, target).
//
// function confirmEnding(str, target) {
//     let length = target.length;
//     let res = str.substr(-length);
//     if (res === target) {
//         return true
//     } else return false
// }
// console.log(confirmEnding("He has to give me a new name", "name"));


// 10. Return array with the sorted numbers
// let number1 = window.prompt('Enter the number1: ');
// let number2 = window.prompt('Enter the number2: ');
// let number3 = window.prompt('Enter the number3: ');
// function promptHandler(num1, num2, num3) {
//     let arr = [];
//     arr.push(num1, num2, num3);
//     arr.sort((a, b) => {return a - b});
//     return arr
// }


// 11. Repeat a given string str (first argument) for num times
// function repeatStringNumTimes(str, num) {
    // let res = '';
    // for (let i = 0; i < num; i++) {
    //     res += str;
    // }
    // return res
    // return  str.repeat(num);
// }
// console.log(repeatStringNumTimes("abc", 1));


// 12. Truncate a string (first argument) if it is longer
//     than the given maximum string length (second argument).
//     Return the truncated string with a ... ending.
// function truncateString(str, num) {
//     let res = str.slice(0, num);
//     if (num >= str.length) {
//         return res
//     } else {
//         return res += '...'
//     }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// 13. Create a function that looks through an array (first argument) and
//     returns the first element in the array that passes a truth test
//     (second argument). If no element passes the test, return undefined.
// function findElement(arr, func) {
//     return arr.filter(func);
// }
// console.log(findElement([1, 2, 3, 4, 5, 6, 7], num => num % 2 === 0));


// 14. Check if a value is classified as a
//     boolean primitive. Return true or false.
// function booWho(bool) {
//     return !bool
// }
// console.log(booWho([].slice));


