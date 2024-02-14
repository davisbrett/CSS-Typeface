document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var cursor = document.getElementById('custom-cursor');

    // Set initial position of the cursor to be outside of the viewport
    cursor.style.left = '-100px'; // Adjust as needed
    cursor.style.top = '-100px'; // Adjust as needed

    console.log('Button:', button); // Log the button element
    console.log('Cursor:', cursor); // Log the cursor element

    // Rest of your cursor logic remains unchanged
    button.addEventListener('mouseover', function () {
        console.log('Button mouseover event triggered');
        cursor.classList.add('red-cursor');
    });

    button.addEventListener('mouseout', function () {
        console.log('Button mouseout event triggered');
        cursor.classList.remove('red-cursor');
    });

    var clocks = document.querySelectorAll('.clock1, .clock2, .clock3, .clock4, .clock5, .clock6, .clock7, .clock8, .clock9, .clock10, .clock11, .clock12, .bigLetter');
    clocks.forEach(function (clock) {
        clock.addEventListener('mouseover', function () {
            console.log('Clock mouseover event triggered');
            cursor.classList.add('red-cursor');
        });

        clock.addEventListener('mouseout', function () {
            console.log('Clock mouseout event triggered');
            cursor.classList.remove('red-cursor');
        });
    });

    var playPauseClock = document.querySelector('.clock.r3.playpause');
    playPauseClock.addEventListener('mouseover', function () {
        console.log('Play/Pause clock mouseover event triggered');
        cursor.classList.add('red-cursor');
    });

    playPauseClock.addEventListener('mouseout', function () {
        console.log('Play/Pause clock mouseout event triggered');
        cursor.classList.remove('red-cursor');
    });

    // Update cursor position on mousemove event, accounting for scrolling
    document.addEventListener('mousemove', function (e) {
        console.log('Mousemove event triggered');
        var x = e.clientX + window.scrollX;
        var y = e.clientY + window.scrollY;
        cursor.style.left = (x - 15) + 'px';
        cursor.style.top = (y - 15) + 'px';
    });
});
