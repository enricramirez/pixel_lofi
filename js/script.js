"use strict";

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(function () {
    $("html").mousemove(function (e) {
        if (isTouchDevice() === true) {
            $(".cursor").show().css({
                "display": "none"
            });
        } else {
            $(".cursor").show().css({
                "left": e.clientX,
                "top": e.clientY,
                "opacity": 1,
                "display": "block"
            });
        }
    }).mouseout(function (e) {
        if (isTouchDevice() === true) {
            $(".cursor").show().css({
                "display": "none"
            });
        } else {
            $(".cursor").show().css({
                "left": e.clientX,
                "top": e.clientY,
                "opacity": 1,
                "display": "block"
            });
        }
    });
});

$(".menu__item").on("click", sona);

function sona(event) {
    let posicio = this.dataset.posicio;

    this.classList.toggle("sonant");
    this.classList.toggle("mostra");
    let audio = document.getElementById("audio" + posicio);
    if (this.classList.contains("sonant")) {
        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            audio.play();
        }, false)
        audio.play();
    } else {
        if (document.getElementById("tempo").classList.contains("tempo")) {
            $(this).css('color', "var(--color-menu-hover)");
            audio.addEventListener('ended', function () {
                audio.currentTime = 0;
                audio.pause();
                $(".menu__item").css('color', "transparent");
                TweenMax.to(img_position = document.getElementById("img" + posicio), .5, {
                    opacity: "0"
                })
                $("#img" + posicio).removeClass("grayscale");
            }, false);
        } else {
            document.getElementById("audio" + posicio).pause();
            document.getElementById("audio" + posicio).currentTime = 0;
        }
    }

    let img_position = document.getElementById("img" + posicio);
    img_position.play();
    if (this.classList.contains("mostra")) {
        TweenMax.to(img_position, .5, {
            opacity: "1"
        })
    } else {
        if (document.getElementById("tempo").classList.contains("tempo")) {
            $(img_position).addClass("grayscale");
        } else {
            TweenMax.to(img_position, .5, {
                opacity: "0"
            })
        }
    }
}


$('#color1').click(function () {
    $(':root').css('--color-bg', "#6500FF");
    $(':root').css('--color-menu', "#00EBB5");
    $(':root').css('--color-menu-hover', "#FFDC00");
    $('#color1').css('display', "none");
    $('#color2').css('display', "block");
    $('#color3').css('display', "block");
    $('#color4').css('display', "block");
    $(".cursor").attr("src", "img/cursor-1.png");
    $("#arrow").attr("src", "img/arrow-1.svg");
});

$('#color2').click(function () {
    $(':root').css('--color-bg', "#D900FF");
    $(':root').css('--color-menu', "#FFDA10");
    $(':root').css('--color-menu-hover', "#00EBB5");
    $('#color1').css('display', "block");
    $('#color2').css('display', "none");
    $('#color3').css('display', "block");
    $('#color4').css('display', "block");
    $(".cursor").attr("src", "img/cursor-2.png");
    $("#arrow").attr("src", "img/arrow-2.svg");
});

$('#color3').click(function () {
    $(':root').css('--color-bg', "#FA6B8C");
    $(':root').css('--color-menu', "#00E5FF");
    $(':root').css('--color-menu-hover', "#E6003C");
    $('#color1').css('display', "block");
    $('#color2').css('display', "block");
    $('#color3').css('display', "none");
    $('#color4').css('display', "block");
    $(".cursor").attr("src", "img/cursor-3.png");
    $("#arrow").attr("src", "img/arrow-3.svg");
});

$('#color4').click(function () {
    $(':root').css('--color-bg', "#00EBB5");
    $(':root').css('--color-menu', "#6500FF");
    $(':root').css('--color-menu-hover', "#FBBC00");
    $('#color1').css('display', "block");
    $('#color2').css('display', "block");
    $('#color3').css('display', "block");
    $('#color4').css('display', "none");
    $(".cursor").attr("src", "img/cursor-4.png");
    $("#arrow").attr("src", "img/arrow-4.svg");
});

$('#start').click(function () {
    TweenMax.to("body, html", .5, {
        overflow: "auto"
    })
    TweenMax.to(".transition1", .5, {
        height: "100%"
    })
    TweenMax.to(".transition2", .5, {
        height: "100%",
        delay: .2
    })
    TweenMax.to(".menu", .5, {
        y: 0,
        delay: .5
    })
    TweenMax.to("#arrow", .5, {
        x: "0",
        delay: .5
    })
    TweenMax.to("#tempo", .5, {
        x: "0",
        delay: .25
    })
    TweenMax.to(".videos-fixed", 0.5, {
        opacity: "1",
        delay: 1.2
    })
    TweenMax.to(".load", 1.2, {
        display: "none"
    })
});

$('#arrow').click(function () {
    TweenMax.to("body, html", .5, {
        overflow: "hidden"
    })
    TweenMax.to(".transition1", .5, {
        height: "0",
        delay: .4
    })
    TweenMax.to(".transition2", .5, {
        height: "0",
        delay: .2
    })
    TweenMax.to(".menu", .5, {
        y: "100vh"
    })
    TweenMax.to(".videos-fixed", .5, {
        opacity: "0"
    })
    TweenMax.to("#arrow", 1, {
        x: "-100vh"
    })
    TweenMax.to("#tempo", 1, {
        x: "100vh"
    })
    TweenMax.to(".load", 1.2, {
        display: "block"
    })
});

$('#tempo').click(function () {
    this.classList.toggle("tempo");
});
