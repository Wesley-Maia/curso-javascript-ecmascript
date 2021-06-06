let a = document.getElementById('area');

function clicar() {
  a.innerText = 'Clicou';
  a.style.backgroundColor = 'red';

}

function entrar() {
  a.innerText = 'Entrou';
}

function sair() {
  a.innerText = 'Saiu';
  a.style.backgroundColor = 'green';
}