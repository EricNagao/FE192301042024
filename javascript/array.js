var array = [5, 8, 10, 9, 7, 10];

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);

var newValue = array.splice(0, 3, 9, 11, 12);


// var newValue = array.map((value, index, array) => {
//     return {idade: [index]};
// });

// var newValue = array.filter((value, index, array) => {
//     return value >= 8;
// });

// var newValue = array.unshift(2,5,8)
// var newValue = array.concat([5,8,45])
// var newValue = array.toString();

// var newValue = array.sort()

// var newValue = array.reverse();

// array.forEach(value => {
//     console.log(value);
// });

// for(var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

console.log('New Value: ', newValue ?? '');
console.log('Array Original: ', array);