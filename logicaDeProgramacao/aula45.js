function retornaHore(data){
    if(!(data instanceof Date)){
        console.log('Não é');
    }
}

retornaHore(new Date())


// try{
//     // É executado quando não há erros
// }catch{
//     // é executado quando há erros
// } finally{
//     //Sempre
// }