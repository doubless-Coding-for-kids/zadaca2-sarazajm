//Zadatak 2
let pozdravi = ["Zdravo","Pozdrav","Dobar dan","Dobro jutro","Dobra vece","Postovanje","Dovidenja","Ciao","Selam alejkum","Hi"];

function ispisi(niz){
    for (let i =0; i<8; i++){console.log(niz[i])};
};

ispisi(pozdravi);

//Zadatak 3
let number = 8;

if(number > 0){
    console.log("Broj "+number+" je veci od 0");
}else {
    console.log("Broj "+number+" je jednak ili manji 0");
}

//Zadatak 4
const temp = [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 6];
if (temp[0]>10){

    console.log(temp[0]);
}else {

    console.log(temp[19]*10); //niz ima 20 elemenata, prvi element ima vrijednost nule
}