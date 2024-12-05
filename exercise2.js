document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');
    const colors = ["blue", "red", "green"]; // Color sequence array
    let currentColorIndex = 0; // Index to track the current color

    // Set initial color to blue
    colorBox.style.backgroundColor = colors[currentColorIndex];

    // Add click event listener
    colorBox.addEventListener('click', () => {
        // Update the index to the next color in sequence
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // Apply the new color to the div
        colorBox.style.backgroundColor = colors[currentColorIndex];
    });
});
