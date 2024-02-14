document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var cursor = document.getElementById('custom-cursor');

    console.log('Button:', button); // Log the button element
    console.log('Cursor:', cursor); // Log the cursor element

    button.addEventListener('mouseover', function () {
        console.log('Button mouseover event triggered'); // Log when mouseover event occurs on the button
        cursor.classList.add('red-cursor');
    });

    button.addEventListener('mouseout', function () {
        console.log('Button mouseout event triggered'); // Log when mouseout event occurs on the button
        cursor.classList.remove('red-cursor');
    });

    var clocks = document.querySelectorAll('.clock1, .clock2, .clock3, .clock4, .clock5, .clock6, .clock7, .clock8, .clock9, .clock10, .clock11, .clock12');
    clocks.forEach(function (clock) {
        clock.addEventListener('mouseover', function () {
            console.log('Clock mouseover event triggered'); // Log when mouseover event occurs on a clock
            cursor.classList.add('red-cursor');
        });

        clock.addEventListener('mouseout', function () {
            console.log('Clock mouseout event triggered'); // Log when mouseout event occurs on a clock
            cursor.classList.remove('red-cursor');
        });
    });

    // Add event listener to the specific clock element
    var playPauseClock = document.querySelector('.clock.r3.playpause');
    playPauseClock.addEventListener('mouseover', function () {
        console.log('Play/Pause clock mouseover event triggered'); // Log when mouseover event occurs on the play/pause clock
        cursor.classList.add('red-cursor');
    });

    playPauseClock.addEventListener('mouseout', function () {
        console.log('Play/Pause clock mouseout event triggered'); // Log when mouseout event occurs on the play/pause clock
        cursor.classList.remove('red-cursor');
    });

    document.addEventListener('mousemove', function (e) {
        console.log('Mousemove event triggered'); // Log when mousemove event occurs
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = (x - 15) + 'px'; // Adjust the position to center the cursor
        cursor.style.top = (y - 15) + 'px'; // Adjust the position to center the cursor
    });
});
