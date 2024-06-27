$(function() {
    AOS.init();
  });
  
  $(window).on('load', function() {
    AOS.refresh();
  });
$(document).ready(function () {
   
    /* section zoom effect start */
    function isMobile() {
        return $(window).width() < 768;
    }

    if (isMobile()) {
        $('.scrollnextbtn .ox-bold').text('Swipe to continue');
    }
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

    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
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
    $('.faces-promoslider').slick({
        mobileFirst:true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
        // dots: true,
        prevArrow: $('.face-left'),
        nextArrow: $('.face-right'),
        responsive: [
      
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
    
    $('.lifeaterslider').slick({
        infinite: false,
        slidesToShow: 5.7,
        slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
        // dots: true,
        prevArrow: $('.lifeataster-left'),
        nextArrow: $('.lifeataster-right'),
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.asternewsslider').slick({
        infinite: false,
        slidesToShow: 4.7,
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
                    slidesToShow: 3.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 2000,
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
        arrows: true,
        prevArrow: $('.galleryslider-left'),
        nextArrow: $('.galleryslider-right'),
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.ptstoryslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $('.pst-left'),
        nextArrow: $('.pst-right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.aw-title').on('click', function () {
        var $desc = $(this).next('.aw-desc');
        var $icon = $(this).children('.toggle-icon');


        $('.aw-desc').not($desc).slideUp();
        $('.aw-title .toggle-icon').not($icon).removeClass('rotate-45');
        $desc.slideToggle();
        $icon.toggleClass('rotate-45');
    });
    $("#openPopup").click(function () {
        var videoUrl = $(this).data("video");
        var videoUrl = $(this).data("video");
        var videoElement = $("#popup video")[0];
        $("#videoSource").attr("src", videoUrl);
        videoElement.load(); // Reload the video element to apply the new source
        $("#popup").fadeIn();
        $("#overlay").fadeIn();
        videoElement.play(); 

    });

    $(".close, #overlay").click(function () {
        var videoElement = $("#popup video")[0];
        $("#popup").fadeOut();
        $("#overlay").fadeOut();
        videoElement.pause(); // Pause the video when the popup is closed
        $("#videoSource").attr("src", ""); // Clear the video source
    });

    $("#popup").click(function (event) {
        event.stopPropagation(); // Prevent closing popup when clicking inside it
    });
    $('.menupointer').on('click', function () {
        $('#offcanvasSidebar').toggleClass('open');
        $('#offcanvasOverlay').toggleClass('show');
    });

    $('#offcanvasOverlay, .offcanvasclose').on('click', function () {
        $('#offcanvasSidebar').removeClass('open');
        $('#offcanvasOverlay').toggleClass('show');
        $('.offcansubmenu').css('left', '500px');
        $(this).removeClass('show');
    });




    function setBackgroundImages() {
        var isMobile = window.matchMedia("(max-width: 767px)").matches;
        $('.ptslide').each(function () {
            var bgDesktop = $(this).attr('data-bgdesktop');
            var bgMobile = $(this).attr('data-bgmobie');
            var backgroundImage = isMobile ? bgMobile : bgDesktop;
            $(this).css('background-image', 'url(' + backgroundImage + ')');
        });
    }

    // Set background images on page load
    setBackgroundImages();

    // Set background images on window resize
    $(window).resize(function () {
        setBackgroundImages();
    });
    var isMobile = window.matchMedia("(max-width: 767px)").matches;

    $(".doctwidgetcontrol").click(function () {
        var isMobile = window.matchMedia("(max-width: 767px)").matches;
        var $doctwidcont = $(".doctwidcont");
        if(isMobile){
            if ($doctwidcont.css("right") === "-311px") {
                $doctwidcont.css("right", "0");
            } else {
                $doctwidcont.css("right", "-311px");
            }
        }
        else{
            if ($doctwidcont.css("right") === "-342px") {
                $doctwidcont.css("right", "0");
            } else {
                $doctwidcont.css("right", "-342px");
            }
        }
      
    });
    if(isMobile){
        $('.has-submenu').click(function(event){
            event.preventDefault(); // Prevent the default action of the link
            $(this).find('.offcansubmenu').css('left', '0px');
        });
        $('.menuexitarrow').click(function(event) {
            console.log("test")
            event.preventDefault(); // Prevent the default action of the link
            $('.offcansubmenu').css('left', '500px');
            // $(this).closest('.offcansubmenu').css('left', '500px');
        });

    }
   

    // gsap start

    gsap.registerPlugin(ScrollTrigger);

    const observerSections = gsap.utils.toArray(".observer-section");
    let allowScroll = true;
    const scrollTimeout = gsap.delayedCall(1, () => (allowScroll = true)).pause();
    let currentSection = 0;
    const sectionIndices = [0, 0];
    const sectionsPanels = [];
    const sectionsLimits = [];


    const gotoPanel = (index, isScrollingDown) => {
        const limit = sectionsLimits[currentSection];
        if (
            (index === limit && isScrollingDown) ||
            (index === -1 && !isScrollingDown)
        ) {
            intentObserver.disable(); // resume native scroll
            return;
        }
        console.log("currentSection",currentSection)
        console.log("index",index)
        if (currentSection === 0 && index === 4) { // Change these numbers to match your specific slide
            setTimeout(() => {
                $(".doctwidgetcontrol").click();
              }, 500); // 500ms delay


        }
  
        allowScroll = false;
        scrollTimeout.restart(true);
        const target = isScrollingDown
            ? sectionsPanels[currentSection][sectionIndices[currentSection]]
            : sectionsPanels[currentSection][index];

            
              
        gsap.to(target, {
            yPercent: isScrollingDown ? -100 : 0,
            duration: 0.75
        });
        sectionIndices[currentSection] = index;
   
    };

    const intentObserver = ScrollTrigger.observe({
        type: "wheel,touch",
        onUp: () =>
            allowScroll && gotoPanel(sectionIndices[currentSection] - 1, false),
        onDown: () =>
            allowScroll && gotoPanel(sectionIndices[currentSection] + 1, true),
        tolerance: 10,
        preventDefault: true,
        onEnable(self) {
            allowScroll = false;
            scrollTimeout.restart(true);
            // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
            let savedScroll = self.scrollY();
            self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
            document.addEventListener("scroll", self._restoreScroll, {
                passive: false
            });
        },
        onDisable: (self) =>
            document.removeEventListener("scroll", self._restoreScroll)
    });
    intentObserver.disable();

    observerSections.forEach((section, i) => {
        const panels = gsap.utils.toArray(".ptslide", section);
        sectionsPanels[i] = panels;
        sectionsLimits[i] = panels.length;

        gsap.set(panels, { zIndex: (j) => panels.length - j });

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=200",
            pin: true,
            onEnter: (self) => {
                if (intentObserver.isEnabled) {
                    return;
                } // in case the native scroll jumped past the end and then we force it back to where it should be.
                self.scroll(self.start + 1); // jump to just one pixel past the start of this section so we can hold there.
                intentObserver.enable(); // STOP native scrolling
                currentSection = i;
            },
            onEnterBack: (self) => {
                if (intentObserver.isEnabled) {
                    return;
                } // in case the native scroll jumped backward past the start and then we force it back to where it should be.
                self.scroll(self.end - 1); // jump to one pixel before the end of this section so we can hold there.
                intentObserver.enable(); // STOP native scrolling
                currentSection = i;
            },
            // id: "sec-" + (1 + i),
            // markers: {
            //   indent: 200 * i,
            //   startColor: "#eee",
            //   endColor: "#eee",
            // }
        });
    });

    // Add button event listeners
    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', () => {
        if (allowScroll) {
            gotoPanel(sectionIndices[currentSection] + 1, true);
        }
        });
    });
    
    document.querySelectorAll('.prev-button').forEach(button => {
        button.addEventListener('click', () => {
        if (allowScroll) {
            gotoPanel(sectionIndices[currentSection] - 1, false);
        }
        });
    });

    $('.ptstoryseltr').on('click', function() {
        $('.pt-otherspec').slideToggle();
    });


        $('.astercount').each(function() {
            var $counter = $(this);
            var $suffixElement = $counter.find('.suffix');
            var suffixHTML = $suffixElement.html(); // Get the suffix text, if any

            function updateCount(target) {
                var update = function() {
                    var current = parseInt($counter.text().replace(/,/g, ''));
                    var increment = Math.ceil(target / 200); // Adjust speed here
                    if (current < target) {
                        $counter.html(Math.ceil(current + increment).toLocaleString() + (suffixHTML ? ' ' + suffixHTML : ''));
                        requestAnimationFrame(update);
                    } else {
                        $counter.html(target.toLocaleString() + (suffixHTML ? ' ' + suffixHTML : ''));
                    }
                };
                update();
            }

            ScrollTrigger.create({
                trigger: $counter[0],
                start: "top 80%",
                onEnter: function() {
                    var targetCount = parseInt($counter.data('count').toString().replace(/,/g, ''));
                    updateCount(targetCount);
                },
                once: true
            });
        });
});

