document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for testing
    this.classList.add("submitted"); // Add class to trigger validation styling

    // Check if the form is valid
    if (this.checkValidity()) {
        alert("Form submitted successfully!");
        this.submit(); // Uncomment this to allow actual submission
    }
});