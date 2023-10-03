/*slide */
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
    }

    showSlides();

    const nowButton = document.createElement("button");
    nowButton.className = "now";
    nowButton.innerHTML = "&#10094;";

    const nextButton = document.createElement("button");
    nextButton.className = "next";
    nextButton.innerHTML = "&#10095;";

    document.querySelector(".slidecontainer").appendChild(nowButton);
    document.querySelector(".slidecontainer").appendChild(nextButton);

    nowButton.addEventListener("click", () => {
        slides[slideIndex].style.display = "none";
        
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
    });

    nextButton.addEventListener("click", () => {
        slides[slideIndex].style.display = "none";
        
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlides();
    });

    const slideshowContainer = document.querySelector(".slidecontainer");
    slideshowContainer.addEventListener("mouseenter", () => {
        nowButton.style.opacity = 1;
        nextButton.style.opacity = 1;
    });

    slideshowContainer.addEventListener("mouseleave", () => {
        nowButton.style.opacity = 0;
        nextButton.style.opacity = 0;
    });
});

