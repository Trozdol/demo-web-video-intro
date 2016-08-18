
var introConfig = {
    posterPath  : 'images/no-signal.png',                   // path to preload image
    vidh264     : 'videos/phs-logo-mograph-web.mp4',               // path to video file.
    vidWebm     : null
};
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var introContainer;
var introVideo;

console.log('introConfig: ', introConfig)

if (isMobile.any()) {

    console.log('user is on mobile device so do something else here...');
    alert('No intro video for mobile browsers');

} else {

    console.log('not a mobile device so continue');

    addIntroVideo(function () {

        console.log('inside addIntroVideo callback');

        // now that dom contains the elements we can
        // ref them with variables
        //
        introContainer = document.getElementById('introContainer');
        introVideo     = document.getElementById('introVideo');

        // add a listener to video object for the
        // onended event then do stuff
        //
        introVideo.addEventListener('ended', onVideoEnd);
    })
}

function addStyleSheet () {
    console.log('add css to document head');
    document.head.innerHTML += '<link rel="stylesheet" href="intro.css">';
}

function addIntroVideo (callback) {

    if (introContainer) return console.log('Intro video DOM element exists so let\'s not create it again');

    var videoHtml;
    var poster  = introConfig.posterPath || '';
    var vidh264 = introConfig.vidh264    || false;
    var vidWebm = introConfig.vidWebm    || false;
    var h264Src = vidh264? '<source src="' + vidh264 + '" type="video/mp4">' : '';
    var webmSrc = vidWebm? '<source src="' + vidWebm + '" type="video/webm">' : '';

    if (!vidh264 && !vidWebm) return console.warn('At least one video config is needed');

    var videoHtml =
        '<div class="intro-container" id="introContainer">' +
            '<video class="intro-video" id="introVideo" poster="' + poster + '" playsinline autoplay muted>' +
                h264Src +
                webmSrc +
            '</video>' +
        '</div>';

    // add html to body
    document.body.innerHTML += videoHtml;
    addStyleSheet();
    // we call this so we know when to continue with things
    // dependent on the dom elements existing.
    callback();
}

function onVideoEnd() {

    console.log('inside onVideoEnd()');
    introVideo.classList.add("hide");

    while (introVideo.style.opacity >! 0) {
        console.log('set intro-container to display none');
        introContainer.style.display = 'none'
    }
}
