// Menu Toggle for small screens
const menuButton = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("hide");
});

// Handle window resize for showing/hiding menu based on screen size
function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide');
    } else {
        navLinks.classList.add('hide');
    }
}

// Listen to window resize event
window.addEventListener("resize", handleResize);

// Run on page load
handleResize();

// Create the modal HTML
function viewerTemplate(imageSrc, altText) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imageSrc}" alt="${altText}">
    </div>`;
}

// Handle image clicks to show the modal
function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const clickedImg = event.target;
        const imgSrc = clickedImg.src.split("-")[0] + "-full.jpeg"; // Create path for larger image
        const altText = clickedImg.alt;

        // Insert modal HTML
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));

        // Close modal when clicking the close button
        document.querySelector('.close-viewer').addEventListener("click", closeViewer);
    }
}

// Function to remove the modal from the DOM
function closeViewer() {
    document.querySelector('.viewer').remove();
}

// Attach event listener to the gallery section
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
