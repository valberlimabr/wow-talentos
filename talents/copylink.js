
function copiarTexto() {
    // Seleciona o elemento com o ID "dk"
    var divElement = document.getElementById("dk");

    // Cria um elemento de texto temporário para armazenar o texto da div
    var textoTemporario = document.createElement("textarea");
    textoTemporario.value = divElement.textContent;

    // Adiciona o elemento de texto temporário ao corpo do documento
    document.body.appendChild(textoTemporario);

    // Seleciona o texto no elemento de texto temporário
    textoTemporario.select();

    // Copia o texto selecionado para a área de transferência
    document.execCommand("copy");

    // Remove o elemento de texto temporário
    document.body.removeChild(textoTemporario);

    // Notifica o usuário que o texto foi copiado
    alert("O Link foi copiado com sucesso!");
}