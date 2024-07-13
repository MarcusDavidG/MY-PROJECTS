const chatWindow = document.getElementById("chat-window");
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const message = input.value.trim();
    if (message) {
      addMessage("You", message);
      input.value = "";
      setTimeout(() => {
        addMessage("Bot", generateResponse(message));
      }, 500);
    }
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${sender}: ${message}`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateResponse(message) {
  // Simple bot response for demonstration
  return `You said: ${message}`;
}
