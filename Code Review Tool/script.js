function submitCode() {
  const code = document.getElementById("codeInput").value;
  const reviewOutput = document.getElementById("reviewOutput");

  if (!code.trim()) {
    reviewOutput.innerHTML = "<p>Please enter some code for review.</p>";
    return;
  }

  const feedback = generateFeedback(code);
  reviewOutput.innerHTML = `<h2>Review Feedback:</h2><p>${feedback}</p>`;
}

function generateFeedback(code) {
  let feedback = "";

  if (code.includes("console.log")) {
    feedback += "Avoid using console.log in production code.<br>";
  }

  if (code.length < 50) {
    feedback += "The code is too short. Please provide more context.<br>";
  }

  if (!code.includes("function")) {
    feedback += "Consider using functions to organize your code.<br>";
  }

  return feedback || "Looks good!";
}
