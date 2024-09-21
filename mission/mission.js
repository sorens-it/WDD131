function setTheme() {
    // Set the light theme by default
    document.body.classList.remove("dark");
    document.querySelector("img").setAttribute("src", "./byui-logo_blue.webp");
}

// Ensure the theme is set when the page loads
setTheme();