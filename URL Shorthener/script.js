document
  .getElementById("urlForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const longUrl = document.getElementById("longUrl").value;
    const response = await fetch("/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longUrl }),
    });

    const result = await response.json();
    if (result.shortUrl) {
      document.getElementById(
        "result"
      ).innerHTML = `<a href="${result.shortUrl}" target="_blank">${result.shortUrl}</a>`;
    } else {
      document.getElementById("result").textContent = "Error shortening URL.";
    }
  });
