console.log("Hello World!");

//const tagHello = document.getElementById("ciao");
const tagHello = document.querySelector("#ciao");

console.log(tagHello);

tagHello.innerHTML = "Hello World";

//const tagYear = document.getElementsByClassNameI("anno")[0];
//const tagYear = document.querySelectorAll("body > p.anno")[0];
const tagYear = document.querySelector(".anno");

console.log(tagYear);

tagYear.innerText = "2021";