document.addEventListener('DOMContentLoaded', () => {
    const imageSelect = document.getElementById('imageSelect');
    const displayImage = document.getElementById('displayImage');

    imageSelect.addEventListener('change', () => {
        // Get the selected option's value and text
        const selectedOption = imageSelect.options[imageSelect.selectedIndex];
        const newImageSrc = selectedOption.value;
        const newImageAlt = selectedOption.text;

        // Update the image's src and alt attributes
        displayImage.src = newImageSrc ? newImageSrc : 'images/no-image.png';
        displayImage.alt = newImageAlt;
    });
});
