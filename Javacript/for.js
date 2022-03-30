// Way to declar array inside js
//  let myArr = [1, 4,5];
// Let myArr = new Array();

let myArr = ['hello', 'how', 'are', 'you'];
//trandiational for loop inside javascript
for (let i = 0; i < myArr.length; i++) {
    console.log(`for loop number ${i} array val at iteration "${myArr[i]}"`)
}

// forEach();
console.log('starting loop with forEach method');
myArr.forEach((ele, index, arr) => {
    console.log(`for loop number ${index} array val at iteration "${ele}"--> ${arr}`)
});

//filtere element base on condition 
let numberList = [20, 4, 15, 5, 2, 7];

let elemeless_5 = numberList.filter((val, indx, arr) => {
    // on what we want filter elemnts
    console.log(val, indx, arr)
    return val > 5;
});
// [20, 15, 7]
console.log(elemeless_5);

// filter array of object 
let personList = [
    { name: 'Priya', skill: ['java', 'javascript', 'css'] },
    { name: 'Chetan', skill: ['java', 'javascript', 'html'] },
    { name: 'Chetali', skill: ['javascript', 'html'] },
    { name: 'Raju', skill: ['javascript'] }
];

let filteredPerson = personList.filter((val, indx) => {
    // console.log(val)
    return val.name.startsWith('C');
    // return val.skill.includes('css'); // true or false 
});

console.log('======= Fillter Result ==========');
console.log(filteredPerson)