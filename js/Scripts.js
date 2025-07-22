document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();

    const select = document.getElementById("campoVariavel");
    const iframe = document.getElementById("iframeDestino");
    const valorSelecionado = select.value;

    if (valorSelecionado) {
        iframe.src = valorSelecionado;
    } else {
        alert("Por favor, selecione uma opção.");
    }
    });