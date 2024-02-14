document.addEventListener("DOMContentLoaded", function () {
    var playpause = document.querySelector(".playpause");

    // Function to toggle animation of all big letters
    function toggleAllBigLetters() {
        playpause.classList.toggle("paused");

        // Toggle the src attribute of the play/pause button
        var playpauseButton = playpause.querySelector(".playpause-button");
        if (playpause.classList.contains("paused")) {
            playpauseButton.src = "play.png"; // Change src to play icon when paused
        } else {
            playpauseButton.src = "pause.png"; // Change src to pause icon when playing
        }

        // Toggle animation of all big letters
        var animate = !playpause.classList.contains("paused");
        document.querySelectorAll(".bigLetter").forEach(letter => {
            if (animate) {
                letter.classList.add("animate");
            } else {
                letter.classList.remove("animate");
            }
        });
    }

    // Attach click event listener to the playpause element
    playpause.addEventListener("click", toggleAllBigLetters);
});
