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
    // Ensure that ratings are rounded to a number between 0 and 5
    const ratingCount = Math.floor(rating) || 0;
    return fullStar.repeat(ratingCount) + emptyStar.repeat(5 - ratingCount);
}

// Function to display a random recipe
function displayRandomRecipe() {
    const randomRecipe = getRandomRecipe();
    const randomRecipeContainer = document.querySelector('#random-recipe');
    randomRecipeContainer.innerHTML = generateRecipeHTML(randomRecipe);
}

// Function to display all recipes
function displayAllRecipes() {
    const recipeContainer = document.querySelector('#recipe-container');
    recipeContainer.innerHTML = recipes
        .map(recipe => generateRecipeHTML(recipe))
        .join('');
}

// Function to filter recipes based on search query
function filterRecipes(event) {
    event.preventDefault();
    const searchInput = document.querySelector('#search').value.toLowerCase();
    const recipeContainer = document.querySelector('#recipe-container');

    if (!searchInput) {
        // If the search input is empty, reset to displaying all recipes
        displayAllRecipes();
        return;
    }

    const filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchInput) ||
            recipe.description.toLowerCase().includes(searchInput) ||
            (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(searchInput))) ||
            (recipe.recipeIngredient && recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searchInput)))
        );
    });

    if (filteredRecipes.length > 0) {
        recipeContainer.innerHTML = filteredRecipes
            .map(recipe => generateRecipeHTML(recipe))
            .join('');
    } else {
        recipeContainer.innerHTML = '<p>No recipes match your search criteria.</p>';
    }
}

// Initialize the app to display a random recipe, all recipes, and handle search functionality
function init() {
    const searchForm = document.querySelector('#search-form');

    // Display a random recipe on page load
    displayRandomRecipe();

    // Display all recipes on page load
    displayAllRecipes();

    // Listen for search submissions
    searchForm.addEventListener('submit', filterRecipes);
}

// Listen for the DOMContentLoaded event to ensure the DOM is ready before running the script
window.addEventListener('DOMContentLoaded', init);
