document.addEventListener("DOMContentLoaded", function () {
    var letters = document.querySelectorAll(".bigLetter2");

    function toggleAnimate(clickevent) {
        const target = clickevent.currentTarget;
        target.classList.toggle("animate");
    }

    letters.forEach(letter => {
        toggleAnimate({ currentTarget: letter });
    });

    letters.forEach(letter => {
        letter.addEventListener("click", toggleAnimate);
    });
});
