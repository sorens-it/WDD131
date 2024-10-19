document.addEventListener("DOMContentLoaded", function() {
    // Select all 'Read More' links
    const readMoreLinks = document.querySelectorAll('.read-more');

    // Add event listeners to each 'Read More' link
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            const moreText = this.previousElementSibling; // Select the previous sibling (the hidden .more-text span)
            
            // Toggle the display of the more text
            if (moreText.style.display === "inline") {
                moreText.style.display = "none";
                this.textContent = "Read More"; // Change text back to 'Read More'
            } else {
                moreText
