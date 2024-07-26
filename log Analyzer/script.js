// scripts.js
document.getElementById("analyzeButton").addEventListener("click", analyzeLog);

function analyzeLog() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a log file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const logContent = event.target.result;
    processLog(logContent);
  };
  reader.readAsText(file);
}

function processLog(logContent) {
  const logLines = logContent.split("\n");
  const logSummary = {
    totalLines: logLines.length,
    errorCount: 0,
    warningCount: 0,
  };

  const logDetails = logLines
    .map((line, index) => {
      if (line.includes("ERROR")) {
        logSummary.errorCount++;
        return `<div class="log-entry error">Line ${index + 1}: ${line}</div>`;
      } else if (line.includes("WARNING")) {
        logSummary.warningCount++;
        return `<div class="log-entry warning">Line ${
          index + 1
        }: ${line}</div>`;
      } else {
        return `<div class="log-entry info">Line ${index + 1}: ${line}</div>`;
      }
    })
    .join("");

  displayResults(logSummary, logDetails);
}

function displayResults(logSummary, logDetails) {
  const summaryElement = document.getElementById("logSummary");
  const detailsElement = document.getElementById("logDetails");

  summaryElement.innerHTML = `
        <p>Total Lines: ${logSummary.totalLines}</p>
        <p>Errors: ${logSummary.errorCount}</p>
        <p>Warnings: ${logSummary.warningCount}</p>
    `;

  detailsElement.innerHTML = logDetails;
}
