document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the title and content
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  // Create a new post element
  const post = document.createElement("div");
  post.classList.add("post");

  // Add title and content to the post
  const postTitle = document.createElement("h3");
  postTitle.textContent = title;
  post.appendChild(postTitle);

  const postContent = document.createElement("p");
  postContent.textContent = content;
  post.appendChild(postContent);

  // Add the post to the post list
  document.getElementById("postList").appendChild(post);

  // Clear the form
  document.getElementById("postForm").reset();
});
