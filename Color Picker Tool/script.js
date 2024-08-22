document.getElementById("color-picker").addEventListener("input", function () {
  const selectedColor = this.value;
  document.getElementById("color-display").style.backgroundColor =
    selectedColor;
  document.getElementById("color-code").textContent = selectedColor;
});
