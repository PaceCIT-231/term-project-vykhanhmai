// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
}

// Handle Contact Form Submission
document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
        document.getElementById("sent-message").style.display = "block";
        document.getElementById("contact-form").reset();

        setTimeout(function() {
            document.getElementById("sent-message").style.display = "none";
        }, 5000);
    }
});

// Gallery image hover effect for Dark Mode
const galleryItems = document.querySelectorAll('.gallery-items img');
galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (document.body.classList.contains("dark-mode")) {
            item.style.transform = "scale(1.05)";
        }
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = "scale(1)";
    });
});

// Ensure dark mode is preserved if page is refreshed
window.addEventListener('DOMContentLoaded', (event) => {
    if (document.body.classList.contains("dark-mode")) {
        const moonIcon = document.querySelector(".moon-icon");
        moonIcon.textContent = "🌙";
    }
});
