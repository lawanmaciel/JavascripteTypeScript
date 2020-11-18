const nome = "Lawan";
const sobrenome = "Maciel"
const idade = 21;
const peso = 70;
const alturaEmM = 1.80;
let anoNascimento;
let imc;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;
console.log(`
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg
    tem ${alturaEmM} de altura e seu IMC é de ${imc}
`);
