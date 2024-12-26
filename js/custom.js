(function() {
    'use strict';

    var tinyslider = function() {
        var el = document.querySelectorAll('.testimonial-slider');

        if (el.length > 0) {
            var slider = tns({
                container: '.testimonial-slider',
                items: 1,
                axis: "horizontal",
                controlsContainer: "#testimonial-nav",
                swipeAngle: false,
                speed: 700,
                nav: true,
                controls: true,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 3500,
                autoplayButtonOutput: false
            });
        }
    };

    tinyslider();
    document.querySelectorAll(".drum").forEach(function (element) {
        element.addEventListener("click", function () {
            var buttonInnerHTML = this.innerHTML;
            makeDrum(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        });
    });
    
    addEventListener("keypress", function(event) {
        makeDrum(event.key);
        buttonAnimation(event.key);
    });
    
    function makeDrum(key) {
        switch (key) {
            
            case 'a':
                var audio = new Audio("sounds/drum/tom-2.mp3");
                audio.play();
                break;
            case 's':
                var audio = new Audio("sounds/drum/tom-3.mp3");
                audio.play();
                break;
            case 'd':
                var audio = new Audio("sounds/drum/tom-4.mp3");
                audio.play();
                break;
            case 'j':
                var audio = new Audio("sounds/drum/snare.mp3");
                audio.play();
                break;
            
                case 'f':
                    var audio = new Audio("sounds/drum/tom-1.mp3");
                    audio.play();
                    break; 
            case 'k':
                var audio = new Audio("sounds/drum/crash.mp3");
                audio.play();
                break;
            case 'l':
                var audio = new Audio("sounds/drum/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    }
    tinyslider();

    document.querySelectorAll(".piano-key").forEach(function (element) {
        element.addEventListener("click", function () {
            var buttonInnerHTML = this.innerHTML;
            makePiano(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        });
    });
    
    addEventListener("keypress", function(event) {
        makePiano(event.key);
        buttonAnimation(event.key);
    });
    
    function makePiano(key) {
        switch (key) {
            case 'q':
                var audio = new Audio("sounds/piano/A.Wav");
                audio.play();
                break;
            case 'w':
                var audio = new Audio("sounds/piano/B.Wav");
                audio.play();
                break;
            case 'e':
                var audio = new Audio("sounds/piano/Bb.Wav");
                audio.play();
                break;
            case 'r':
               
            case 't':
                var audio = new Audio("sounds/piano/C_s1.Wav");
                audio.play();
                break;
            case 'y':
                var audio = new Audio("sounds/piano/C1.Wav");
                audio.play();
                break;
            case 'u':
                var audio = new Audio("sounds/piano/D_s.Wav");
                audio.play();
                break;
            case 'i':
                var audio = new Audio("sounds/piano/D_s1.Wav");
                audio.play();
                break;
            case 'o':
                var audio = new Audio("sounds/piano/D.Wav");
                audio.play();
                break;
            case 'p':
                var audio = new Audio("sounds/piano/D1.Wav");
                audio.play();
                break;
            case 'z':
                var audio = new Audio("sounds/piano/E.Wav");
                audio.play();
                break;
            case 'x':
                var audio = new Audio("sounds/piano/E1.Wav");
                audio.play();
                break;
            case 'c':
                var audio = new Audio("sounds/piano/F_s.Wav");
                audio.play();
                break;
            case 'v':
                var audio = new Audio("sounds/piano/F.Wav");
                audio.play();
                break;
            case 'b':
                var audio = new Audio("sounds/piano/F1.Wav");
                audio.play();
                break;
            case 'n':
                var audio = new Audio("sounds/piano/G_s.Wav");
                audio.play();
                break;
            case 'm':
                var audio = new Audio("sounds/piano/G.Wav");
                audio.play();
                break;
            
            default:
                break;
        }
    }
    
})();
