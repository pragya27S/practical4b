document.addEventListener('DOMContentLoaded', function() {
    // Array of colors
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    // Get references to the color palette container and selected color display
    const colorsDiv = document.getElementById('colors');
    const selectedDiv = document.getElementById('selected');

    // Function to create color tiles
    function createColorTiles() {
        colors.forEach(color => {
            // Create a new div for each color
            const colorTile = document.createElement('div');
            colorTile.style.width = '50px';
            colorTile.style.height = '50px';
            colorTile.style.display = 'inline-block';
            colorTile.style.margin = '5px';
            colorTile.style.backgroundColor = color;
            colorTile.style.cursor = 'pointer';
            colorTile.dataset.color = color; // Store color in data attribute

            // Append the color tile to the color palette
            colorsDiv.appendChild(colorTile);
        });
    }

    // Function to handle color tile clicks
    function handleColorClick(event) {
        if (event.target.tagName === 'DIV' && event.target.dataset.color) {
            const selectedColor = event.target.dataset.color;

            // Set the background color of the selected div
            selectedDiv.style.backgroundColor = selectedColor;
            
            // Display the color code inside the selected div
            selectedDiv.textContent = selectedColor;
        }
    }

    // Create the color tiles when the page loads
    createColorTiles();

    // Add click event listener to the colors div
    colorsDiv.addEventListener('click', handleColorClick);
});
