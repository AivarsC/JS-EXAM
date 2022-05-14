/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(respone => {
        if (respone.ok) {
            return respone.json();
        }
        else {
            document.getElementById("output").textContent = "Klaida! duomenys neprieinami";
        }
    })
    .then(getCarsData => {
        let output = "";
        getCarsData.forEach((item, index) => {
            const brand = document.createElement("h4");
            const models = document.createElement("div");
            const carCard = document.createElement("div");
            brand.innerText = (`${item.brand}`);
            models.innerText = (`${item.models}`);
            carCard.append(brand, models);
            document.getElementById("output").append(carCard);
        })
    })
    .catch(err => document.getElementById("message").textContent = err);
