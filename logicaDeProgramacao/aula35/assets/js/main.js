const elementor = [
    {tag: 'p', texto: 'Frase 1.'},
    {tag: 'p', texto: 'Frase 2.'},
    {tag: 'p', texto: 'Frase 3.'},
    {tag: 'p', texto: 'Frase 4.'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementor.length; i++){
    let {tag, texto} = elementor[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}   

container.appendChild(div);

