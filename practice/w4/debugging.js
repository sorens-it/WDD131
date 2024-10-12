// Constants and Variables
const PI = 3.14;
let area = 0;

// Function to calculate the area of a circle
function circleArea(radius) {
    const area = radius * radius * PI;  // Correct area formula
    return area;  // Return the calculated area
}

// Calculate area for radius 3
area = circleArea(3);
console.log("Area1 (radius 3):", area);  // Log the result

// Calculate area for radius 4
area = circleArea(4);
console.log("Area2 (radius 4):", area);  // Log the result
