/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

// Sprendimas //

class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.director = director;
		this.budget = budget;
		this.wasExpensive();
	}
	wasExpensive() {
		const expensive = this.budget > 100000000;
		return expensive;
	}
}

const thisMovie = new Movie('Pirates of the Caribbean: On Stranger Tides', 'Rob Marshall', 422000000);

console.log(thisMovie);
console.log(`Was the movie expensive? `);
console.log(thisMovie.wasExpensive());