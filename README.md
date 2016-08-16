Website Video Intro
-------------------

FYI: There are no third party frameworks needed for this to work.

This is the core of the demo. The rest is just to show how it can exist without
affecting the existing website content.

```html

        <div class="intro-container" id="introContainer">
            <video
                class="intro-video"
                id="introVideo"
                poster="images/no-signal.png"
                playsinline
                autoplay
                muted>

                <source src="phs-logo-mograph-web.mp4" type="video/mp4">
                <!-- <source src="http://...." type="video/webm"> -->
            </video>
            <span class="time-stamp" id="timeStamp">--:--</span>
        </div>

```

Here's the JavaScript that is what tells the code to hide the video when
`onended` event is fired by the video object.

```javascript
var introContainer = document.getElementById('introContainer')
var introVideo     = document.getElementById('introVideo')

function onVideoEnd() {
    introVideo.classList.add("hide")

    // this waits for the opacity to dip to zero before setting
    // to display none. this keeps the fadeout working nicely then
    // allows the user to interact with the DOM elements below the video.
    //
    while (introVideo.style.opacity >! 0) {
        introContainer.style.display = 'none'
    }
}

introVideo.addEventListener('ended', function(e) {
    console.log(' - e: ended', e)
    onVideoEnd()
});
```
