

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


let block = document.querySelector('.img-inner1212');
let endPos = 21000;
let step = -900;
window.addEventListener('scroll', () => {
    if (Math.floor(window.pageYOffset / 40) * step <= endPos) {
        block.style.backgroundPositionX = Math.floor(window.pageYOffset / 40) * step + 'px';
    }
    if ($(window).scrollTop() > 1455) {
        $('.img-inner1212').css('background-position-x', '-32400px');

    }
});







let ste = 950;
let stepp = -950;
let ssss = $(window).scrollTop;
let blockk = document.querySelector('.img-inner2121');
let endPoss = 21000;
window.addEventListener('scroll', () => {
    if ($(window).scrollTop() > 4605) {
        if (Math.floor(window.pageYOffset / 40) * stepp <= endPoss) {
            blockk.style.backgroundPositionX = Math.floor(window.pageYOffset / 40) * stepp + 109250 + 'px';
        }
    }
     if ($(window).scrollTop() > 6005) {
        $('.img-inner2121').css('background-position-x', '-33250px');

    }
    if ($(window).scrollTop() > 6505) {
        if (Math.floor(window.pageYOffset / 40) * stepp <= endPoss) {
            blockk.style.backgroundPositionX = Math.floor(window.pageYOffset / 40) * ste + -187150 + 'px';
        }
    }
    if ($(window).scrollTop() > 7805) {
        $('.img-inner2121').css('background-position-x', '0px');

    }
});




