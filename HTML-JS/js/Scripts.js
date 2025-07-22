alert("Ola mundo!"); // Alerta

var nome = "Gabriel";
var sobrenome = "Oliveira Miranda";
var nomeCompleto = nome + " " + sobrenome;

// let ---> não pode ser redeclarada
// const ---> nunca pode mudar  
// var ---> pode ser redeclarada

const carro = {marca:"ford",
               modelo:"ka", 
               ano: 2015, 
               peso:"900 kg", 
               buzina: function() {
               alert('Biiiiiiii')  
               },
               completo: function() {
                   return "A marca é " + this.marca + ", o modelo é " + this.modelo + ", o ano é " + this.ano + " e o peso é " + this.peso;
               } // para usar um item do proprio objeto o correto é usar "this"
              }; // isso é um objeto, parecido com uma struct em C

document.getElementById("text").innerHTML = carro.peso;
console.log(carro); 
console.log(carro.completo());
carro.buzina(); 

// let a, b, c, d, id = 18, eleitor;
a = 5;
b = 4;
// c = a + b; // Sempre leve em conta a ordem que você coloca
// console.log(c);
// console.log(++b); // Incremento
// console.log(--b); // Decremento
// alert('O valor ficou: '+ b); // só funciona se colocar o '+', basicamente é uma ','. não faz mais nada de especial

// d = (a === b); // Compara a e b, independente do tipo, '==' só compara valor, dependendo do tipo
// alert(d);

document.getElementById("text1").innerHTML = soma(a, b);

// eleitor = (id >= 18) ? "Sim, eleitor":"Não eleitor"; // primeiro confere se é verdadeiro, o segundo compara se é falso
// alert('A resposta é: '+ eleitor);

function soma(x, y){
    return x + y;
}

function Alerta() {
    alert("Hello!!");
}