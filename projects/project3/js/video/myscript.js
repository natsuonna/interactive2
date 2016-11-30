$(document).ready(function () {
          var audioElement = document.createElement('audio');
          audioElement.setAttribute('src', 'audio/dj_airhorn.mp3');
          audioElement.setAttribute('autoplay:false', 'autoplay');
          //audioElement.load code above. if you take out :false from the code the file will auto play than everythin works the same after that()
          $.get();
          audioElement.addEventListener("load", function () {
              audioElement.play();
          }, true);


          $(document).keypress(function (e) {
              if (e.which == 13) { //press enter the audio will play
                  audioElement.play();

              } else if (e.which == 32) { //press spacebar the audio will                             pause play
                  audioElement.pause();
              }
          });

// the code below wil allow you to click the play and stop button with the mouse
          $('.play-button').click(function () { 
              audioElement.play();
          });


          $('.pause').click(function () {
              audioElement.pause();
          });
      });

// the code below is for the video 

$(function() {

       $topIndex = 0; /*the highest z-index is 0*/

       $( ".ui-draggable" ).draggable().css({"position":"absolute","top":"0px" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });


        $(function(){
          $.okvideo({ source: 'https://www.youtube.com/watch?v=RmZrIT_183U', //'https://www.youtube.com/watch?v=OCowsu0mQto',
                    volume: 100})
        });
