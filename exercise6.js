// Function to show the article body and hide the "show" link
function showArticleBody(articleId) {
    const body = document.getElementById('body' + articleId);
    const showLink = document.getElementById('showLink' + articleId);
    const hideLink = document.getElementById('hideLink' + articleId);

    body.style.display = 'block'; // Show the article body
    showLink.style.display = 'none'; // Hide the "show" link
    hideLink.style.display = 'inline'; // Show the "hide" link
}

// Function to hide the article body and show the "show" link
function hideArticleBody(articleId) {
    const body = document.getElementById('body' + articleId);
    const showLink = document.getElementById('showLink' + articleId);
    const hideLink = document.getElementById('hideLink' + articleId);

    body.style.display = 'none'; // Hide the article body
    showLink.style.display = 'inline'; // Show the "show" link
    hideLink.style.display = 'none'; // Hide the "hide" link
}

// Add event listeners for each article
document.getElementById('showLink1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showArticleBody(1);
});
document.getElementById('hideLink1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    hideArticleBody(1);
});
document.getElementById('showLink2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showArticleBody(2);
});
document.getElementById('hideLink2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    hideArticleBody(2);
});
