document.getElementById("generate-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const content = document.getElementById("content").value;
  doc.text(content, 10, 10);
  doc.save("generated.pdf");
});
