$(document).ready(function () {
    // Load previous messages from localStorage and display them on page load
    loadMessages();

    // Handle form submission
    $('#userForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data, including rating
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(),
            rating: parseInt($('#rating').val()), // Add rating field
            createdAt: new Date().toISOString(),
        };

        // Save form data to localStorage
        saveMessage(formData);

        // Clear the form
        $('#userForm')[0].reset();

        // Append the new message directly to the messages list
        appendMessage(formData);

        // Display confirmation below the form without page reload
        const confirmationMessage = `
            <h3>Thank you, ${formData.name}!</h3>
            <p>We will contact you at <strong>${formData.email}</strong> or <strong>${formData.phone}</strong>.</p>
            <p>Your message: "${formData.message}"</p>
            <p><strong>Rating:</strong> ${formData.rating}</p>
        `;
        $('#userMessages').prepend(confirmationMessage); // Show the confirmation message below the form
    });

    // Save message to localStorage
    function saveMessage(formData) {
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(formData); // Add the new message
        localStorage.setItem('messages', JSON.stringify(messages)); // Save the updated messages array to localStorage
    }

    // Load messages from localStorage and display them
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        $('#userMessages').empty(); // Clear previous messages

        // Loop through messages and append each one to the page
        messages.forEach(message => {
            appendMessage(message);
        });
    }

    // Function to append a single message item to the message list
    function appendMessage(message) {
        const messageHtml = `
            <div class="feedback-card">
                <h4>${message.name}</h4>
                <p>${message.message}</p>
                <p><strong>Contact:</strong> ${message.email} / ${message.phone}</p>
                <p><strong>Rating:</strong> ${message.rating}</p>
                <p><small>Submitted on ${new Date(message.createdAt).toLocaleDateString()}</small></p>
            </div>
        `;
        $('#userMessages').append(messageHtml); // Append the message to the #userMessages section
    }
});
