function funcaoChange(elemento){
    console.log(elemento.value)
}

function load(){
    alert("pagina carregada");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function redirecionar(){
    window.open("https://wealthsystems.com.br/")
    //window.location.href = "https://wealthsystems.com.br/"
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

/*function validaIdade(idade){
    var validar
    if(idade >= 18){
        return true
    }else{
        return false
    }
}
var idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))*/

/*function soma(n1, n2){
    return n1 + n2
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*var d = new Date()
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
}*/

/*var count = 0
while(count < 5){
    console.log(count)
    alert(count);
    count++
}*/

/*var idade = prompt("Qual sua idade: ")
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

/*var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas)
alert("A fruta da posicao 1 eh: " + frutas[1].nome);*/

/*var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta.nome)
alert(fruta.cor);*/

/*var lista = ["maça", "pera", "laranja"]
lista.push("uva")
lista.pop()

console.log(lista)
console.log(lista.toString())
console.log(lista.join(" - "))*/

/*var nome = "Maicon"
var n1 = 5
var n2 = 3
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome)
console.log(n1 + n2)
console.log(frase.toLowerCase())
alert(frase.replace("japão", "Brasil"));*/