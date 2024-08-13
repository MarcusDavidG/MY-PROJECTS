document.addEventListener("DOMContentLoaded", () => {
  const entryTextarea = document.getElementById("entry");
  const saveButton = document.getElementById("save-button");
  const entriesDiv = document.getElementById("entries");

  // Load entries from local storage
  function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    entriesDiv.innerHTML = entries
      .map(
        (entry) => `
            <div class="entry">
                <div class="entry-date">${entry.date}</div>
                <div class="entry-text">${entry.text}</div>
            </div>
        `
      )
      .join("");
  }

  // Save new entry to local storage
  function saveEntry() {
    const text = entryTextarea.value.trim();
    if (text) {
      const entry = {
        date: new Date().toLocaleString(),
        text: text,
      };
      const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
      entries.push(entry);
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
      entryTextarea.value = "";
      loadEntries();
    }
  }

  saveButton.addEventListener("click", saveEntry);

  // Initial load of entries
  loadEntries();
});
