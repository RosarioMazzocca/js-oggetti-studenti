let studenti = [
    {
    nome: 'Pippo',
    cognome: 'Baudo',
    eta: '85',
    },
    {
    nome: 'Nino',
    cognome: 'Frassica',
    eta: '71', 
    },
    {
    nome: 'Carlo',
    cognome: 'Conti',
    eta: '60', 
    },
    {
    nome: 'Frank',
    cognome: 'Matano',
    eta: '32', 
    },
    {
    nome: 'PierUbaldo',
    cognome: 'Esposito',
    eta: '19', 
    },
    ];

for(let i=0; i< studenti.length; i++) {
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
    console.log(studenti[i].eta);
}

let nomeUtente = prompt("Inserire il nome del nuovo studente: ");
let cognomeUtente = prompt("Inserire il cognome del nuovo studente: ");
let etaUtente = prompt("Inserire l'età del nuovo studente: ");

studenti.push({
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente,
});

for(let i=0; i< studenti.length; i++) {
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
    console.log(studenti[i].eta);
}