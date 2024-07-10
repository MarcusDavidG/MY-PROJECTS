document.getElementById("encryptButton").addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput").files[0];
  const password = document.getElementById("password").value;

  if (!fileInput || !password) {
    alert("Please select a file and enter a password.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const fileData = e.target.result;
    const encrypted = CryptoJS.AES.encrypt(fileData, password).toString();

    const blob = new Blob([encrypted], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = url;
    downloadLink.download = fileInput.name + ".enc";
    downloadLink.style.display = "block";
    downloadLink.textContent = "Download Encrypted File";
  };

  reader.readAsDataURL(fileInput);
});
