function somar() {
    let tn1 = document.getElementById('som1');
    let tn2 = document.getElementById('som2');
    
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
   
    let soma = n1 + n2;
  
    let cola = document.getElementById('resultado1');
    cola.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}

function subtrair() {
    let tn1 = document.getElementById('sub1');
    let tn2 = document.getElementById('sub2');
    
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
   
    let subt = n1 - n2;
  
    let cola = document.getElementById('resultado2');
    cola.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${subt}`
}

function multiplicar() {
    let tn1 = document.getElementById('mult1');
    let tn2 = document.getElementById('mult2');
    
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
   
    let multi = n1 * n2;
  
    let cola = document.getElementById('resultado3');
    cola.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${multi}`
}

function dividir() {
    let tn1 = document.getElementById('div1');
    let tn2 = document.getElementById('div2');
    
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
   
    let divisao = n1 / n2;
  
    let cola = document.getElementById('resultado4');
    cola.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${divisao}`
}

function resto() {
    let tn1 = document.getElementById('res1');
    let tn2 = document.getElementById('res2');
    
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
   
    let rest = n1 % n2;
  
    let cola = document.getElementById('resultado5');
    cola.innerHTML = `O resto da divisão entre ${n1} e ${n2} é igual a ${rest}`
}