const cursor = document.querySelector('.cursor');

const setCursorLocation = e => {

  let cursorLocation = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`;
  cursor.setAttribute("style", cursorLocation);
}

document.addEventListener("mousemove", setCursorLocation);

const pre_services = document.querySelector('.galleryslidercontroldesktop .galleryslider-left');
const next_services = document.querySelector('.galleryslidercontroldesktop .galleryslider-right');


$('.galleryslidercontroldesktop .galleryslider-left').click(function () {
  if (pre_services.classList.contains('slick-disabled')) {
    cursor.classList.remove("pre-services");
  }
});

$('.galleryslidercontroldesktop .galleryslider-right').click(function () {
  if (next_services.classList.contains('slick-disabled')) {
    cursor.classList.remove("next_services");
  }
});

if( pre_services ){
    pre_services.addEventListener("mouseenter", function () {
      if (!pre_services.classList.contains('slick-disabled')) {
        cursor.classList.add("pre-services");
      }
      else {
        cursor.classList.remove("pre-services");
      }
    });
  }
  
  if( next_services ){
    next_services.addEventListener("mouseenter", function () {
      if (!next_services.classList.contains('slick-disabled')) {
        cursor.classList.add("next_services");
      }
      else {
        cursor.classList.remove("next_services");
      }
    });
  }
pre_services && pre_services.addEventListener("mouseleave", () => cursor.classList.remove("pre-services"));
next_services && next_services.addEventListener("mouseleave", () => cursor.classList.remove("next_services"));