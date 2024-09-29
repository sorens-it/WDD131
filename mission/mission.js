// Select the theme selector dropdown element
const themeSelector = document.querySelector("#themeSelector");

// Function to change the theme
function changeTheme() {
    // Get the current value of the select element
    const theme = themeSelector.value;

    // If the selected theme is "dark", add the "dark" class to the body
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.querySelector("#logo").setAttribute("src", "byui-logo_white.png");
    } else {
        // Otherwise, remove the "dark" class and revert to light mode
        document.body.classList.remove("dark");
        document.querySelector("#logo").setAttribute("src", "byui-logo_blue.webp");
    }
}

// Add an event listener to the select element
themeSelector.addEventListener('change', changeTheme);
