let as = (params) => {return (params * params);}
let as2 = params => (params + params);//retorno implicito
console.log(as(2)); // 4
console.log(as2(2)); // 4

let parImpar = n => {a % 2 == 0 ? 'par' : 'impar';}
console.log(parImpar(2)); // par