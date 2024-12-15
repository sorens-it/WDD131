// JavaScript to handle image replacement in the grid
document.addEventListener("DOMContentLoaded", function() {
  // Select all grid images
  const gridImages = document.querySelectorAll(".home-grid .card-img");
  
  // Add click event listeners to each image
  gridImages.forEach((image) => {
    image.addEventListener("click", function() {
      // Replace the image source with a new image
      const currentSrc = this.src;
      let newSrc;

      // Define a new source based on the current image source or create a rotation
      if (currentSrc.includes("mug-1.png")) {
        newSrc = "images/grid/mug-2.png";
      } else if (currentSrc.includes("tumbler-1.png")) {
        newSrc = "images/grid/tumbler-2.png";
      } else if (currentSrc.includes("wbottle-1.png")) {
        newSrc = "images/grid/wbottle-2.png";
      } else if (currentSrc.includes("tmug-1.png")) {
        newSrc = "images/grid/tmug-2.png";
      } else if (currentSrc.includes("nbook-1.png")) {
        newSrc = "images/grid/nbook-2.png";
      } else if (currentSrc.includes("snbook-1.png")) {
        newSrc = "images/grid/snbook-2.png";
      } else if (currentSrc.includes("jbox-1.png")) {
        newSrc = "images/grid/jbox-2.png";
      } else if (currentSrc.includes("clock-1.png")) {
        newSrc = "images/grid/clock-2.png";
      } else {
        // Optionally, revert to the original image
        newSrc = currentSrc.replace("-2.png", "-1.png");
      }

      // Update the image source
      this.src = newSrc;
    });
  });
});
