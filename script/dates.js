let d = new Date();
let year = d.getFullYear();

document.getElementById("currentYear").textContent = year.toString();

let ld = new Date(document.lastModified);

let dayNumber = ld.getDate();
let monthNumber = ld.getMonth() + 1;
let yearNumber = ld.getFullYear();

document.getElementById("lastUpdatedDate").textContent = monthNumber.toString()  + "/" + dayNumber.toString() + "/" + yearNumber.toString();