//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Variáveis globais
let lista_amigos = [];

// Funções
function adicionarAmigo() {
    // Capture o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;

    // console.log('Amigo:', amigo);

    if (lista_amigos.includes(amigo)) {
        return escrever_texto('listaAmigos', `${amigo} já está na lista!`);
    }
    lista_amigos.push(amigo);
    escrever_texto('listaAmigos', `${amigo} adicionado à lista.`);
}

function escrever_texto(atributo, mensagem) {
    let ul = document.getElementById(atributo);
    let li = document.createElement('li');
    li.textContent = mensagem;
    ul.appendChild(li);
}

function sortearAmigo() {
    // Verificar se há amigos na lista
    if (lista_amigos.length < 1) {
        escrever_texto('resultado', 'Nenhum amigo na lista para sortear.');
        return;
    }

    let sorteado = Math.floor(Math.random() * lista_amigos.length);
    
    let amigoSorteado = lista_amigos[sorteado];
    
    escrever_texto('resultado', `Amigo sorteado: ${amigoSorteado}`);
}

