document.addEventListener("DOMContentLoaded", function () {
    var letters = document.querySelectorAll(".bigLetter");
    var playpause = document.querySelector(".playpause");
    var isAnyLetterAnimating = false;

    // Define the toggleAnimate function for individual letters
    function toggleAnimate(clickevent) {
        const target = clickevent.currentTarget;
        target.classList.toggle("animate");
    }

    // Attach the toggleAnimate function to individual letters
    letters.forEach(letter => {
        letter.addEventListener("click", toggleAnimate);
    });

    // Function to check if any big letter is currently animated
    function checkAnyLetterAnimating() {
        isAnyLetterAnimating = Array.from(letters).some(letter => letter.classList.contains("animate"));
    }

    // Function to toggle animation of all big letters
    function toggleAllBigLetters() {
        checkAnyLetterAnimating();

        if (isAnyLetterAnimating) {
            letters.forEach(letter => {
                letter.classList.remove("animate");
            });
        } else {
            letters.forEach(letter => {
                letter.classList.add("animate");
            });
        }
    }

    // Attach click event listener to the playpause element
    playpause.addEventListener("click", toggleAllBigLetters);
});
