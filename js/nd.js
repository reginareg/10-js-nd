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
const kintamujuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + autobusai[0] + autobusai[1] + autobusai[2] + autobusai[3] + autobusai[4] + aukstai[0] + aukstai[1] + aukstai[2]  + aukstai[3] + aukstai [4];
console.log(kintamujuSuma);

/*
2.2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console
*/
const kintamieji = studentai[0] + " " + studentai[1] + " " +studentai[2] + " " +studentai[3] + " " +studentai[4] + " " + menesiai[0]  + " " + menesiai[1]  + " " + menesiai[2]  + " " + menesiai[3]  + " " + menesiai[4]  + " " +  pauksciai[0] + " " + pauksciai[1] + " " + pauksciai[2] + " " + pauksciai[4] + " " + pauksciai[4];
console.log(kintamieji);

/*
2.3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
a.	1-2+3-4+5
b.	Rezultatą išvesti į console 
*/
const balai = [2, 4, 6, 8, 1];
console.log('Balai', balai);
let baluSuma = balai[0] - balai[1] + balai[2] - balai[3] + balai[4];
console.log(baluSuma);

/*
2.4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas.
*/




/*
3.1. Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/

const a = 1;
const b = 2;
console.log("--------------------");
if (a > b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a < b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
console.log("--------------------");
if (a === b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a !== b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
console.log("--------------------");
if (a >= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a <= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}

/*
3.2. Išvesti teksto tipo kintamųjų ilgius
*/
const spalvos = ["balta", "zalia"];
console.log(spalvos);

const  kiek = spalvos[0].length;
console.log(
  "Spalvos " + spalvos[0] + " teksto ilgis yra " + kiek + " simboliai"
);
const yra = spalvos[1].length;
console.log(
  "Spalvos " + spalvos[1] + " teksto ilgis yra " + yra + " simboliai"
);

/*
3.3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/
if ("Vilkas" > "Zuikis") {
    console.log("Vilkas yra didesnis");
  } else {
    console.log("Zuikis yra didesnis");
  }
  if ("Vilkas" < "Zuikis") {
    console.log("Vilkas yra mazesnis");
  } else {
    console.log("Zuikis yra mazesnis");
  }
  if ("Vilkas" === "Zuikis") {
    console.log("Vilkas ir zirnis yra lygus");
  } else if ("Vilkas" !== "Zuikis") {
    console.log("Zuikis ir Vilkas nera lygus");
  }
  if ("Vilkas" >= "Zuikis") {
    console.log("Vilkas mazesnis. Vilkas ir Zuikis nera lygus");
  } else if ("Vilkas" <= "Zuikis") {
    console.log("Zuikis didesnis. Vilkas ir zirnis nera lygus");
  }

  /*
  3.4. Išvesti sąrašo tipo kintamųjų ilgius
  */
  const tekstas = 'Myliu Lietuva';
  const tekstukas = 'Patinka pavasaris';
  console.log(`${tekstas} ${tekstas.length}`);
  console.log(`${tekstukas} ${tekstukas.length}`);

  /*
  3.5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
   a.	kuris didesnis
   b.	kuris mažesnis
   c.	ar jie lygūs
   d.	ar jie nelygūs
   e.	kuris didesnis arba lygus
   f.	kuris mažesnis arba lygus
  */
   if (tekstas > tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
if (tekstas < tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
if (tekstas === tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
if (tekstas !== tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
if (tekstas >= tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
if (tekstas <= tekstukas) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą.')
}
