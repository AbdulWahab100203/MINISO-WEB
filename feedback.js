$(document).ready(function () {
    // Load feedbacks on page load
    loadFeedback();
  
    // Handle form submission
    $('#feedbackForm').submit(function (event) {
      event.preventDefault();
  
      // Collect form data
      const feedbackData = {
        username: $('#username').val(),
        message: $('#message').val(),
        rating: parseInt($('#rating').val()),
        createdAt: new Date().toISOString(),
      };
  
      // Save feedback to local storage
      saveFeedback(feedbackData);
  
      // Clear the form
      $('#feedbackForm')[0].reset();
  
      // Append the new feedback directly to the feedback list
      appendFeedback(feedbackData);
    });
  
    // Save feedback to localStorage
    function saveFeedback(feedbackData) {
      let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
      feedbacks.push(feedbackData);
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }
  
    // Load feedback from localStorage and display it
    function loadFeedback() {
      const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
      $('#feedbackList').empty();
  
      feedbacks.forEach(feedback => {
        appendFeedback(feedback);
      });
    }
  
    // Function to append a single feedback item to the feedback list
    function appendFeedback(feedback) {
      const feedbackHtml = `
        <div class="feedback-card">
          <h5>${feedback.username}</h5>
          <p>${feedback.message}</p>
          <p><strong>Rating:</strong> ${feedback.rating}</p>
          <p><small>Submitted on ${new Date(feedback.createdAt).toLocaleDateString()}</small></p>
        </div>
      `;
      $('#feedbackList').append(feedbackHtml);
    }
  });
  