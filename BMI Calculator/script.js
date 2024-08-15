document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
  const weight = parseFloat(document.getElementById("weight").value);

  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    document.getElementById(
      "result"
    ).innerText = `Your BMI is ${bmi} (${category})`;
  } else {
    document.getElementById("result").innerText =
      "Please enter valid height and weight.";
  }
}
