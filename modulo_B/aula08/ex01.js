function relacao() {
  let tn1 = document.getElementById('num1');
  let tn2 = document.getElementById('num2');
  let cola = document.getElementById('resultado1');

  let n1 = Number(tn1.value);
  let n2 = Number(tn2.value);

  if (n1 === n2) {
    cola.innerHTML = `Os números ${n1} e ${n2} são iguais`;
  } else if (n1 > n2) {
    cola.innerHTML = `O número ${n1} é maior que o número ${n2}`;
  } else if (n2 > n1) {
    cola.innerHTML = `O número ${n2} é maior que o número ${n1}`;
  } else {
    cola.innerHTML = `Operação inválida`;
  }
}
