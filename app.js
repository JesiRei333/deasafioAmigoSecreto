
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre. No puede estar vacío. ♥');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  input.focus();

  renderLista();
  limpiarResultado();
}

function renderLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    
    li.textContent = `♥ ${amigos[i]}`; 
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Primero agrega al menos un nombre. ♥');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  const li = document.createElement('li');
  li.classList.add('resultado-amigo');
  li.textContent = `🎉 ¡${elegido} es tu amigo secreto!`;
  resultado.appendChild(li);
}

function limpiarResultado() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      agregarAmigo();
    }
  });
});
