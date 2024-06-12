$(document).ready(function() {

    /* section zoom effect start */

    var e = ["tr", "cr", "br", "bl", "cl", "tl"],
        t = [4, 3, 2, 2, 3, 4];

    $(".faces-promo").each(function () {
        var i = $(this),
            n = !1,
            a = function () {
                setTimeout(function () {
                    (n = !n), i.attr("data-hover", n);
                }, 50);
            },
            s = i.find(".faces-promo__img").each(function (e) {
                $(this).attr("data-id", e + 1);
            }),
            r = i.find(".faces-promo__imgs");

        // Non-responsive behaviour: set data-distance and data-alignment
        s.each(function (i) {
            var n = $(this);
            n.attr("data-distance", t[i]);
            n.attr("data-alignment", e[i]);
        });

        i.on("mouseenter", ".button", function () {
            r.css({ "transform-origin": "50% 50%" });
            i.attr("data-distance", 5);
        }).on("mouseleave", ".button", function () {
            i.attr("data-distance", 0);
        });

        r.on("mouseenter", ".faces-promo__img", function () {
            var t = $(this),
                s = e[t.attr("data-id") - 1],
                o = t.position();
            switch (s) {
                case "tr":
                    o.left = o.left + t.width();
                    break;
                case "cr":
                    n ? ((o.left = o.left * (2 / 3) + t.width() * (2 / 3)), (o.top = o.top * (2 / 3) + (t.height() * (2 / 3)) / 2)) : ((o.left = o.left + t.width()), (o.top = o.top + t.height() / 2));
                    break;
                case "br":
                    o.left = o.left + t.width();
                    o.top = o.top + t.height();
                    break;
                case "bl":
                    o.top = o.top + t.height();
                    break;
                case "cl":
                    o.top = n ? o.top * (2 / 3) + (t.height() * (2 / 3)) / 2 : o.top + t.height() / 2;
            }
            r.css({ "transform-origin": `${o.left}px ${o.top}px` });
            i.attr("data-distance", t.attr("data-distance"));
            i.attr("data-active", t.attr("data-id"));
            a();
        }).on("mouseleave", ".faces-promo__img", function () {
            i.attr("data-distance", 1);
            i.attr("data-active", 0);
            a();
        });
    });
    /* section zoom effect end */

        const $slider = $('.herosliderslick');
        const $sliderCount = $('.slidercount');

        $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            const i = (currentSlide ? currentSlide : 0) + 1;
            $sliderCount.text(i + '/' + slick.slideCount);
        });

        $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.hero-left'),
            nextArrow: $('.hero-right')
        });

        $('.ourbrandslider').slick({
            infinite: false,
            slidesToShow: 5.8,
            slidesToScroll: 2,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: true,
            // dots: true,
            prevArrow: $('.brand-left'),
            nextArrow: $('.brand-right'),
            responsive: [
                {
                    breakpoint: 2500,
                    settings: {
                        slidesToShow: 4.8,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3.8,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        $('.lifeaterslider').slick({
            infinite: false,
            slidesToShow: 5.7,
            slidesToScroll: 2,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: false,
            // dots: true,
            // prevArrow: $('.brand-left'),
            // nextArrow: $('.brand-right'),
            responsive: [
                {
                    breakpoint: 2500,
                    settings: {
                        slidesToShow: 3.7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 2.7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        $('.asternewsslider').slick({
            infinite: false,
            slidesToShow: 5.7,
            slidesToScroll: 2,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: true,
            // dots: true,
            prevArrow: $('.an-left'),
            nextArrow: $('.an-right'),
            responsive: [
                {
                    breakpoint: 2500,
                    settings: {
                        slidesToShow: 4.7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 2.7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        
        $('.galleryslider').slick({
            infinite: true,
            slidesToShow: 4.3,
            slidesToScroll: 2,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: false,
            // prevArrow: $('.brand-left'),
            // nextArrow: $('.brand-right'),
            responsive: [
                {
                    breakpoint: 2500,
                    settings: {
                        slidesToShow: 3.3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 2.3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        $('.aw-title').on('click', function() {
            var $desc = $(this).next('.aw-desc');
            var $icon = $(this).children('.toggle-icon');
            
            console.log($icon); // Debugging: Check if the icon is selected

            $('.aw-desc').not($desc).slideUp();
            $('.aw-title svg.toggle-icon').not($icon).removeClass('rotate-45');
            $desc.slideToggle();
            $icon.toggleClass('rotate-45');
        });
        $("#openPopup").click(function() {
            $("#popup").fadeIn();
            $("#overlay").fadeIn();
          });
        
          $(".close, #overlay").click(function() {
            $("#popup").fadeOut();
            $("#overlay").fadeOut();
          });
        
          $("#popup").click(function(event) {
            event.stopPropagation(); // Prevent closing popup when clicking inside it
          });
        
});
