const users = {
    admin: "root" // Default user: admin with password root
};

function hideLoginForm() {
    document.getElementById("login-form").style.display = "none";
}

function showRegistrationForm() {
    hideLoginForm();
    document.getElementById("registration-form").style.display = "block";
}

function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    const messageContainer = document.getElementById("message-container");
    const message = document.getElementById("message");

    if (!newUsername || !newPassword) {
        showMessage(messageContainer, message, "Please enter both username and password.", "error");
        return;
    }

    if (users[newUsername]) {
        showMessage(messageContainer, message, "Username already exists. Please choose a different one.", "error");
        return;
    }

    users[newUsername] = newPassword;
    showMessage(messageContainer, message, "Registration successful!", "success");

    // Clear registration form and hide it
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("registration-form").style.display = "none";
    showLoginForm(); // Show login form again after successful registration
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const messageContainer = document.getElementById("message-container");
    const message = document.getElementById("message");

    if (users[username] === password) {
        hideLoginForm();
        document.getElementById("secured-content").style.display = "block";
        showMessage(messageContainer, message, "Login successful!", "success");
    } else {
        showMessage(messageContainer, message, "Login failed. Please check your username and password.", "error");
    }
}

function logout() {
    showLoginForm();
    document.getElementById("secured-content").style.display = "none";
    showMessage(document.getElementById("message-container"), document.getElementById("message"), "Logout successful!", "success"); // Display logout message
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function showMessage(container, messageElement, message, messageType) {
    messageElement.textContent = message;
    container.style.display = "block";
    messageElement.className = "message " + messageType;
    setTimeout(function () {
        container.style.display = "none";
    }, 3000);
}
