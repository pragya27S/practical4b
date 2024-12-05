document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');
    const colors = ["blue", "red", "green", "yellow", "purple", "orange"]; // Arbitrary color array

    // Function to get a random index within the array length
    function getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }

    // Choose a random initial color
    let currentColorIndex = getRandomIndex(colors.length);
    colorBox.style.backgroundColor = colors[currentColorIndex];

    // Add click event listener
    colorBox.addEventListener('click', () => {
        // Update the index to the next color in sequence
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // Apply the new color to the div
        colorBox.style.backgroundColor = colors[currentColorIndex];
    });
});
