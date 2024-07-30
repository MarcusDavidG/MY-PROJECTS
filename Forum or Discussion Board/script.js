document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("message").value;
  if (message.trim() === "") return;

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `<p class="message">${message}</p>`;

  document.getElementById("posts").appendChild(post);

  document.getElementById("message").value = "";
});
