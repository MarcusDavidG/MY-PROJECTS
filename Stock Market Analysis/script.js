document.getElementById("getStockInfo").addEventListener("click", function () {
  const stockSymbol = document
    .getElementById("stockSymbol")
    .value.toUpperCase();
  if (!stockSymbol) {
    alert("Please enter a stock symbol");
    return;
  }

  fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo`
  )
    .then((response) => response.json())
    .then((data) => {
      const stockInfo = data["Global Quote"];
      if (!stockInfo) {
        document.getElementById(
          "stockData"
        ).innerHTML = `<p>No data found for symbol: ${stockSymbol}</p>`;
        return;
      }

      const stockDataHTML = `
                <h2>${stockSymbol}</h2>
                <p>Price: $${stockInfo["05. price"]}</p>
                <p>Change: ${stockInfo["09. change"]}</p>
                <p>Change Percent: ${stockInfo["10. change percent"]}</p>
            `;
      document.getElementById("stockData").innerHTML = stockDataHTML;
    })
    .catch((error) => {
      console.error("Error fetching stock data:", error);
      document.getElementById(
        "stockData"
      ).innerHTML = `<p>Error fetching stock data. Please try again later.</p>`;
    });
});
