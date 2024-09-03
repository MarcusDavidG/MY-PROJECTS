document
  .getElementById("generate-button")
  .addEventListener("click", generateMeme);

function generateMeme() {
  const canvas = document.getElementById("meme-canvas");
  const ctx = canvas.getContext("2d");
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  const imageUpload = document.getElementById("image-upload").files[0];

  if (imageUpload) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = "30px Impact";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.textAlign = "center";
        ctx.fillText(topText, canvas.width / 2, 50);
        ctx.strokeText(topText, canvas.width / 2, 50);
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);

        const downloadLink = document.getElementById("download-link");
        downloadLink.href = canvas.toDataURL();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(imageUpload);
  } else {
    alert("Please upload an image to generate a meme.");
  }
}
