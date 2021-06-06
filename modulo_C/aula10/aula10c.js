function somar() {
  let tn1 = document.getElementById('txtn1');
  let tn2 = document.querySelector('input#txtn2')
  let res = document.querySelector('div#res')

  console.log(tn2);

  let n1 = Number(tn1.value);
  let n2 = Number(tn2.value);

  console.log(n2);

  let s = n1 + n2;

  //res.innerHTML = s;
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}