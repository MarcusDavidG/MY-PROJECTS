document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const website = document.getElementById("website").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (website && username && password) {
      const passwordEntry = {
        website,
        username,
        password,
      };

      let passwordList = localStorage.getItem("passwordList");
      if (passwordList) {
        passwordList = JSON.parse(passwordList);
      } else {
        passwordList = [];
      }

      passwordList.push(passwordEntry);
      localStorage.setItem("passwordList", JSON.stringify(passwordList));
      displayPasswords();

      document.getElementById("passwordForm").reset();
    }
  });

function displayPasswords() {
  const passwordList = JSON.parse(localStorage.getItem("passwordList")) || [];
  const passwordListElement = document.getElementById("passwordList");
  passwordListElement.innerHTML = "";

  passwordList.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Website:</strong> ${entry.website} <br>
      <strong>Username:</strong> ${entry.username} <br>
      <strong>Password:</strong> ${entry.password} <br>
      <button onclick="deletePassword(${index})">Delete</button>
    `;
    passwordListElement.appendChild(listItem);
  });
}

function deletePassword(index) {
  let passwordList = JSON.parse(localStorage.getItem("passwordList"));
  passwordList.splice(index, 1);
  localStorage.setItem("passwordList", JSON.stringify(passwordList));
  displayPasswords();
}

// Display saved passwords on page load
window.onload = displayPasswords;
