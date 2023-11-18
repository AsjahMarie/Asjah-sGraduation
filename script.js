document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".item");
    const totalSlides = slides.length;
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    // Initialize the slideshow
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Function to display the current slide
    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[index].style.display = "block";
    }
});
