// Assign other value to array element:
// let myArray = ["a", "b", "c", "d"];
// myArray[0] = 2;


// Array methods:
// unshift()-----adds elements to the beginning.
// pop()---------removes an element from the end of an array.
// shift()-------removes an element from the beginning.


// Copy an Array with the Spread Operator:
// let arr = [true, false, 1, 'asd'];
// let newArr = [...arr];
//
//-----------------------------------------
// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//         newArr.push(arr);
//         num--;
//     }
//     return newArr;
// }
//
// console.log(copyMachine([1, 2, 3], 3));


// Combine Arrays with the Spread Operator
// let thisArray = ['orange', 'black', 'green'];
// let thatArray = ['white', ...thisArray, 'blue'];


function filteredArray(arr, el) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 5],
    [3, 13, 26],
    [19, 3, 9]], 3));