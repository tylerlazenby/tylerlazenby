"use strict";

let d = new Date();
let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

console.log(d);
let dateStr = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

console.log(d.getMonth());
document.getElementById("footerDate").innerHTML = dateStr;
document.getElementById("copyrightYear").innerHTML = d.getFullYear().toString();