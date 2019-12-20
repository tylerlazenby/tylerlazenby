"use strict";

let d = new Date();

console.log(d);
let year = d.getFullYear();

document.getElementById('footerYear').innerHTML = year.toString();