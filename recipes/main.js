import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesSection = document.querySelector('.recipes');

    // Helper function to create recipe card HTML
    const createRecipeCard = (recipe) => {
        const article = document.createElement('article');
        article.classList.add('recipe-card'); // Added a class for additional styling if needed

        article.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
            </span>
            <p class="description">${recipe.description || "No description available."}</p>
            <button class="details-btn" data-id="${recipe.id}">View Details</button>
        `;

        return article;
    };

    // Dynamically load all recipes
    recipes.forEach((recipe) => {
        const recipeCard = createRecipeCard(recipe);
        recipesSection.appendChild(recipeCard);
    });

    // Add interactivity to "View Details" buttons
    recipesSection.addEventListener('click', (event) => {
        if (event.target.classList.contains('details-btn')) {
            const recipeId = event.target.getAttribute('data-id');
            const recipe = recipes.find((r) => r.id === recipeId);

            if (recipe) {
                displayRecipeDetails(recipe);
            } else {
                alert("Recipe not found!");
            }
        }
    });

    // Function to display recipe details (placeholder for now)
    const displayRecipeDetails = (recipe) => {
        alert(`
            Recipe: ${recipe.title}
            Ingredients: ${recipe.ingredients.join(', ')}
            Instructions: ${recipe.instructions}
        `);
    };

    // Search functionality (optional feature for better usability)
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('#search');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        const filteredRecipes = recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(query)
        );

        recipesSection.innerHTML = ''; // Clear current recipes
        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach((recipe) => {
                const recipeCard = createRecipeCard(recipe);
                recipesSection.appendChild(recipeCard);
            });
        } else {
            recipesSection.innerHTML = '<p>No recipes found.</p>';
        }
    });
});
