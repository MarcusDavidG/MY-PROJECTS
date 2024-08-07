document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.getElementById("note-form");
  const noteInput = document.getElementById("note-input");
  const notesContainer = document.getElementById("notes-container");

  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
      noteDiv.innerHTML = `
                ${note}
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
      notesContainer.appendChild(noteDiv);
    });
  };

  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.push(noteText);
      localStorage.setItem("notes", JSON.stringify(notes));
      noteInput.value = "";
      loadNotes();
    }
  });

  notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      loadNotes();
    }
  });

  loadNotes();
});
