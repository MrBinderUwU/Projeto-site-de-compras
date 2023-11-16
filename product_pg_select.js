function mostrarPreco() {
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

function mostrarPreco2() {
    const opcaoSelecionada = document.getElementById("game2").value;
    let mensagem;
    switch (opcaoSelecionada) {
        case "Versão Base":
            mensagem = "R$73,99";
            break;
        case "Versão Completa":
            mensagem = "R$170,00";
            break;
            
       default:
           mensagem = "Selecione uma versão";
    }
    document.getElementById("mensagem").textContent = mensagem;
}

function mostrarPreco3() {
    const opcaoSelecionada = document.getElementById("game3").value;
    let mensagem;
    switch (opcaoSelecionada) {
        case "Nintendo Switch":
            mensagem = "R$140,00";
            break;
        case "Steam":
            mensagem = "R$160,00";
            break;
            
       default:
           mensagem = "Selecione uma versão";
    }
    document.getElementById("mensagem").textContent = mensagem;
}