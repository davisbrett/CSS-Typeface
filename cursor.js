document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var cursor = document.getElementById('custom-cursor');

    cursor.style.left = '-50px';
    cursor.style.top = '-50px';

    console.log('Button:', button);
    console.log('Cursor:', cursor);

    button.addEventListener('mouseover', function () {
        console.log('Button mouseover event triggered');
        cursor.classList.add('red-cursor');
    });

    button.addEventListener('mouseout', function () {
        console.log('Button mouseout event triggered');
        cursor.classList.remove('red-cursor');
    });

    var clocks = document.querySelectorAll('.clock1, .clock2, .clock3, .clock4, .clock5, .clock6, .clock7, .clock8, .clock9, .clock10, .clock11, .clock12');
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

    document.addEventListener('mousemove', function (e) {
        console.log('Mousemove event triggered');
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = (x - 15) + 'px';
        cursor.style.top = (y - 15) + 'px';
    });
});
