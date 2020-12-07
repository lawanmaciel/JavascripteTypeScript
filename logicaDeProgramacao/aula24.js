/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que tenha um else é preciso ter um if antes
// Não a limites de else ifs na checagem
// Só pode haver um else na checagem
// Se pode usar if e else sem um else if

const hora = 10;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde')
} else if(hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Olá')
}