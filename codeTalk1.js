// // Create a function that recieves an array of numbers and returns an array containing only the positive numbers

// function getPositives(ar){
//     var ar2 = [];
//     for (var i = 0; i < ar.length; i++){
//         var el = ar[i];
//         if (el >= 0){
//             ar2.push(el);
//         }
//     }
//     return ar2;
// }

// var ar = [-5, 10, -3, 12, -9, 5, 50, 0, 1];
// var ar2 = getPositives(ar);

// console.log(ar2);




// How I would've created this function

let array = [-5, 10, -3, 12, -9, 5, 50, 0, 1];
let array2 = getPositives(array);

function getPositives(array){
    let array2 = [];
    for (let i = 0; i < array.length; i++){
        let positive = array[i];
        if (positive >= 0){
            array2.push(positive);
        }
    }
    return array2;
}

console.log(array2);