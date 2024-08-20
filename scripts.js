import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);

// botão WhatsApp
document.getElementById('whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();

    var itens = document.querySelectorAll('#lista-de-compras li');
    var listaTexto = 'Lista de Compras:\n';
    itens.forEach(function(item) {
        var itemTexto = item.querySelector('#item-titulo').textContent;
        listaTexto += '- ' + itemTexto + '\n'; 
    });
    var textoCodificado = encodeURIComponent(listaTexto);
    var url = `https://wa.me/?text=${textoCodificado}`;
    window.open(url, '_blank');
});