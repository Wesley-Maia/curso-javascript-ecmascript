//window.document.write('Olá, mundo!');
//window.document.write(document.charset);
//window.document.write(document.URL);

//Acesso por Marca
let p1 = document.getElementsByTagName('p');
console.log(p1);
document.write(p1[0].innerText);
p1[0].style.color = 'yellow';

//Acesso por ID
let msgID = document.getElementById('msg');
console.log(msgID);
msgID.style.background = 'black'
msgID.innerText = 'Olá'

//Acesso por Name
let nameD = document.getElementsByName('msgName')
console.log(nameD);
nameD[0].innerText = 'Vai que cola';

//Acesso por seletor
let nameQ = document.querySelector('div#msgNameQ');
console.log(nameQ);
nameQ.style.color = 'pink';
