Website Video Intro
-------------------

FYI: There are no third party frameworks needed for this to work.

It's been changed up a good deal. Now the only thing you need to do is configure the `introConfig` values in the `intro.js` file.

```javascript

var introConfig = {
    posterPath  : 'images/no-signal.png',        
    vidh264     : 'videos/phs-logo-mograph-web.mp4',
    vidWebm     : null
};

```
And add the line below near the bottom of your index.html file.

```html
<script src="path/to/intro.js" charset="utf-8"></script>
```

Once you do that with the correct paths the script will automatically reference the add a reference to the css file.
