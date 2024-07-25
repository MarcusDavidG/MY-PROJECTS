document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const urlInput = document.getElementById("urlInput").value;
  const result = document.getElementById("result");

  if (isValidURL(urlInput)) {
    result.textContent = "Valid URL!";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid URL!";
    result.style.color = "red";
  }
});

function isValidURL(url) {
  const regex =
    /^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,6})?)(:[0-9]{1,5})?(\/[^\s]*)?$/;
  return regex.test(url);
}
