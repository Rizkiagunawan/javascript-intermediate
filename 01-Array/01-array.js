// <---JAWABAN ARRAY NO 1--->
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    let reverseArr = [];
    let reverseNumber = '';
    for (let i = arr.length; i--;) {
        reverseNumber += arr[i];
        reverseArr.push(arr[i])
    }
    return reverseArr;
}
const newArr = reverse(arr);
const newArr2 = reverse(arr2);
console.log(arr, newArr);
console.log(arr2, newArr2);

// <---JAWABAN ARRAY NO 2--->
const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            counter++;
        }
    }
    return counter;
}

console.log(getAverage(arr3))
console.log(getAverage(arr4))

// <---JAWABAN ARRAY NO 3--->
const arr5 = [
    [10],
    [9, 7, 1],
    [2, 8],
];
function searchInArray(arr, num) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        for (let j = 0; j < number.length; j++) {
            tempArr.push(number[j]);
        }
    }

    for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] === num) {
            var found = true;
            var index = k;
        }
    }

    if (found) {
        return index;
    } else {
        return 'null';
    }
}
console.log(searchInArray(arr5, 3));
console.log(searchInArray(arr5, 2));
console.log(searchInArray(arr5, 4));
console.log(searchInArray(arr5, 8));