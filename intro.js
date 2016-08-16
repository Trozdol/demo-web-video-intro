var introContainer = document.getElementById('introContainer')
var introVideo     = document.getElementById('introVideo')

function onVideoEnd() {

    introVideo.classList.add("hide")

    while (introVideo.style.opacity >! 0) {
        introContainer.style.display = 'none'
    }
}

function formatTimeStamp(seconds) {

    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    return minutes + ":" + seconds;
}

introVideo.addEventListener('loadstart', function (e) {
    console.log(' - e: loadstart', e)
})

introVideo.addEventListener('timeupdate', function (e) {
    console.log(' - e: timeupdate', e)
    var time = introVideo.currentTime;
    document.getElementById('timeStamp').innerHTML = formatTimeStamp(time);
})

introVideo.addEventListener('ended', function(e) {
    console.log(' - e: ended', e)
    onVideoEnd()
});
