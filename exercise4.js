// Get references to form elements and the text div
const fontSize = document.getElementById('fontSize');
const fontFamily = document.getElementById('fontFamily');
const fontColor = document.getElementById('fontColor');
const bgColor = document.getElementById('bgColor');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const textDiv = document.getElementById('text');

// Function to update text formatting
function updateTextFormatting() {
    textDiv.style.fontSize = fontSize.value;
    textDiv.style.fontFamily = fontFamily.value;
    textDiv.style.color = fontColor.value;
    textDiv.style.backgroundColor = bgColor.value;
    
    textDiv.style.fontWeight = bold.checked ? 'bold' : 'normal';
    textDiv.style.fontStyle = italic.checked ? 'italic' : 'normal';
    textDiv.style.textDecoration = underline.checked ? 'underline' : 'none';
}

// Add event listeners to form elements
fontSize.addEventListener('change', updateTextFormatting);
fontFamily.addEventListener('change', updateTextFormatting);
fontColor.addEventListener('input', updateTextFormatting);
bgColor.addEventListener('input', updateTextFormatting);
bold.addEventListener('change', updateTextFormatting);
italic.addEventListener('change', updateTextFormatting);
underline.addEventListener('change', updateTextFormatting);

// Initialize with default formatting
updateTextFormatting();
