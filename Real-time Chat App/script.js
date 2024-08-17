const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message !== "") {
    addMessage(message, "user-message");
    chatInput.value = "";
    setTimeout(() => {
      addMessage("This is a simulated response!", "chat-message");
    }, 500);
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

function addMessage(message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.classList.add(className);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
