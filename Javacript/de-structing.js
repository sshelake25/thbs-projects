// //ES5 --> from aray you get value inside varible 
// var list = [1, 2, 3]; // array 10 element;

// var a = list[0], b = list[2];

// //  let name = 'thbas';
// //  let hello = 'goodby';
// //  let name = 'thbs', hello = 'goodby';
// //  let name, hello;

// // var tmp = a; 
// // a = b; 
// // b = tmp;

// /**
//  * destructring of values into varibles
//  */

// //array 
// let namesList = [45, 78, 'three', 23]; //
// // array de-structing
// let [first, , , name] = namesList;

// console.log(first, name);


/**
 * Object destructing
 */
//es5 / old way
let getPersonInfo = () => {
    return {
        op: 'plus',
        lhs: 'left-side',
        rhs: 'right-side'
    }
}

var tmp = getPersonInfo();
// console.log(tmp);
// var op = tmp.op;
// var lhs = tmp.lhs;
// var rhs = tmp.rhs;

//short ES 6 -- object de-struct 
//[] {}
let { op, lhs, rhs } = getPersonInfo(); //object 
console.log(op, lhs, rhs);


let cmpy = {
    name_ss: 'thbs',
    noOfEmp: 100,
    foundation: 'March 2020',
    address: {
        premant: {
            city: 'mum'
        },
        current: {
            city: 'bang',
            pin: 2020
        }
    }
};

//cmpy.address.current.city// 
//cmpy.address.current.pin// 
//cmpy.address.current.abc// 


//nested object property destructiing 
let {
    noOfEmp,
    foundation,
    address: { premant: { city } },
    address: { current: { pin } }
} = cmpy;

console.log(noOfEmp, foundation, city, pin);