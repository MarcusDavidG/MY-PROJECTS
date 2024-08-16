document.getElementById("convert-button").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  // Basic exchange rates (for demonstration purposes)
  const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.76, JPY: 110.57 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.9, JPY: 130.21 },
    GBP: { USD: 1.32, EUR: 1.11, GBP: 1, JPY: 145.63 },
    JPY: { USD: 0.009, EUR: 0.0077, GBP: 0.0069, JPY: 1 },
  };

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  document.getElementById(
    "result"
  ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
