//1. Making arrays
var arr = [1,2,3];
var fruits = ['apple', 'banana'];

//2. Get length
var arrlength = arr.length;
var fruitslength = fruits.length;

//3. Indexing arrays
var first = arr[0];
var last = fruits[fruits.length-1];

//4. foreach loop
fruits.forEach(function (item, index, array){
    console.log(item, index);
});

//5. pushing element from the back
fruits.push('orange');

//6. eliminate element from the back
fruits.pop();

//7. pushing element from the front
fruits.unshift("strawberry");

//8. eliminate element from the front
fruits.shift();

//9. finding index inside array
var pos = fruits.indexOf("apple");





