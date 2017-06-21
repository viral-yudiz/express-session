/*
 * VAR vs LET vs CONST
 */

// var a = 50;
// var a = 60;

// let b = 50;
//let b = 60;

//const c = 60;
//const c = 30;

/*
 * HTTP SERVER
 */

// const http = require('http');
// const PORT = 3000;
// http.createServer((req, res) => {
//     res.end("HELL0");
// }).listen(PORT, () => {
//     console.log(`Magic happens on PORT : ${PORT}`);
// });

/*
 * USING CUSTOM MODULE
 */

//#1
// var jsonCALL = require('./custom-module');
// console.log(jsonCALL);

//#2
// var functionCall = require('./custom-module');
// console.log(functionCall(10, 20));

//#3
// var multiply = require('./custom-module').multiply;
// console.log(multiply(10, 20));

//#4
// var customModule = require('./custom-module');
// console.log(customModule.multiply(10, 20));

//#5
// var objectCall = require('./custom-module');
// console.log("Array", objectCall.arrayCall);
// console.log("Function", objectCall.functionCall(10, 5));
// console.log("Json", objectCall.jsonCall);
// console.log("Value", objectCall.valueCall);

/**
 * CallBACKS
 */

// function callbackFn(data, callback) {
//     callback(data + 100);
// }
// callbackFn(10, function(data) {
//     console.log(data);
// })

// function promiseFn(data) {

//     return new Promise((resolve, reject) => {
//         if (data < 100) {
//             resolve("Success");
//         } else {
//             reject("Data failed");
//         }
//     });
// }

/**
 * PROMISES
 */

// promiseFn(100).then((Data) => {
//     console.log(Data);
// }, (error) => {
//     console.log(error);
// });