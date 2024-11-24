// Import recipes array from the recipes.mjs module
import recipes from './recipes.mjs';

// Function to generate a random number between 0 and the max value (exclusive)
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to select a random recipe from the recipes array
function getRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

// Function to generate the HTML for a recipe
function generateRecipeHTML(recipe) {
    return `
        <article class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <h2>${recipe.name}</h2>
            <p class="recipe-description">${recipe.description}</p>
            <p><strong>Author:</strong> ${recipe.author || 'Unknown'}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime || 'N/A'}</p>
            <div class="recipe__ratings">
                ${generateRatingHTML(recipe.rating)}
            </div>
            <ul class="recipe__tags">${generateTagsHTML(recipe.tags)}</ul>
            <h3>Ingredients:</h3>
            <ul class="recipe__ingredients">
                ${generateIngredientsHTML(recipe.recipeIngredient)}
            </ul>
            <h3>Instructions:</h3>
            <ol class="recipe__instructions">
                ${generateInstructionsHTML(recipe.recipeInstructions)}
            </ol>
        </article>
    `;
}

// Function to generate HTML for recipe tags
function generateTagsHTML(tags) {
    if (!tags || tags.length === 0) return '<li>No tags available</li>';
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate HTML for recipe ingredients
function generateIngredientsHTML(ingredients) {
    if (!ingredients || ingredients.length === 0) return '<li>No ingredients listed</li>';
    return ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
}

// Function to generate HTML for recipe instructions
function generateInstructionsHTML(instructions) {
    if (!instructions || instructions.length === 0) return '<li>No instructions available</li>';
    return instructions.map((instruction, index) => `<li>${index + 1}. ${instruction}</li>`).join('');
}

// Function to generate HTML for recipe ratings
function generateRatingHTML(rating) {
    const fullStar = '<span class="icon-star" aria-label="star">★</span>';
    const emptyStar = '<span class="icon-star-empty" aria-label="no star">☆</span>';
    return fullStar.repeat(Math.floor(rating)) + emptyStar.repeat(5 - Math.floor(rating));
}

// Function to display all recipes
function displayAllRecipes() {
    const recipeContainer = document.querySelector('#recipe-container');
    recipeContainer.innerHTML = recipes
        .map(recipe => generateRecipeHTML(recipe))
        .join('');
}

// Initialize the app to display all recipes and handle search functionality
function init() {
    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search');
    const recipeContainer = document.querySelector('#recipe-container');

    // Display all recipes on page load
    displayAllRecipes();

    // Listen for search submissions
    searchForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent page reload on form submission
        const query = searchInput.value.toLowerCase().trim(); // Get search query

        // Filter recipes based on search query
        const filteredRecipes = recipes.filter(recipe => {
            // Search across various fields (name, description, author, cookTime, tags, ingredients)
            return (
                recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.author.toLowerCase().includes(query) ||
                recipe.cookTime.toLowerCase().includes(query) ||
                (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||
                (recipe.recipeIngredient && recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query)))
            );
        });

        // Display filtered recipes or show a "No results" message
        if (filteredRecipes.length > 0) {
            recipeContainer.innerHTML = filteredRecipes
                .map(recipe => generateRecipeHTML(recipe))
                .join('');
        } else {
            recipeContainer.innerHTML = '<p>No recipes match your search criteria.</p>';
        }
    });
}

// Listen for the DOMContentLoaded event to ensure the DOM is ready before running the script
window.addEventListener('DOMContentLoaded', init);
