/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// Sprendimas //

function Calculator (a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
       sum=`${this.a} + ${this.b} = ${this.a + this.b}`;
       console.log(sum);
       return sum;
    };
    this.substraction = function () {
        substraction = `${this.a} - ${this.b} = ${this.a - this.b}`;
        console.log(substraction);
        return substraction;
    };
    this.multiplication = function () {
        multiplication = `${this.a} x ${this.b} = ${this.a * this.b}`;
        console.log(multiplication);
        return multiplication;
    };
    this.division = function () {
        if(this.b != 0){
            division = `${this.a} / ${this.b} = ${this.a / this.b}`;
            console.log(division);
            return division;
        }
        else{
            return console.log("Dalyba iš nulio negalima");
        }     
    };
};

var numbers = new Calculator(10, 3.3);

numbers.sum();
numbers.substraction();
numbers.multiplication();
numbers.division();