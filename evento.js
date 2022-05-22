let data_atual = new Date (2022,05,21);
let data_evento = new Date (2022,06,11);

if (data_atual<data_evento){
    console.log("Ainda é possível se inscrever para o evento");
}else{
    console.log("Data do evento ja passou, não é possível que inscrever para o evento");
}

let idade = 18

if(idade>=18){
    console.log("Idade permitida para o evento");
}else{
    console.log("Idade inferior a 18 anos, não é permitida a entrada no evento");
}

let numero_participantes = 99

if (numero_participantes<100){
    console.log("Ainda há espaço no evento");
}else{
    console.log("Não há mais vaga para o evento")
}
