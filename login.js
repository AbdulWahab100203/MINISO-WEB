$(document).ready(function() {
    // Show signup form
    $('#showSignupForm').click(function(e) {
        e.preventDefault();
        $('#loginForm').hide();
        $('#signupForm').show();
    });

    // Show login form
    $('#showLoginForm').click(function(e) {
        e.preventDefault();
        $('#signupForm').hide();
        $('#loginForm').show();
    });

    // Handle Login
    $('#loginBtn').click(function() {
        const username = $('#loginUsername').val();
        const password = $('#loginPassword').val();

        if (!username || !password) {
            $('#loginStatus').text('Please enter both username and password.').css('color', 'red');
            return;
        }

        // Retrieve users array from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find a user matching the username and password
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            $('#loginStatus').text('Login successful! Welcome to Miniso.').css('color', 'green');
            $('#loginForm').hide();

            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect after successful login
            }, 2000);
        } else {
            $('#loginStatus').text('Login failed. Invalid username or password.').css('color', 'red');
        }
    });

    // Handle Signup
    $('#signupBtn').click(function() {
        const username = $('#signupUsername').val();
        const password = $('#signupPassword').val();

        if (!username || !password) {
            $('#signupStatus').text('Please fill in both fields.').css('color', 'red');
            return;
        }

        // Retrieve users array from localStorage and check if username exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(u => u.username === username);

        if (userExists) {
            $('#signupStatus').text('Username already exists.').css('color', 'red');
            return;
        }

        // Add new user to the users array
        users.push({ username: username, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        $('#signupStatus').text('Signup successful! Please log in.').css('color', 'green');
        $('#signupForm').hide();
        $('#loginForm').show();
    });
});
