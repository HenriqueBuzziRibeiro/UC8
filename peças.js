
let peso_peca = 75;

//pesoPeca = Camel Case
//peso_peca = Snake Case
//PesoPeca = Pascal Case

if(peso_peca>100){
    console.log("Peso maior que 100g, é possível cadastrar a peça");
}else{
    console.log("Peso menor que 100g, não é possível cadastrar a peça");
}

let numero_peca = 10;

if (numero_peca<10){
    console.log("Há espaço na caixa, é possível realizar o cadastro");
}else{
    console.log("Caixa com capacidade máxima, não é possível realizar o cadastro");
}

let nome_peca = 'Disco de Freio';

console.log ("o comprimento é: ",nome_peca.length);

if(nome_peca.length<3){
    console.log("Número caracteres menor que 3, não é possível cadastrar");
}else{
    console.log("Número caracteres maior que 3, ó possível cadastrar");
}