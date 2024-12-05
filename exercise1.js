document.addEventListener('DOMContentLoaded', () => {
    const yellowBox = document.getElementById('yellowBox');

    yellowBox.addEventListener('mouseover', () => {
        yellowBox.textContent = "Can I help you?";
    });

    yellowBox.addEventListener('mouseout', () => {
        yellowBox.textContent = "Hello world!";
    });
});
