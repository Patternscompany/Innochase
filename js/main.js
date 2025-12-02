(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

     // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


const langBtn = document.getElementById("langDropdownBtn");
const langMenu = document.getElementById("langMenu");
const selectedLang = document.getElementById("selectedLang");

// Toggle dropdown
langBtn.addEventListener("click", () => {
    langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

// CLICK EVENT FOR EACH LANGUAGE
langMenu.querySelectorAll("a").forEach(option => {
    option.addEventListener("click", function(e) {
        e.preventDefault();

        const lang = this.getAttribute("data-lang");

        selectedLang.innerText = lang.toUpperCase();
        localStorage.setItem("preferredLanguage", lang);

        langMenu.style.display = "none";

        // Move selected item to TOP
        langMenu.insertBefore(this.parentElement, langMenu.firstChild);

        // Trigger Google Translate
        translateLanguage(lang);
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", function(e) {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.style.display = "none";
    }
});

// Google Translate Function
function translateLanguage(lang) {
    var select = document.querySelector("select.goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
}

// Restore saved language on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
        translateLanguage(savedLang);
        selectedLang.innerText = savedLang.toUpperCase();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.body.style.top = "0px";
    }, 500);
});





