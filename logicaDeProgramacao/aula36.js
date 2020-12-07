// For in -> Lê os indices ou chaves do objeto


const pessoa = {
    nome: 'Lawan',
    sobrenome: 'Maciel',
    idade: 21
};

for(let i in pessoa){
    console.log(i,':', pessoa[i])
}

// const frutas = ['Pera', 'Maça', 'Uva'];

// for( let i in frutas){
//     console.log(i)
// }