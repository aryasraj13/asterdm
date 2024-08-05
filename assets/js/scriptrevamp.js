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

    $('.leadershipcontrol').on('click', function() {
        var card = $(this).closest('.each-leadershipcard');
        var desc = card.data('desc');
        var title = card.find('h5').text();
        var subtitle = card.find('h6').text();

        $('#sidebar-popup-title').text(title);
        $('#sidebar-popup-subtitle').text(subtitle);
        $('#sidebar-popup-desc').html(desc);

        $('#sidebar-popup').addClass('show');
        $('body').addClass('no-scroll');
        $('#sidebar-popup-overlay').show();
    });

    $('#sidebar-popup-close, #sidebar-popup-overlay').on('click', function() {
        $('#sidebar-popup').removeClass('show');
        $('body').removeClass('no-scroll');
        $('#sidebar-popup-overlay').hide();
    });

    // Close the popup if clicking outside of the content area
    $(document).on('click', function(event) {
        if ($(event.target).closest('#sidebar-popup').length === 0 && $(event.target).closest('.leadershipcontrol').length === 0) {
            $('#sidebar-popup').removeClass('show');
            $('body').removeClass('no-scroll');
            $('#sidebar-popup-overlay').hide();
        }
    });

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
    $(".scrollicon").click(function() {
        $('html, body').animate({
           scrollTop: $(".astercounts").offset().top
        }, 1000); 
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
    $('.tabcountry').slick({
        mobileFirst:true,
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        // dots: true,
        // prevArrow: $('.face-left'),
        // nextArrow: $('.face-right'),
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
        if (isMobile) {
        $('.offcansubmenu').css('left', '500px');
        }
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
        $('.eachcountry').on('click', function() {
            var mainTabId = $(this).attr('data-maintabid');
            
            $('.eachcenterlistbycountry').hide();
            
            var $targetMainTab = $('.eachcenterlistbycountry[targetmaintab="' + mainTabId + '"]');
            $targetMainTab.show();
            
            $('.eachcountry').removeClass('active');
            $(this).addClass('active');
    
            $targetMainTab.find('.eachcenterlist').first().trigger('click');
        });
        
        $('.eachcenterlist').on('click', function() {
            
            var subTabId = $(this).attr('data-subtabid');
           
            $('.eachcenterlist-details').hide();
         
            $('.eachcenterlist-details[targetsubtab="' + subTabId + '"]').show();
           
            $('.eachcenterlist').removeClass('active');
            $(this).addClass('active');
        });
        
       
        $('.eachcountry').first().trigger('click');

        
        var searchInput = $('.gcc-locsearch input[type="text"]'); 

        searchInput.on('keyup', function() {
            var searchTerm = $(this).val().toLowerCase(); 
            var locAddressList = $(this).closest('.gcc-locsearch').next('.loc-addresslist'); 
            var locations = locAddressList.find('.eachloc-address'); 
    
            locations.hide(); 
    
            locations.each(function() {
                var locationText = $(this).find('.cliniclocation').text().toLowerCase(); 
                if (locationText.indexOf(searchTerm) !== -1) {
                    $(this).show(); 
                }
            });
        });
          


});

const cursor = document.querySelector('.cursor');

const setCursorLocation = e => {

  let cursorLocation = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`;
  cursor.setAttribute("style", cursorLocation);
}

document.addEventListener("mousemove", setCursorLocation);


// gallery Slider Start

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

// gallery Slider End

// Brand Slider Start

const pre_brand = document.querySelector('.brandslidercontroldesktop .brand-left');
const next_brand = document.querySelector('.brandslidercontroldesktop .brand-right');


$('.brandslidercontroldesktop .brand-left').click(function () {
  if (pre_brand.classList.contains('slick-disabled')) {
    cursor.classList.remove("pre-services");
  }
});

$('.brandslidercontroldesktop .brand-right').click(function () {
  if (next_brand.classList.contains('slick-disabled')) {
    cursor.classList.remove("next_services");
  }
});

if( pre_brand ){
    pre_brand.addEventListener("mouseenter", function () {
      if (!pre_brand.classList.contains('slick-disabled')) {
        cursor.classList.add("pre-services");
      }
      else {
        cursor.classList.remove("pre-services");
      }
    });
  }
  
  if( next_brand ){
    next_brand.addEventListener("mouseenter", function () {
      if (!next_brand.classList.contains('slick-disabled')) {
        cursor.classList.add("next_services");
      }
      else {
        cursor.classList.remove("next_services");
      }
    });
  }
pre_brand && pre_brand.addEventListener("mouseleave", () => cursor.classList.remove("pre-services"));
next_brand && next_brand.addEventListener("mouseleave", () => cursor.classList.remove("next_services"));

// Brand Slider End



// lifeataster Slider Start

const pre_lifeataster = document.querySelector('.lifeaterslidercontroldesktop .lifeataster-left');
const next_lifeataster = document.querySelector('.lifeaterslidercontroldesktop .lifeataster-right');


$('.lifeaterslidercontroldesktop .lifeataster-left').click(function () {
  if (pre_lifeataster.classList.contains('slick-disabled')) {
    cursor.classList.remove("pre-services");
  }
});

$('.lifeaterslidercontroldesktop .lifeataster-right').click(function () {
  if (next_lifeataster.classList.contains('slick-disabled')) {
    cursor.classList.remove("next_services");
  }
});

if( pre_lifeataster ){
    pre_lifeataster.addEventListener("mouseenter", function () {
      if (!pre_lifeataster.classList.contains('slick-disabled')) {
        cursor.classList.add("pre-services");
      }
      else {
        cursor.classList.remove("pre-services");
      }
    });
  }
  
  if( next_lifeataster ){
    next_lifeataster.addEventListener("mouseenter", function () {
      if (!next_lifeataster.classList.contains('slick-disabled')) {
        cursor.classList.add("next_services");
      }
      else {
        cursor.classList.remove("next_services");
      }
    });
  }
  pre_lifeataster && pre_lifeataster.addEventListener("mouseleave", () => cursor.classList.remove("pre-services"));
next_lifeataster && next_lifeataster.addEventListener("mouseleave", () => cursor.classList.remove("next_services"));

// lifeataster Slider End


// Aster News Slider Start

const pre_asternews = document.querySelector('.asternewscontroldesktop .an-left');
const next_asternews = document.querySelector('.asternewscontroldesktop .an-right');


$('.asternewscontroldesktop .an-left').click(function () {
  if (pre_asternews.classList.contains('slick-disabled')) {
    cursor.classList.remove("pre-services");
  }
});

$('.asternewscontroldesktop .an-right').click(function () {
  if (next_asternews.classList.contains('slick-disabled')) {
    cursor.classList.remove("next_services");
  }
});

if( pre_asternews ){
    pre_asternews.addEventListener("mouseenter", function () {
      if (!pre_asternews.classList.contains('slick-disabled')) {
        cursor.classList.add("pre-services");
      }
      else {
        cursor.classList.remove("pre-services");
      }
    });
  }
  
  if( next_asternews ){
    next_asternews.addEventListener("mouseenter", function () {
      if (!next_asternews.classList.contains('slick-disabled')) {
        cursor.classList.add("next_services");
      }
      else {
        cursor.classList.remove("next_services");
      }
    });
  }
  pre_asternews && pre_asternews.addEventListener("mouseleave", () => cursor.classList.remove("pre-services"));
  next_asternews && next_asternews.addEventListener("mouseleave", () => cursor.classList.remove("next_services"));

// Aster News Slider End

const countries = [
    { code: "+93", name: "Afghanistan" },
    { code: "+355", name: "Albania" },
    { code: "+213", name: "Algeria" },
    { code: "+1684", name: "American Samoa" },
    { code: "+376", name: "Andorra" },
    { code: "+244", name: "Angola" },
    { code: "+1264", name: "Anguilla" },
    { code: "+672", name: "Antarctica" },
    { code: "+1268", name: "Antigua and Barbuda" },
    { code: "+54", name: "Argentina" },
    { code: "+374", name: "Armenia" },
    { code: "+297", name: "Aruba" },
    { code: "+61", name: "Australia" },
    { code: "+43", name: "Austria" },
    { code: "+994", name: "Azerbaijan" },
    { code: "+1242", name: "Bahamas" },
    { code: "+973", name: "Bahrain" },
    { code: "+880", name: "Bangladesh" },
    { code: "+1246", name: "Barbados" },
    { code: "+375", name: "Belarus" },
    { code: "+32", name: "Belgium" },
    { code: "+501", name: "Belize" },
    { code: "+229", name: "Benin" },
    { code: "+1441", name: "Bermuda" },
    { code: "+975", name: "Bhutan" },
    { code: "+591", name: "Bolivia" },
    { code: "+387", name: "Bosnia and Herzegovina" },
    { code: "+267", name: "Botswana" },
    { code: "+55", name: "Brazil" },
    { code: "+246", name: "British Indian Ocean Territory" },
    { code: "+1284", name: "British Virgin Islands" },
    { code: "+673", name: "Brunei" },
    { code: "+359", name: "Bulgaria" },
    { code: "+226", name: "Burkina Faso" },
    { code: "+257", name: "Burundi" },
    { code: "+855", name: "Cambodia" },
    { code: "+237", name: "Cameroon" },
    { code: "+1", name: "Canada" },
    { code: "+238", name: "Cape Verde" },
    { code: "+1345", name: "Cayman Islands" },
    { code: "+236", name: "Central African Republic" },
    { code: "+235", name: "Chad" },
    { code: "+56", name: "Chile" },
    { code: "+86", name: "China" },
    { code: "+61", name: "Christmas Island" },
    { code: "+61", name: "Cocos Islands" },
    { code: "+57", name: "Colombia" },
    { code: "+269", name: "Comoros" },
    { code: "+682", name: "Cook Islands" },
    { code: "+506", name: "Costa Rica" },
    { code: "+385", name: "Croatia" },
    { code: "+53", name: "Cuba" },
    { code: "+599", name: "Curacao" },
    { code: "+357", name: "Cyprus" },
    { code: "+420", name: "Czech Republic" },
    { code: "+243", name: "Democratic Republic of the Congo" },
    { code: "+45", name: "Denmark" },
    { code: "+253", name: "Djibouti" },
    { code: "+1767", name: "Dominica" },
    { code: "+1809", name: "Dominican Republic" },
    { code: "+670", name: "East Timor" },
    { code: "+593", name: "Ecuador" },
    { code: "+20", name: "Egypt" },
    { code: "+503", name: "El Salvador" },
    { code: "+240", name: "Equatorial Guinea" },
    { code: "+291", name: "Eritrea" },
    { code: "+372", name: "Estonia" },
    { code: "+251", name: "Ethiopia" },
    { code: "+500", name: "Falkland Islands" },
    { code: "+298", name: "Faroe Islands" },
    { code: "+679", name: "Fiji" },
    { code: "+358", name: "Finland" },
    { code: "+33", name: "France" },
    { code: "+689", name: "French Polynesia" },
    { code: "+241", name: "Gabon" },
    { code: "+220", name: "Gambia" },
    { code: "+995", name: "Georgia" },
    { code: "+49", name: "Germany" },
    { code: "+233", name: "Ghana" },
    { code: "+350", name: "Gibraltar" },
    { code: "+30", name: "Greece" },
    { code: "+299", name: "Greenland" },
    { code: "+1473", name: "Grenada" },
    { code: "+1671", name: "Guam" },
    { code: "+502", name: "Guatemala" },
    { code: "+44", name: "Guernsey" },
    { code: "+224", name: "Guinea" },
    { code: "+245", name: "Guinea-Bissau" },
    { code: "+592", name: "Guyana" },
    { code: "+509", name: "Haiti" },
    { code: "+504", name: "Honduras" },
    { code: "+852", name: "Hong Kong" },
    { code: "+36", name: "Hungary" },
    { code: "+354", name: "Iceland" },
    { code: "+91", name: "India" },
    { code: "+62", name: "Indonesia" },
    { code: "+98", name: "Iran" },
    { code: "+964", name: "Iraq" },
    { code: "+353", name: "Ireland" },
    { code: "+44", name: "Isle of Man" },
    { code: "+972", name: "Israel" },
    { code: "+39", name: "Italy" },
    { code: "+225", name: "Ivory Coast" },
    { code: "+1876", name: "Jamaica" },
    { code: "+81", name: "Japan" },
    { code: "+44", name: "Jersey" },
    { code: "+962", name: "Jordan" },
    { code: "+7", name: "Kazakhstan" },
    { code: "+254", name: "Kenya" },
    { code: "+686", name: "Kiribati" },
    { code: "+383", name: "Kosovo" },
    { code: "+965", name: "Kuwait" },
    { code: "+996", name: "Kyrgyzstan" },
    { code: "+856", name: "Laos" },
    { code: "+371", name: "Latvia" },
    { code: "+961", name: "Lebanon" },
    { code: "+266", name: "Lesotho" },
    { code: "+231", name: "Liberia" },
    { code: "+218", name: "Libya" },
    { code: "+423", name: "Liechtenstein" },
    { code: "+370", name: "Lithuania" },
    { code: "+352", name: "Luxembourg" },
    { code: "+853", name: "Macau" },
    { code: "+389", name: "Macedonia" },
    { code: "+261", name: "Madagascar" },
    { code: "+265", name: "Malawi" },
    { code: "+60", name: "Malaysia" },
    { code: "+960", name: "Maldives" },
    { code: "+223", name: "Mali" },
    { code: "+356", name: "Malta" },
    { code: "+692", name: "Marshall Islands" },
    { code: "+222", name: "Mauritania" },
    { code: "+230", name: "Mauritius" },
    { code: "+262", name: "Mayotte" },
    { code: "+52", name: "Mexico" },
    { code: "+691", name: "Micronesia" },
    { code: "+373", name: "Moldova" },
    { code: "+377", name: "Monaco" },
    { code: "+976", name: "Mongolia" },
    { code: "+382", name: "Montenegro" },
    { code: "+1664", name: "Montserrat" },
    { code: "+212", name: "Morocco" },
    { code: "+258", name: "Mozambique" },
    { code: "+95", name: "Myanmar" },
    { code: "+264", name: "Namibia" },
    { code: "+674", name: "Nauru" },
    { code: "+977", name: "Nepal" },
    { code: "+31", name: "Netherlands" },
    { code: "+599", name: "Netherlands Antilles" },
    { code: "+687", name: "New Caledonia" },
    { code: "+64", name: "New Zealand" },
    { code: "+505", name: "Nicaragua" },
    { code: "+227", name: "Niger" },
    { code: "+234", name: "Nigeria" },
    { code: "+683", name: "Niue" },
    { code: "+850", name: "North Korea" },
    { code: "+1670", name: "Northern Mariana Islands" },
    { code: "+47", name: "Norway" },
    { code: "+968", name: "Oman" },
    { code: "+92", name: "Pakistan" },
    { code: "+680", name: "Palau" },
    { code: "+970", name: "Palestine" },
    { code: "+507", name: "Panama" },
    { code: "+675", name: "Papua New Guinea" },
    { code: "+595", name: "Paraguay" },
    { code: "+51", name: "Peru" },
    { code: "+63", name: "Philippines" },
    { code: "+64", name: "Pitcairn" },
    { code: "+48", name: "Poland" },
    { code: "+351", name: "Portugal" },
    { code: "+1", name: "Puerto Rico" },
    { code: "+974", name: "Qatar" },
    { code: "+242", name: "Republic of the Congo" },
    { code: "+262", name: "Reunion" },
    { code: "+40", name: "Romania" },
    { code: "+7", name: "Russia" },
    { code: "+250", name: "Rwanda" },
    { code: "+590", name: "Saint Barthelemy" },
    { code: "+290", name: "Saint Helena" },
    { code: "+1869", name: "Saint Kitts and Nevis" },
    { code: "+1758", name: "Saint Lucia" },
    { code: "+590", name: "Saint Martin" },
    { code: "+508", name: "Saint Pierre and Miquelon" },
    { code: "+1784", name: "Saint Vincent and the Grenadines" },
    { code: "+685", name: "Samoa" },
    { code: "+378", name: "San Marino" },
    { code: "+239", name: "Sao Tome and Principe" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+221", name: "Senegal" },
    { code: "+381", name: "Serbia" },
    { code: "+248", name: "Seychelles" },
    { code: "+232", name: "Sierra Leone" },
    { code: "+65", name: "Singapore" },
    { code: "+1721", name: "Sint Maarten" },
    { code: "+421", name: "Slovakia" },
    { code: "+386", name: "Slovenia" },
    { code: "+677", name: "Solomon Islands" },
    { code: "+252", name: "Somalia" },
    { code: "+27", name: "South Africa" },
    { code: "+82", name: "South Korea" },
    { code: "+211", name: "South Sudan" },
    { code: "+34", name: "Spain" },
    { code: "+94", name: "Sri Lanka" },
    { code: "+249", name: "Sudan" },
    { code: "+597", name: "Suriname" },
    { code: "+47", name: "Svalbard and Jan Mayen" },
    { code: "+268", name: "Swaziland" },
    { code: "+46", name: "Sweden" },
    { code: "+41", name: "Switzerland" },
    { code: "+963", name: "Syria" },
    { code: "+886", name: "Taiwan" },
    { code: "+992", name: "Tajikistan" },
    { code: "+255", name: "Tanzania" },
    { code: "+66", name: "Thailand" },
    { code: "+228", name: "Togo" },
    { code: "+690", name: "Tokelau" },
    { code: "+676", name: "Tonga" },
    { code: "+1868", name: "Trinidad and Tobago" },
    { code: "+216", name: "Tunisia" },
    { code: "+90", name: "Turkey" },
    { code: "+993", name: "Turkmenistan" },
    { code: "+1649", name: "Turks and Caicos Islands" },
    { code: "+688", name: "Tuvalu" },
    { code: "+256", name: "Uganda" },
    { code: "+380", name: "Ukraine" },
    { code: "+971", name: "UAE" },
    { code: "+44", name: "United Kingdom" },
    { code: "+1", name: "United States" },
    { code: "+598", name: "Uruguay" },
    { code: "+998", name: "Uzbekistan" },
    { code: "+678", name: "Vanuatu" },
    { code: "+379", name: "Vatican" },
    { code: "+58", name: "Venezuela" },
    { code: "+84", name: "Vietnam" },
    { code: "+1284", name: "British Virgin Islands" },
    { code: "+1340", name: "U.S. Virgin Islands" },
    { code: "+681", name: "Wallis and Futuna" },
    { code: "+212", name: "Western Sahara" },
    { code: "+967", name: "Yemen" },
    { code: "+260", name: "Zambia" },
    { code: "+263", name: "Zimbabwe" }
];

const countryCodeSelect = document.getElementById("countryCodeSelect");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        if (country.code === "+971") {
            option.selected = true; // Set UAE as the default selected option
        }
        countryCodeSelect.appendChild(option);
    });