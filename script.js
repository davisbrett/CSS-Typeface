document.addEventListener("DOMContentLoaded", function () {
    var letters = document.querySelectorAll(".bigLetter");
    var playpause = document.querySelector(".playpause");
    var isAnyLetterAnimating = false;

    function toggleAnimate(clickevent) {
        const target = clickevent.currentTarget;
        target.classList.toggle("animate");
    }

    letters.forEach(letter => {
        letter.addEventListener("click", toggleAnimate);
    });

    function checkAnyLetterAnimating() {
        isAnyLetterAnimating = Array.from(letters).some(letter => letter.classList.contains("animate"));
    }

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

    playpause.addEventListener("click", toggleAllBigLetters);
});
