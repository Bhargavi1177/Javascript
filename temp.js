// filters or methods of an array [array methods]

//  I. Mutator Methods (Modify the orginal Array)
// 1.push()-- add new items to the end of an array
const temp_arr = [10, 20, 30, 40, 50];
const person_details = [
    { name: 'krish', age: 22 },
    { name: 'Ram', age: 19 },
    { name: 'Arjun', age: 30 },
    { name: 'Lakshman', age: 25 },
];

let res = temp_arr.push(60)
console.log(temp_arr)
let res2 = person_details.push({ name: 'sita', age: 23 })
console.log(person_details)


// 2.pop() -- removes the last element of an array

temp_arr.pop()
console.log(temp_arr)

person_details.pop()
console.log(person_details)


//3.shift() -- removes the first element of an array

temp_arr.shift()
console.log(temp_arr)

person_details.shift()
console.log(person_details)

//4.unshift() -- adds items at the beginning of an array

temp_arr.unshift('numbers')
console.log(temp_arr)

person_details.unshift({ name: 'bhargavi', age: 21 })
console.log(person_details)

//5.splice(index(position),how many ,element) -- add elements at specfic position 

temp_arr.splice(2, 0, '105', 106)
console.log(temp_arr)

//6.reverse() -- revrese the array

temp_arr.reverse()
console.log(temp_arr)

//7.sort() --sorts the order of an array

temp_arr.sort(function(a, b) { return a - b })
console.log(temp_arr)


// II. Accersor Methods(Do not modify the original array but return a new result)
//8.concat() -- join two arrays(comibine with other)

const arr1 = ['Bhargavi', 'Vegesna', 'varma', 'akhila', 'Radha']
const arr2 = [10, 30, 50, 70, 90, 110]

let res1 = arr1.concat(arr2)
console.log(res1)

//9.join() -- returns array as a string (in middle )

let res3 = arr1.join(arr2)
console.log(res3)

//10.slice() --returns selected array elements as a new array

let res4 = arr1.slice(1, 5)
console.log(res4)

// III. Iteration Methods
//11.Foreach(function(element,index)) --calls a function for each element in an array

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'guava']
fruits.forEach(function(fruits, index) {
    console.log(index, fruits)
})

fruits.forEach((fruits, index) => {
    console.log(index, fruits)
})

const temp = [22, 33, 44, 55, 66, 77, 88, 99]
let temp_ = []
temp.forEach((temp) => {
    if (temp % 2 == 0) {
        temp_.push(temp);
    }
})
console.log(temp_)

// 12.map() -- method creates a new array from the results of calling a function for every element

const temp_1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
let res_ = temp_1.map(Math.sqrt);
console.log(res_);

let res_1 = res_.map((res_) => res_ * 2)
console.log(res_1)

// 13. filter() -- creates a new array filled with elements that pass a test provided by a function

const age = [10, 18, 12, 22, 15, 17, 25, 45, 32, 75, 48]
const new_age = []
let res_2 = age.filter((age_) => {
    if (age_ <= 18) {
        new_age.push(age_);
        //return true;
    }
    //return false;
})
console.log(new_age.sort())

//14. reduce() --  used to reduce an array to a single value(round value)
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// callback: A function that is called once for each element in the array. It takes four arguments:
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed.
// currentIndex: The index of the current element.
// array: The array on which reduce() was called.
// initialValue (Optional): The initial value of the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

let arr_ = [2, 4, 6, 8, 10, 1]
const res_3 = arr_.reduce((acc, cur_val) => {
    return acc + cur_val
})
console.log(res_3)

// 15. some(element, index) --checks if any of the elements in an array pass a test it returns true --boolean value(true or false)

let res_4 = arr_.some((element) => {
    if (element % 2 == 0) {
        return element
    }
})
console.log(res_4) //return true (if any 1 elements passes ethe test returns true)

// 16. every() --checks if every element in an array pass a test it returns true --boolean value(true or false)

let res_5 = arr_.every((ele) => {
    if (ele % 2 == 0) {
        return ele
    }
})
console.log(res_5) //return flase (each element should pass the test then only returns true)

// IV. Searching and Finding Methods
// 17. indexof(searchElement, fromIndex(optional)) --finds the index of the first occurrence of a specified element within an array. If the element is not found, it returns -1.

let fruits_ = ['apple', 'banana', 'orange', 'kiwi', 'apple', 'guava']
let res_6 = fruits_.indexOf('apple')
console.log(res_6)

// 18. lastindexof() --similar to indexOf(), but it returns the index of the last occurrence of a specified element within an array

let res_7 = fruits_.lastIndexOf('apple')
console.log(res_7)

// 19. Find() --is used to return the first element in an array that satisfies a provided testing function. It returns undefined if no element satisfies the condition.

const ages = [3, 10, 18, 20];
let res_8 = ages.find((age) => {
    return age > 18;
});

console.log(res_8);

// 20. findindex() --similar to find(), but it returns the index of the first element in an array that satisfies a provided testing function. If no element satisfies the condition, it returns -1.

let res_9 = ages.findIndex((age) => {
    return age >= 21;
})
console.log(res_9)

// 20 a. findlast() --returns the value of the last element in an array that passes a test (provided by a function
// 20 b.findlastindex()

// V. Iteration and Copying Methods
// 21. entries() --is used to create an iterator object that returns key-value pairs for each element in an array. This iterator can be used to loop through the array and access both the index (key) and the corresponding element (value).
//The for...of loop is then used to iterate over the entries, and each entry is a key-value pair where the key is the index and the value is the corresponding element.

let res_10 = fruits.entries()
for (let x of res_10) { //for ... of
    console.log(x)
}

// 22. keys() --is used to create an iterator object that returns the keys (indices) for each element in an array. This iterator can be used to loop through the array and access the indices.

let res_11 = fruits.keys()
for (let key of res_11) {
    console.log(key)
}

let res__ = [...fruits.keys()]
console.log(res__)

//( we can use array from also --- Array.from(fruits.keys()))

// 23. values() --is used to create an iterator object that returns the values for each element in an array. This iterator can be used to loop through the array and access the actual elements.

let res_12 = [...fruits.values()]
console.log(res_12)

// 24. Array.of -- creates a new array with the given elements as its elements.
//It is particularly useful when you want to create an array with a specific set of elements, especially when the number of arguments is variable.

const newArray = Array.of(1, 2, 3, 4, 5);
console.log(newArray);

// 25. Array.from() --method creates a new array from an iterable object or array-like object. It can also be used with a mapping function to transform elements.

const newArray_ = Array.from('hello');
console.log(newArray_);

// 26. at() --returns an indexed element from an array.

let res_13 = fruits.at(2)
console.log(res_13)