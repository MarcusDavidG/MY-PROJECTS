document.getElementById("learn-more").addEventListener("click", function () {
  window.location.href = "#features";
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent!");
    document.getElementById("contact-form").reset();
  });
