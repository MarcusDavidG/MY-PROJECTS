const addRecipeButton = document.getElementById('add-recipe-btn');
const recipeNameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('ingredients');
const instructionsInput = document.getElementById('instructions');
const recipeList = document.getElementById('recipe-list');

let recipes = [];

// Add a new recipe
function addRecipe() {
    const recipeName = recipeNameInput.value.trim();
    const ingredients = ingredientsInput.value.trim();
    const instructions = instructionsInput.value.trim();

    if (recipeName === '' || ingredients === '' || instructions === '') {
        alert('Please fill out all fields.');
        return;
    }

    const recipe = {
        id: generateID(),
        name: recipeName,
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
        instructions: instructions
    };

    recipes.push(recipe);
    addRecipeToDOM(recipe);

    // Clear input fields
    recipeNameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
}

// Generate a random ID for each recipe
function generateID() {
    return Math.floor(Math.random() * 1000000);
}

// Add recipe to DOM
function addRecipeToDOM(recipe) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="recipe-header">
            <h4>${recipe.name}</h4>
            <button class="delete-btn" onclick="deleteRecipe(${recipe.id})">x</button>
        </div>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    recipeList.appendChild(li);
}

// Delete a recipe
function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    init(); // Refresh the recipe list
}

// Initialize the app
function init() {
    recipeList.innerHTML = '';
    recipes.forEach(addRecipeToDOM);
}

// Event listener for adding a recipe
addRecipeButton.addEventListener('click', addRecipe);

init();
