document.addEventListener('DOMContentLoaded', function () {
    var animationBar = document.getElementById('animation-bar');
    var clicks = 0;
    var animationRunning = false;

    function handleClick() {
        clicks++;
        if (!animationRunning) {
            // Start animation on the first click
            animationBar.style.animationPlayState = 'running';
            animationRunning = true;
        } else {
            // Reset animation on the second click
            animationBar.style.animation = 'none';
            setTimeout(() => {
                animationBar.style.animation = 'progress 20s linear forwards';
                animationRunning = false;
            }, 50); // Delay for resetting the animation
        }
    }

    // Add click event listener to the animation container
    document.getElementById('animation-container').addEventListener('click', handleClick);
});
