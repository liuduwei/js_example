"use strict";
// reference type not class
// primitive reference ttype like Date()

let now = new Date(); //dafult is now or parse in ms
// * Date.parse();
// support 5/23/2019, May 23, 2019, ...

let someDate = new Date(Date.parse("May 23, 2019"));
// equal //Date will automatic invoke parse() in background
let someDate = new Date("May 23, 2019");
// overstep date: now or start of the month
// * Date.UTC();
// (year, month, day, hour, minutes, seconds, miloseconds);
// day default is 1, other is 0; year and month is must

let y2k = new Date(Date.UTC(2000, 0)); // GMT time
let allFives = new Date(Date.UTC(2000, 3, 20, 13, 22, 23));
// local time
let y2k = new Date(2000, 0); //local time
// * Date.now()
let start = Date.now(); //time in run
let stop = Date.now();

// !inherit
// * Date rewrite toLocalString(), toString(), valueOf()
// valueOf return ms utc
// * Date formating
// toDateString(week, month, day, year), toTimeString(hour minutes seconds timezone), toLocalDateString(), toLocalTimeString(), toUTCString()
//TODO Date-function
