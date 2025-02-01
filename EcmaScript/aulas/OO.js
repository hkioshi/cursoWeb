//4 pilares
// Abstração
// Encapsulamento
// Herança
// Polimorfismo

// Abstração
// É a capacidade de definir um objeto apenas com as características necessárias para o sistema.
class Carro {
    constructor() {
        this.cor = 'Vermelho';
        
    }
    qualCor() {
        console.log(this.cor);
    }
}

let carro = new Carro();

// Encapsulamento
// É a capacidade de proteger o objeto de modificações externas.

class classe {
    constructor() {
        this._variavelRestrita = 0; // _ é uma convenção para dizer que o atributo é privado
    }
    
    get variavelRestrita() { // o get é um método que retorna o valor da variável
        return this._variavelRestrita;
    }

    set variavelRestrita(valor) { // o set é um método que altera o valor da variável
        if (valor < 0) { // exemplo de validação
            console.log('Valor inválido');
            return;
        }
        this._variavelRestrita = valor;
    }
}

// Herança
// É a capacidade de criar uma classe a partir de outra classe já existente.

class animal
{
    constructor(nome,cor,peso) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
    }

    falar() {
        console.log('Falando...');
    }
}

class cachorro extends animal
{
    constructor(nomeParametro) {
        super(nomeParametro, 'Preto', 10);
        this.cauda = true;
        //super é a capacidade de acessar métodos da classe pai.
    }
    falar() {
        console.log('Au au');
    }

    latir() {
        console.log('Latindo...');
    }
}

let cachorroq = new cachorro('Rex');
console.log(cachorroq.cor);

//polimorfismo
// É a capacidade de um objeto poder ser referenciado de várias formas.

class animal2
{
    falar() {
        console.log('Falando...');
    }
}

class cachorro2 extends animal2
{
    falar() {
        console.log('BAu Bau');
    }
}