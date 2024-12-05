document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('playlistForm');
    const songInput = document.getElementById('songInput');
    const playlist = document.getElementById('playlist');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const songValue = songInput.value.trim(); // Get the input value and trim whitespace

        if (songValue) { // Check if the input is not empty
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = songValue;

            // Add the new item to the playlist
            playlist.appendChild(listItem);

            // Clear the input field
            songInput.value = '';
        }
    });
});
