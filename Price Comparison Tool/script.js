document.getElementById("compare-button").addEventListener("click", () => {
  const productName = document.getElementById("product-name").value;
  const store1Price = parseFloat(document.getElementById("store1-price").value);
  const store2Price = parseFloat(document.getElementById("store2-price").value);
  const store3Price = parseFloat(document.getElementById("store3-price").value);

  let lowestPrice = Math.min(store1Price, store2Price, store3Price);
  let message = `The lowest price for ${productName} is $${lowestPrice.toFixed(
    2
  )}.`;

  document.getElementById("result").innerText = message;
});
