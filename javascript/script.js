// Simulate a login process and redirect to a member page
document.addEventListener("DOMContentLoaded", function () {
    // Get the login button
    const loginButton = document.getElementById("loginButton");

    // Add click event listener
    loginButton.addEventListener("click", function () {
        // Simulate login (replace with real authentication logic)
        alert("Login successful!");

        // Redirect to a dashboard or home page after login
        window.location.href = "member.html"; // Change as needed
    });
});

// Simulate a form submission process
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.getElementById("myForm");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Simulate form processing (replace with real logic)
        alert("Form submitted successfully!");
    });
});

// Card Hover Effect - Scale on Hover
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// Change "Join Today" Button Text on Hover
let joinButton = document.querySelector(".pricing-plan .btn-primary");

joinButton.addEventListener("mouseenter", function () {
    this.textContent = "Let's Go!";
});

joinButton.addEventListener("mouseleave", function () {
    this.textContent = "Join Today";
});