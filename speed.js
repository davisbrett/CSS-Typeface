document.addEventListener("DOMContentLoaded", function () {
    const changeSpeedButton = document.getElementById('changeSpeed');
    const speeds = [.25, .5, 1, 2, 4];
    let currentSpeedIndex = 2; // Default speed index (1x)

    // Function to change animation speed
    function changeSpeed(hourSpeed, minuteSpeed, speedText) {
        const hourHands = document.querySelectorAll('.animate .hand.hourHand');
        const minuteHands = document.querySelectorAll('.animate .hand.minuteHand');

        hourHands.forEach(hand => {
            const currentRotation = getCurrentRotation(hand);
            hand.style.transition = 'transform ' + (20 / hourSpeed) + 's linear';
            hand.style.transform = `translate(-50%, -100%) rotate(${currentRotation}deg)`;
            hand.style.animationDuration = hourSpeed + 's';
        });

        minuteHands.forEach(hand => {
            const currentRotation = getCurrentRotation(hand);
            hand.style.transition = 'transform ' + (4 / minuteSpeed) + 's linear';
            hand.style.transform = `translate(-50%, -100%) rotate(${currentRotation}deg)`;
            hand.style.animationDuration = minuteSpeed + 's';
        });

        changeSpeedButton.textContent = speedText;
    }

    // Function to get current rotation of a hand
    function getCurrentRotation(hand) {
        const transform = window.getComputedStyle(hand).getPropertyValue('transform');
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            const values = matrix[1].split(',');
            const a = values[0];
            const b = values[1];
            const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            return (angle < 0) ? angle + 360 : angle;
        }
        return 0;
    }

    // Event listener for change speed button
    changeSpeedButton.addEventListener('click', function () {
        // Increment current speed index
        currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
        // Get the speed corresponding to the current index
        const speed = speeds[currentSpeedIndex];

        // Determine animation speeds for hour and minute hands based on the selected speed
        let hourSpeed, minuteSpeed, speedText;
        switch (speed) {
            case .25:
                hourSpeed = 5; // 20 seconds for 1x speed
                minuteSpeed = 1; // 4 seconds for 1x speed
                speedText = '0.25x';
                break;
            case .5:
                hourSpeed = 10; // 20 seconds for 1x speed
                minuteSpeed = 2; // 4 seconds for 1x speed
                speedText = '0.5x';
                break;
            case 1:
                hourSpeed = 20; // 20 seconds for 1x speed
                minuteSpeed = 4; // 4 seconds for 1x speed
                speedText = '1x';
                break;
            case 2:
                hourSpeed = 40; // 20 seconds for 1x speed
                minuteSpeed = 8; // 4 seconds for 1x speed
                speedText = '2x';
                break;
            case 4:
                hourSpeed = 80; // 20 seconds for 1x speed
                minuteSpeed = 16; // 4 seconds for 1x speed
                speedText = '4x';
                break;
            default:
                hourSpeed = 20;
                minuteSpeed = 4;
                speedText = '1x';
        }

        // Change animation speed for hour and minute hands
        changeSpeed(hourSpeed, minuteSpeed, speedText);
    });

    // Initial animation speed set to 1x for both hour and minute hands
    changeSpeed(20, 4, '1x');
});
