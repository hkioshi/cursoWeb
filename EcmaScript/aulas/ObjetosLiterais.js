//objetos literais sao objetos que sao criados sem a necessidade de uma funcao construtora
//no c# seria um objeto anonimo

//exemplo de objeto literal
let pessoa = {
    nome: 'Fulano',//propriedade
    idade: 25,
    falar: function() {//funcao anonima
        console.log('Falando...');
    },
    aniversario: function() {//funcao anonima com propriedade
        this.idade++;
    },
    
};
console.log("--------------------");

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);


//literal x classe
//o literal é mais simples e direto, mas não é reutilizável
//literal -> json -> HTTP -> Servidor -> Armazenamento


//
// Melhorias do ES6
//

// let resumo = 
// {
//     nome, // nome = nome variavel / valor = valor variavel
//     idadeTeste :idade,
//     falar() {
//         console.log('Falando...');
//     },
//     aniversario() {
//         this.idade++;
//     },
    
// }


//
// modificando valores
//
console.log("--------------------");

let pessoa2 = {
    name: 'Fulano',
    idade: 25,
};

console.log(pessoa2.idade);
pessoa2.idade++;
console.log(pessoa2.idade);

// criação dinamica de pares chave/valor
pessoa2.sexo = 'M';
pessoa2.dizerOI = () => console.log('Oi');
console.log(pessoa2);

//objetos unicas
let pessoa3 = pessoa2;
//pessoa 3 e pessoa 2 sao o mesmo objeto
console.log("--------------------");
console.log(pessoa2.idade);
pessoa3.idade++;
console.log(pessoa2.idade);
console.log("--------------------");