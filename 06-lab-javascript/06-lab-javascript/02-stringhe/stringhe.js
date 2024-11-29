//document.querySelectorAll("input")[0];
//document.querySelector("input");
//document.querySelector("input:nth-child(1)");
//document.querySelector("input:first-of-type");
const risultato = document.querySelector("div");
document
    .querySelector("input[value='Testo uppercase']")
    .addEventListener("click", function(){
        let testo = risultato.innerHTML;
        testo = testo.toUpperCase();
        risultato.innerHTML = testo;
    });

document
    .querySelector("input[value='Testo lowercase']")
    .addEventListener("click", function(){
        let testo = risultato.innerHTML;
        testo = testo.toLowerCase();
        risultato.innerHTML = testo;
    });

document
    .querySelector("input:last-of-type")
    .addEventListener("click", function(){
        let testo = risultato.innerText;
        testo = testo.substring(5,testo.length) + testo.substring(0,5);
        risultato.innerText = testo;
    })