$(window).scroll(function () {
    if ($(window).scrollTop() > 535) {
        $('.absolute-button').addClass('scroll6');
    } else {
        $('.absolute-button').removeClass('scroll6')
    }
    if ($(window).scrollTop() > 535) {
        $('.spananim1').addClass('scroll2');
    } else {
        $('.spananim1').removeClass('scroll2')
    }
    if ($(window).scrollTop() > 535) {
        $('.imganim1').addClass('scroll3');
    } else {
        $('.imganim1').removeClass('scroll3')
    }
    if ($(window).scrollTop() > 905) {
        $('.imganim1').addClass('scroll4');
    } else {
        $('.imganim1').removeClass('scroll4')
    }

    if ($(window).scrollTop() > 905) {
        $('.anim-2').addClass('scroll25');
    } else {
        $('.anim-2').removeClass('scroll25')
    }
    if ($(window).scrollTop() > 905) {
        $('.img-wrap12121').addClass('scroll7');
    } else {
        $('.img-wrap12121').removeClass('scroll7')
    }
    if ($(window).scrollTop() > 1505) {
        $('.container-1').addClass('scroll2');
    } else {
        $('.container-1').removeClass('scroll2')
    }
    if ($(window).scrollTop() > 1705) {
        $('.container-2').addClass('scroll8');
    } else {
        $('.container-2').removeClass('scroll8')
    }
    if ($(window).scrollTop() > 2205) {
        $('.container-2').addClass('scroll9');
    } else {
        $('.container-2').removeClass('scroll9')
    }
    if ($(window).scrollTop() > 2605) {
        $(".container11111").css("background-color", "#fff");
    } else {
        $(".container11111").css("background-color", "#0F1326");
    }
    if ($(window).scrollTop() > 3005) {
        $('.container-3').addClass('scroll5');
    } else {
        $('.container-3').removeClass('scroll5');
    }
    if ($(window).scrollTop() > 3005) {
        $('.container-3__img').addClass('scroll10');
    } else {
        $('.container-3__img').removeClass('scroll10');
    }
    if ($(window).scrollTop() > 3405) {
        $(".container").addClass('scroll11');
    } else {
        $(".container").removeClass('scroll11');
    }
    if ($(window).scrollTop() > 3405) {
        $('.container-3__img').addClass('scroll5');
    } else {
        $('.container-3__img').removeClass('scroll5');
    }
    if ($(window).scrollTop() > 3405) {
        $('.container3__inner1').addClass('scroll2');
    } else {
        $('.container3__inner1').removeClass('scroll2');
    }
    if ($(window).scrollTop() > 3305) {
        $('.container2__inner2').addClass('scroll2');
    } else {
        $('.container2__inner2').removeClass('scroll2');
    }
    if ($(window).scrollTop() > 3405) {
        $('.container-3__img').addClass('scroll12');
    } else {
        $('.container-3__img').removeClass('scroll12');
    }

    if ($(window).scrollTop() > 3405) {
        $('.container3__sp').addClass('scroll13');
    } else {
        $('.container3__sp').removeClass('scroll13');
    }
    if ($(window).scrollTop() > 3905) {
        $('.container3__sp').removeClass('scroll13');
    }
    if ($(window).scrollTop() > 3905) {
        $('#ddd').addClass('scroll13');
    } else {
        $('#ddd').removeClass('scroll13');
    }
    if ($(window).scrollTop() > 3905) {
        $('.container-3__img').addClass('scroll14');
    } else {
        $('.container-3__img').removeClass('scroll14');
    }
    if ($(window).scrollTop() > 3905) {
        $('.container3__sp').addClass('scroll15');
    } else {
        $('.container3__sp').removeClass('scroll15');
    }
    if ($(window).scrollTop() > 4205) {
        $(".container").addClass('scroll16');
    } else {
        $(".container").removeClass('scroll16');
    }
    if ($(window).scrollTop() > 4205) {
        $('.container-3').removeClass('scroll5');
    }
    if ($(window).scrollTop() > 4205) {
        $(".container11111").addClass('scroll16');
    } else {
        $(".container11111").removeClass('scroll16');
    }
    if ($(window).scrollTop() > 4205) {
        $(".container-4").addClass('scroll8');
    } else {
        $(".container-4").removeClass('scroll8');
    }
    if ($(window).scrollTop() > 4805) {
        $(".container4__inner1").addClass('scroll2');
    } else {
        $(".container4__inner1").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 4805) {
        $(".container-5").addClass('scroll5');
    } else {
        $(".container-5").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 5905) {
        $("#pop434").addClass('scroll2');
    } else {
        $("#pop434").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 5905) {
        $("#ddd2").addClass('scroll5');
    } else {
        $("#ddd2").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 4805) {
        $(".img-wrap2121").addClass('scroll17');
    } else {
        $(".img-wrap2121").removeClass('scroll17');
    }
    if ($(window).scrollTop() > 4805) {
        $(".img-group-11").addClass('scroll18');
    }else {
        $(".img-group-11").removeClass('scroll18');
    }
    if ($(window).scrollTop() > 5005) {
        $(".img-group-11").removeClass('scroll18');
    }

    if ($(window).scrollTop() > 5905) {
        $(".img-group-12").addClass('scroll19');
    }else {
        $(".img-group-12").removeClass('scroll19');
    }
    if ($(window).scrollTop() > 8305) {
        $(".container5__inner1").addClass('scroll2');
    }else {
        $(".container5__inner1").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 8305) {
        $(".container-6").addClass('scroll25');
    }else {
        $(".container-6").removeClass('scroll25');
    }
    if ($(window).scrollTop() > 6705) {
        $(".img-group-12").addClass('scroll2');
    }else {
        $(".img-group-12").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 6705) {
        $("#sddd2").addClass('scroll2');
    }else {
        $("#sddd2").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 6705) {
        $(".img-wrap2121").addClass('scroll20');
    } else {
        $(".img-wrap2121").removeClass('scroll20');
    }
    if ($(window).scrollTop() > 6705) {
        $("#ddd3").addClass('scroll5');
    } else {
        $("#ddd3").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 7105) {
        $("#dddd3").addClass('scroll2');
    } else {
        $("#dddd3").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 7105) {
        $("#ddd4").addClass('scroll5');
    } else {
        $("#ddd4").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 7105) {
        $(".photo-group-6").addClass('scroll5');
    } else {
        $(".photo-group-6").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 7505) {
        $(".photo-group-wrapper").addClass('scroll2');
    } else {
        $(".photo-group-wrapper").removeClass('scroll2');
    }
     if ($(window).scrollTop() > 7505) {
        $("#dddd4").addClass('scroll2');
    } else {
        $("#dddd4").removeClass('scroll2');
    }
    if ($(window).scrollTop() > 7505) {
        $("#ddd5").addClass('scroll5');
    } else {
        $("#ddd5").removeClass('scroll5');
    }
     if ($(window).scrollTop() > 7505) {
        $(".img-group-13").addClass('scroll5');
    }else {
        $(".img-group-13").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 7505) {
        $(".photo-group-1212").addClass('scroll5');
    }else {
        $(".photo-group-1212").removeClass('scroll5');
    }
    if ($(window).scrollTop() > 8805) {
        $(".container-7").addClass('scroll25');
    }else {
        $(".container-7").removeClass('scroll25');
    }


});



