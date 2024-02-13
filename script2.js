document.addEventListener("DOMContentLoaded", function () {
    var letters = document.querySelectorAll(".bigLetter2");

    // Define the toggleAnimate function
    function toggleAnimate(clickevent) {
        // Extract the target element from the event object
        const target = clickevent.currentTarget;
        // Toggle the "animate" class on the target element
        target.classList.toggle("animate");
    }

    // Trigger the toggleAnimate function for all letters to start with animation toggled
    letters.forEach(letter => {
        toggleAnimate({ currentTarget: letter }); // Manually trigger toggleAnimate
    });

    // Attach the toggleAnimate function as the event listener
    letters.forEach(letter => {
        letter.addEventListener("click", toggleAnimate);
    });
});
