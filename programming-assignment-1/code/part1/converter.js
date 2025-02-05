// converter.js
document.addEventListener('DOMContentLoaded', () => {
    const fromSelect = document.getElementById('converting-from');
    const toSelect = document.getElementById('converting-to');
    const fromAmount = document.getElementById('from-amount');
    const toAmount = document.getElementById('to-amount');

    const rates = {
        usd: { usd: 1, eur: 0.93, gbp: 0.79 },
        eur: { usd: 1.07, eur: 1, gbp: 0.85 },
        gbp: { usd: 1.27, eur: 1.17, gbp: 1 }
    };

    function calculateConversion() {
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;
        const amount = parseFloat(fromAmount.value) || 0;

        const rate = rates[fromCurrency][toCurrency];
        const result = amount * rate;

        toAmount.textContent = result.toFixed(2);
    }

    fromAmount.addEventListener('input', calculateConversion);
    fromSelect.addEventListener('change', calculateConversion);
    toSelect.addEventListener('change', calculateConversion);

    calculateConversion();
});