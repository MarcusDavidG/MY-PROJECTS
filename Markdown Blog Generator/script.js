document.getElementById("generate-button").addEventListener("click", () => {
  const markdownText = document.getElementById("markdown-input").value;
  const htmlOutput = convertMarkdownToHTML(markdownText);
  document.getElementById("html-output").innerHTML = htmlOutput;
});

function convertMarkdownToHTML(markdown) {
  // Simple Markdown to HTML conversion using regular expressions
  let html = markdown
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, "<br />")
    .replace(/^\s*\n\*/gm, "<ul>\n*")
    .replace(/^(\*\s)(.*)/gm, "<li>$2</li>")
    .replace(/<\/li>\s*\n\*/gm, "</li>\n*")
    .replace(/\*\s([^*]+)/g, "<ul>\n<li>$1</li>\n</ul>");

  // Add wrapping paragraph tags
  html = html
    .split("\n")
    .map((line) => {
      if (!line.match(/^<.*>$/)) {
        return `<p>${line}</p>`;
      }
      return line;
    })
    .join("\n");

  return html.trim();
}
