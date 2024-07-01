document.addEventListener('DOMContentLoaded', function() {
    let cuteAudio = document.getElementById('cuteAudio');
    let cutePlayBtn = document.getElementById('cutePlayBtn');
    let cutePauseBtn = document.getElementById('cutePauseBtn');
    let cuteStopBtn = document.getElementById('cuteStopBtn');

    cutePlayBtn.addEventListener('click', function() {
        cuteAudio.play();
    });

    cutePauseBtn.addEventListener('click', function() {
        cuteAudio.pause();
    });

    cuteStopBtn.addEventListener('click', function() {
        cuteAudio.pause();
        cuteAudio.currentTime = 0;
    });
});
