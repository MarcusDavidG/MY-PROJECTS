function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strength = document.getElementById("strength");

  let strengthValue = 0;

  if (password.length >= 8) strengthValue++;
  if (password.match(/[A-Z]/)) strengthValue++;
  if (password.match(/[a-z]/)) strengthValue++;
  if (password.match(/[0-9]/)) strengthValue++;
  if (password.match(/[\W_]/)) strengthValue++;

  switch (strengthValue) {
    case 0:
    case 1:
    case 2:
      strength.textContent = "Weak";
      strength.className = "weak";
      break;
    case 3:
    case 4:
      strength.textContent = "Medium";
      strength.className = "medium";
      break;
    case 5:
      strength.textContent = "Strong";
      strength.className = "strong";
      break;
    default:
      strength.textContent = "";
      strength.className = "";
  }
}
