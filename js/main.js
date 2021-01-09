
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://globallabs.academy/");// abrir página e outra janela 
 //   window.location.href = "ttp://globallabs.academy/";// abrir página na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passsar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passsar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
var validar = 0;
function validaIdade(idade){
    //var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)// vai tirar Japão da frase e adicionar Brasil
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*---------------------------------------------------------------------------------*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");// prompt() = recebe um dado do usuário através do alert
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]// sintaxe para criar um array de dicionário
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maçã", cor: "vermelha"}// sintaxe para criar uma dicionário
console.log(fruta.nome);// acessa os elementos através do "ponto(.)"
alert(fruta.cor);
*/


/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");// push() = adiciona mais um elemento no array
lista.pop();// pop() = remover o ultimo elemento do array
console.log(lista);
console.log(lista.length);// length = mostra o tamanho da minha lista
console.log(lista.reverse());// reverse() = mostra a lista de traz para frente
console.log(lista.toString());// toString() = converte o array para string
console.log(lista.join(" - "));// join() = converte para string e adiciona/remove espacamentos
*/ 


/*
var nome = "Danilo Aparecido"
var idade = 32
var iadade2 = 10
var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);

console.log(nome); // executa o script do lado cliente
console.log(idade + iadade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());// toUpperCase() = Deixa todas as letras en caixa alta
//console.log(frase.toLowerCase());// toLowerCase() = Deixa todas as letras em caixa baixa

alert(frase.replace("Japão", "Brasil")); // replace() = Vai trocar o "Japão" por "Brasil" na frase
*/
