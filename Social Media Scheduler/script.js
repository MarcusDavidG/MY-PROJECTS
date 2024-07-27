// script.js
document
  .getElementById("schedulerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const platform = document.getElementById("platform").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const post = {
      platform,
      content,
      date,
      time,
    };

    addPostToList(post);
    clearForm();
  });

function addPostToList(post) {
  const scheduledPosts = document.getElementById("scheduledPosts");
  const listItem = document.createElement("li");
  listItem.textContent = `${post.platform} - ${post.content} - ${post.date} at ${post.time}`;
  scheduledPosts.appendChild(listItem);
}

function clearForm() {
  document.getElementById("schedulerForm").reset();
}
