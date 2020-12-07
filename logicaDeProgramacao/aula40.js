// Continue continua para próxima iteração;
// Break sai do laço

const numeros = [1,2,3,4,5];

for (let numero of numeros){
    if(numero === 2){
        continue;
    }
    console.log(numero)

    if(numero === 3){
        break;
    }
}