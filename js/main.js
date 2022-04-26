let additionalSlider = {
    currentSlide: 1,
    maxSlide: 6,
    slidesCnt: 3,
    selector: "#AdditionalSlider"
}

let advantageSlider = {
    currentSlide: 1,
    maxSlide: 6,
    slidesCnt: 2,
    selector: "#AdvantageSlides"
}

$(document).ready(function() {
    if($(window).width() < 1500) {
        additionalSlider.slidesCnt = 2;
    }
    if($(window).width() < 1350) {
        advantageSlider.slidesCnt = 1;
    }
    if($(window).width() < 880) {
        additionalSlider.slidesCnt = 1;
    }

    $("#AdditionalNext").click(function() {
        switchSlider(additionalSlider, true);
    });

    $("#AdditionalPrev").click(function() {
        switchSlider(additionalSlider, false);
    });

    $("#AdvantageNext").click(function() {
        switchSlider(advantageSlider, true);
    });

    $("#AdvantagePrev").click(function() {
        switchSlider(advantageSlider, false);
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000 );
    });

    $("#NextIcon").click(function() {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 500);
    });
});

function switchSlider(slider, next) {
    console.log(slider);
    if(next) {
        slider.currentSlide++;
    } else {
        slider.currentSlide--;
    }

    if(slider.currentSlide < 1 || slider.currentSlide > (slider.maxSlide - slider.slidesCnt + 1)) {
        if(next) {
            slider.currentSlide = 1;
        } else {
            slider.currentSlide = slider.maxSlide - slider.slidesCnt + 1;
        }
    }

    let percent = $(slider.selector + " .slide").first().outerWidth(true) * (slider.currentSlide - 1);
    $(slider.selector).css("transform", "translateX(-" + percent + "px)");
}