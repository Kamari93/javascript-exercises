// 1st solution with filter function
const removeFromArray = function (arr, ...removeItems) {
    // create a delete arr from the 2nd params
    let deleteItems = Array.from(removeItems, item => item);
    // create a new arr that only includes items not in deleted arr
    let filtered = arr.filter(x => !deleteItems.includes(x));

    return filtered;
};

// 2nd solution with for loop
// const removeFromArray = function (arr, ...removeItems) {
//     let removeArr = Array.from(removeItems);
//     let unique = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!removeArr.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// Do not edit below this line
module.exports = removeFromArray;
