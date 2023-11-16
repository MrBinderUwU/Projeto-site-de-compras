document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = document.getElementById('paymentForm');
    if (!form.checkValidity()) {
        alert('Por favor, preencha todos os campos antes de finalizar a compra.');
    } else {
        window.location.href = "thx.html";
    }
});

