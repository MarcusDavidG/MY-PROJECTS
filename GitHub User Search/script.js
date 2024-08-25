document.getElementById("search-button").addEventListener("click", () => {
  const username = document.getElementById("username-input").value.trim();
  if (username) {
    fetchUserInfo(username);
  }
});

async function fetchUserInfo(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      showErrorMessage();
      return;
    }
    const user = await response.json();
    displayUserInfo(user);
  } catch (error) {
    showErrorMessage();
  }
}

function displayUserInfo(user) {
  document.getElementById("avatar").src = user.avatar_url;
  document.getElementById("name").textContent = user.name || user.login;
  document.getElementById("bio").textContent = user.bio || "No bio available";
  document.getElementById("repo-count").textContent = user.public_repos;
  document.getElementById("followers").textContent = user.followers;
  document.getElementById("following").textContent = user.following;
  document.getElementById("profile-link").href = user.html_url;

  document.getElementById("user-info").classList.remove("hidden");
  document.getElementById("error-message").classList.add("hidden");
}

function showErrorMessage() {
  document.getElementById("user-info").classList.add("hidden");
  document.getElementById("error-message").classList.remove("hidden");
}
