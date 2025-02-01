let a = "ola";
let b = "mundo";

console.log(a + " " + b); // ola mundo
//essa é a forma antiga de concatenar strings

console.log(`${a} ${b}`); // ola mundo
//essa é a forma mais moderna de concatenar strings


a = 1;
b = 2;

console.log(`o resultado é ${a + b}`); // 3s

function soma(a, b) {
    return a + b;
}

console.log(`o resultado é ${soma(1, 2)}`); // 3