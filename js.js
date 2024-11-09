// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Accordion toggle
const accordionToggle = document.querySelector(".accordion-toggle");
const accordionContent = document.querySelector(".accordion-content");

accordionToggle.addEventListener("click", function() {
    accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
});

// Dark mode toggle
const toggleDarkMode = document.createElement("button");
toggleDarkMode.textContent = "Toggle Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.top = "20px";
toggleDarkMode.style.right = "20px";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});