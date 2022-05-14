/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Sprendimas //

const get = document.getElementById("get");

const For_output = document.getElementById("output");

get.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = document.getElementById("search").value;
    
    Svarai = input * 2.2046;
    Gramai = input / 0.0010000;
    Uncijos = input * 35.274;

    For_output.textContent = ` ${Svarai} svarai,  ${Gramai} gramai, ${Uncijos} uncijos`;
    For_output.style.border = "solid";
    For_output.style.color = 'black';
    For_output.style.margin = "1rem 5rem";
    For_output.style.textAlign = "Center";

    console.log(Svarai);
    console.log(Gramai);
    console.log(Uncijos);

});