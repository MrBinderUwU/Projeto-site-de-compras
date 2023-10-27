function mostrarMensagem() {
    const opcaoSelecionada = document.getElementById("game").value;
    let mensagem;
    switch (opcaoSelecionada) {
        case "Nintendo Switch":
            mensagem = "R$189,99";
            break;
        case "PC (MegaMix+ Version)":
            mensagem = "R$250,00";
            break;
            
       default:
           mensagem = "Selecione uma versão";
    }
    document.getElementById("mensagem").textContent = mensagem;
}