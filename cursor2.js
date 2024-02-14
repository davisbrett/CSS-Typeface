document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var cursor = document.getElementById('custom-cursor2');

    button.addEventListener('mouseover', function () {
        cursor.classList.add('red-cursor');
    });

    button.addEventListener('mouseout', function () {
        cursor.classList.remove('red-cursor');
    });

    var clocks = document.querySelectorAll('.clock1, .clock2, .clock3, .clock4, .clock5, .clock6, .clock7, .clock8, .clock9, .clock10, .clock11, .clock12');
    clocks.forEach(function (clock) {
        clock.addEventListener('mouseover', function () {
            cursor.classList.add('red-cursor');
        });

        clock.addEventListener('mouseout', function () {
            cursor.classList.remove('red-cursor');
        });
    });

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = (x - 15) + 'px'; // Adjust the position to center the cursor
        cursor.style.top = (y - 15) + 'px'; // Adjust the position to center the cursor
    });
});
