let listaAmigos = [];

function adicionarAmigo() {
    let amigoInput = document.querySelector('#amigo');
    let amigo = amigoInput.value.trim();

    if (!amigo) {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    listaAmigos.push(amigo);
    exhibirAmigos();
    document.getElementById('sortearAmigo').disabled = false;
    limparCampo();
}

function exhibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 nombres para el sorteo.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exhibeSorteado('#resultado', `El amigo sorteado es: ${amigoSorteado}`);

    document.getElementById('nuevoSorteo').disabled = false;
    document.getElementById('button-add').disabled = true;
    document.getElementById('amigo').disabled = true;
}

function exhibeSorteado(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}

function nuevoSorteo() {
    document.getElementById('listaAmigos').innerHTML = "";
    listaAmigos = [];
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.getElementById('nuevoSorteo').setAttribute('disabled', true);
    document.getElementById('sortearAmigo').disabled = true;
}



