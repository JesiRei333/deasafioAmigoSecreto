let amigos = [];

// helpers 
function normalizaNombre(s) {
  return (s || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('es-MX');
}

function limpiarResultado() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}

// UI
function renderLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    const icon = document.createElement('span');
    icon.textContent = '♥ ';
    icon.style.color = '#4d7affff'; 

    const texto = document.createTextNode(amigos[i]);

    li.appendChild(icon);
    li.appendChild(texto);
    lista.appendChild(li);
  }
}

// acciones
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, inserta un nombre. No puede estar vacío. ♥');
    return;
  }

  //duplicados
  const n = normalizaNombre(nombre);
  const yaExiste = amigos.some(a => normalizaNombre(a) === n);
  if (yaExiste) {
    alert('Ese nombre ya está en la lista. 😉');
    input.select();
    return;
  }

  amigos.push(nombre);
  input.value = '';
  input.focus();

  renderLista();
  limpiarResultado();
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

// Enter
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      agregarAmigo();
    }
  });
});
