document
  .getElementById("imageUpload")
  .addEventListener("change", handleImageUpload);

async function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgElement = document.getElementById("uploadedImage");
      imgElement.src = event.target.result;
      imgElement.style.display = "block";
      predictImage(imgElement);
    };
    reader.readAsDataURL(file);
  }
}

async function predictImage(imgElement) {
  const model = await mobilenet.load();
  const predictions = await model.classify(imgElement);
  displayPrediction(predictions);
}

function displayPrediction(predictions) {
  const predictionElement = document.getElementById("prediction");
  predictionElement.innerHTML = "";
  predictions.forEach((prediction) => {
    const p = document.createElement("p");
    p.innerText = `${prediction.className}: ${prediction.probability.toFixed(
      4
    )}`;
    predictionElement.appendChild(p);
  });
}
