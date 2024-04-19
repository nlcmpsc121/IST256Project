// AdvancedScript.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize interactive features
    function initializeInteractiveFeatures() {
        // Add event listeners for interactive elements
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', function() {
                alert('CTA button clicked!');
            });
        }

        // Initialize slideshow for testimonials section
        showSlides();
    }

    // Function to validate the signup form
    function validateSignUpForm() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Add more complex validation logic as needed

        return true;
    }

    // Function for slideshow in testimonials section
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("testimonial");
        if (slides.length > 0) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 5000); // Change image every 5 seconds
        }
    }

    // Call initialization function when the DOM is fully loaded
    initializeInteractiveFeatures();
});
