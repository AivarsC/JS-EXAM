/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];


// Sprendimas //
// 1. Grąžina į konsolę naudotojų, kurie turi šunį, vardus ir masyvą su šunų savininkais

function filterDogOwers(users) {
  console.log('Turi augintinį:');
  const dogOwners = users.filter((user) => user.hasDog);
  dogOwners_map = dogOwners.map((user) => user.name);
  for (let i = 0; i <= dogOwners_map.length - 1; i++) {
    console.log(dogOwners_map[i]); 
  }
  console.log(dogOwners_map);
  return dogOwners_map;
};

filterDogOwers(users);

// 2. Grąžina į konsolę naudotojų vardų masyvą, kurie yra pilnamečiai. Kadangi iki galo nesupratau, ką konkrečiai reikia grąžinti, tai grąžinu ir išfiltruotą pilną pirminį masyvą su pinlnamečių naudotojų vardais.

function filterAdults(users) {
  console.log('Yra pilnamečiai:');
  const adults = users.filter((user) => user.age >= 18);
  name_adults = adults.map((user) => user.name);
  console.log(name_adults);
  console.log(adults);
  return name_adults;
};

filterAdults(users);