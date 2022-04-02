/*
1.1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
*/
const skaicius = 1;
console.log(skaicius);

let skaiciukas = 2;
console.log(skaiciukas);
skaiciukas = 3;
console.log(skaiciukas);
skaiciukas = 4;
console.log(skaiciukas);

var numberis = 5;
console.log(numberis);

/*
1.2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
*/
const vardas = 'Urte';
console.log(vardas);

let pavarde = 'Urtene';
console.log(pavarde);

pavarde = 'Pasikeite'
console.log(pavarde);

pavarde = 'Pasikeite pavarde'
console.log(pavarde);

var amzius = 'penkiolika'
console.log(amzius);
 
/*
1.3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
*/
const pazymiai = [1, 2, 3, 9, 10];
console.log('Pazymiai', pazymiai);

const autobusai = [45, 2, 73, 19, 16];
console.log('Autobusai', autobusai);

const aukstai = [1, 2, 3, 5, 6];
console.log('Aukstai', aukstai);

/*
1.4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
*/
const studentai = ['Andrius', 'Paulius', 'Zita', 'Rita', 'Jurga'];
console.log('Studentai:', studentai);

const menesiai = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze'];
console.log('Menesiai:', menesiai);

const pauksciai = ['balandis', 'kregzde', 'genys', 'kikilis', 'gandras']; 
console.log('Pauksciai:', pauksciai);

/*
2.1. Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console
*/
const kintamujuSuma = pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5] + autobusai[1] + autobusai[2] + autobusai[3] + autobusai[4] + autobusai[5] + aukstai[1] + aukstai[2] + aukstai[3]  + aukstai[4] + aukstai [5];
console.log(kintamujuSuma);

/*
2.2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console
*/
const kintamieji = studentai[1] + " " + studentai[2] + " " +studentai[3] + " " +studentai[4] + " " +studentai[5] + " " + menesiai[1]  + " " + menesiai[2]  + " " + menesiai[3]  + " " + menesiai[4]  + " " + menesiai[5]  + " " +  pauksciai[1] + " " + pauksciai[2] + " " + pauksciai[3] + " " + pauksciai[4] + " " + pauksciai[5];
console.log(kintamieji);