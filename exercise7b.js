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
            
            // Create a text node for the song
            const textNode = document.createTextNode(songValue);
            
            // Create a delete link
            const deleteLink = document.createElement('a');
            deleteLink.href = '#';
            deleteLink.textContent = 'Delete';
            deleteLink.style.color = 'red';
            deleteLink.style.marginLeft = '10px';
            deleteLink.style.textDecoration = 'none';

            // Append text and delete link to the list item
            listItem.appendChild(textNode);
            listItem.appendChild(deleteLink);

            // Add the new item to the playlist
            playlist.appendChild(listItem);

            // Clear the input field
            songInput.value = '';
        }
    });

    // Add event listener to the playlist to handle delete link clicks
    playlist.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            // Remove the parent list item of the clicked link
            const listItem = event.target.parentElement;
            playlist.removeChild(listItem);
        }
    });
});
