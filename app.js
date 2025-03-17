// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validação: Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Obtém a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');

    // Verifica se o nome já existe na lista
    const itensLista = listaAmigos.getElementsByTagName('li');
    for (let item of itensLista) {
        // Extrai o nome do item da lista (ignorando o botão "Remover")
        const nomeExistente = item.textContent.split('Remover')[0].trim();
        if (nomeExistente === nomeAmigo) {
            alert('Este nome já foi adicionado. Insira um nome diferente.');
            return; // Interrompe a função se o nome já existir
        }
    }

    // Cria um novo item da lista (<li>)
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;

    // Cria um botão "Remover" para o item da lista
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('button-remove');
    botaoRemover.onclick = function () {
        listaAmigos.removeChild(novoItem); // Remove o item da lista
    };

    // Adiciona o botão "Remover" ao item da lista
    novoItem.appendChild(botaoRemover);

    // Adiciona o item à lista de amigos
    listaAmigos.appendChild(novoItem);

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;
    const resultado = document.getElementById('resultado');

    // Verifica se há nomes na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Adiciona uma animação de "sorteio" (feedback visual)
    resultado.innerHTML = `<li class="sorteio-animacao">Sorteando...</li>`;
    setTimeout(() => {
        // Sorteia um nome aleatório após 2 segundos (simulando um sorteio)
        const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[indiceSorteado].textContent;

        // Extrai apenas o nome do amigo, ignorando o texto do botão "Remover"
        const nomeAmigo = amigoSorteado.split('Remover')[0].trim();

        // Exibe o resultado do sorteio com animação
        resultado.innerHTML = `<li class="resultado-animacao">O amigo secreto é: <strong>${nomeAmigo}</strong></li>`;
    }, 2000); // 2 segundos de animação
}