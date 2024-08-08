document.getElementById("add-recipe").addEventListener("click", addRecipe);

function addRecipe() {
  const recipeName = document.getElementById("recipe-name").value.trim();
  const recipeIngredients = document
    .getElementById("recipe-ingredients")
    .value.trim();
  const recipeInstructions = document
    .getElementById("recipe-instructions")
    .value.trim();

  if (
    recipeName === "" ||
    recipeIngredients === "" ||
    recipeInstructions === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const recipeList = document.getElementById("recipe-list");

  const recipeItem = document.createElement("div");
  recipeItem.classList.add("recipe-item");

  const recipeTitle = document.createElement("h2");
  recipeTitle.textContent = recipeName;
  recipeItem.appendChild(recipeTitle);

  const ingredientsList = document.createElement("ul");
  recipeIngredients.split(",").forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient.trim();
    ingredientsList.appendChild(listItem);
  });
  recipeItem.appendChild(ingredientsList);

  const instructionsPara = document.createElement("p");
  instructionsPara.textContent = recipeInstructions;
  recipeItem.appendChild(instructionsPara);

  recipeList.appendChild(recipeItem);

  // Clear input fields
  document.getElementById("recipe-name").value = "";
  document.getElementById("recipe-ingredients").value = "";
  document.getElementById("recipe-instructions").value = "";
}
