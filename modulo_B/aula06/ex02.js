var n1 = window.prompt('Digite um número: ');
var n2 = window.prompt('Digite outro número: ');
// (number + number) - adição
// (string + string) - concatenação
n1 = Number.parseInt(n1);
n2 = Number.parseInt(n2);
var soma = n1 + n2;

//window.alert('A soma dos valores é ' + soma);
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`);

let cola = document.getElementById('res');
cola.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`

let money = document.getElementById('real');
let converte = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
money.innerHTML = `O valor em Reais é ${converte}`