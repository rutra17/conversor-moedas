// Redireciona com base no seletor de bancos
function redirectToBank() {
    const bankSelector = document.getElementById("bankSelector");
    const selectedBank = bankSelector.value;
    if (selectedBank) {
        window.location.href = selectedBank;
    }
}

// Atualiza o valor exibido com base na cotação
function calculateTotal() {
    const dollarValue = parseFloat(document.getElementById("dollarInput").value || 0);
    const currencySelector = document.getElementById("currencySelector");
    const selectedCurrency = currencySelector ? currencySelector.value : "USD";

    // Mock de cotações
    const rates = {
        USD: 5.18,
        EUR: 5.94,
        GBP: 6.78,
        CAD: 4.21,
        AUD: 3.88,
        JPY: 0.046,
        CHF: 5.43,
    };

    const rate = rates[selectedCurrency] || 0;
    const total = dollarValue > 0 ? `R$ ${(dollarValue * rate).toFixed(2)}` : "R$";
    document.getElementById("valueDisplay").innerText = total;
}

// Permite cálculo com Enter
function handleKeyPress(event) {
    if (event.key === "Enter") {
        calculateTotal();
    }
}
