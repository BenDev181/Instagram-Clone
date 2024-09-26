let heart = document.querySelector("#like");

heart.addEventListener("click", function () {

    if (heart.src === "https://i2.pngimg.me/thumb/f/720/m2i8H7d3Z5b1b1b1.jpg") {
    heart.src = "https://w7.pngwing.com/pngs/387/843/png-transparent-favorite-heart-like-likes-love-loved-basic-ui-2-line-icon.png"; // Image for "unlike"
    } else {
    heart.src = "https://i2.pngimg.me/thumb/f/720/m2i8H7d3Z5b1b1b1.jpg"; // Image for "like"
    }
});

// Get references to the HTML elements
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-comment');
const commentsDisplay = document.getElementById('comments-display');

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
  // Get the comment text
  const commentText = commentInput.value.trim();
  
  // Check if the comment is not empty
  if (commentText !== '') {
    // Create a new paragraph element for the comment
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;
    
    // Add the new comment to the display area
    commentsDisplay.appendChild(commentElement);
    
    // Clear the input field
    commentInput.value = '';
  }
});



