/*///////////////////////////////////////////////////////////////////*/
/* Simple HTML5 Audio player                                         */
/* With button Play/Pause                                            */
/* To hide the player, just remove `controls` attribute or quote it  */
/*///////////////////////////////////////////////////////////////////*/

// forked from http://jsfiddle.net/5r02pf9u/
// some links:
// http://html5tutorial.info/html5-audio.php
// http://html5tutorial.info/html5-video.php
//
// some links:
// https://html.spec.whatwg.org/#audio
// http://www.w3.org/html/wg/drafts/html/master/semantics.html#audio

// http://www.position-absolute.com/articles/introduction-to-the-html5-audio-tag-javascript-manipulation/
// also interesting comments:
//Audio.prototype.stop = function () {
//    this.pause();
//    this.currentTime = 0;
//}
// 'play', 'pause', 'play at 35 secondes', 'Volume to 0', 'Volume open'
// http://www.position-relative.net/creation/audiotag/

// pure JS only
//var blasterTrigger = document.querySelector(".blasterTrigger");
//blasterTrigger.addEventListener("click", function () {
//    document.getElementById("blast").play();

// JQuery
// var blast = document.querySelector("#blast");

// Play/Pause Button (i deleted it, bottom info is irrelevant)
$('.blasterTrigger').click(function () {
    $("#blast").each(function () {
        // html5 audio player - jquery toggle click play/pause?
        // http://stackoverflow.com/a/2988130
        if (this.paused === false) {
            this.pause();
            $('.blasterTrigger').text('Play');
            //        alert('music paused');
        } else {
            this.play();
            $('.blasterTrigger').text('||');
            //        alert('music playing');
        }
    });

});

// Play/Stop button ...
// not sure how to use the following function:
Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
}

// ... Play/Stop button
$('.blasterTrigger2').click(function () {
    $("#blast").each(function () {
        // html5 audio player - jquery toggle click play/pause?
        // http://stackoverflow.com/a/2988130
        if (this.paused === false) {
            this.pause();
            //this.currentTime = 0;
            $('.blasterTrigger2').text('Play');
            //        alert('music paused');
        } else {
            this.play();
            $('.blasterTrigger2').text('Stop');
            //        alert('music playing');
        }
    });

});

/* // auto-play when page is loaded.
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("blast").play();
});
*/