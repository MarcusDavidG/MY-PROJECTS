document.getElementById("speakButton").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value;
  if (textInput.trim() !== "") {
    const utterance = new SpeechSynthesisUtterance(textInput);
    window.speechSynthesis.speak(utterance);
  }
});
