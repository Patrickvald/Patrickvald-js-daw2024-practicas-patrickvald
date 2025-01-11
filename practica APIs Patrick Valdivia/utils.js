//Timeout will be a function to return a promise with a timeout
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//I set the countdown and the diferent elements
let countdown = 5;
const countdownElement = document.querySelector('.countdown');
const notification = document.getElementById('notification');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');
const videoInfo = document.getElementById('video-info');

/* I try to emulate the efect of one useEffect in React, so I use one IIFE, 
which will be called only once when the page is loaded. This function will do a loop with one sec delay
to decrease the countdown and show the notification when the countdown is 0. */
(async function() {
    while (countdown > 0) {
        countdownElement.textContent = countdown;
        await timeout(1000);
        countdown--;
    }
    countdownElement.style.display = 'none';
    notification.style.display = 'block';
})();

notification.addEventListener('click', () => {
    notification.style.display = 'none';
    videoContainer.style.display = 'flex';
});

// Video Play/Pause Logic
video.addEventListener('click', (event) => {
    event.preventDefault(); //The preventDefault is needed to work properly
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Display Video Duration on Right Click, it´s just the video duration formated to show min and sec
video.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const duration = video.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    videoInfo.textContent = `Video Duration: ${minutes} minutes and ${seconds} seconds`;
});