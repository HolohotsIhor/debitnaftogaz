$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu, .toggle_mnu_close").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {  
        $(".top_mnu").fadeIn(600);
        $(".toggle_mnu_close").fadeIn(600);
        $('.toggle_mnu_close').css('display', 'block');
    });

    $(".toggle_mnu_close").click(function() {  
        $(".top_mnu").fadeOut(600);
        $(".toggle_mnu_close").fadeOut(600);
        $('.toggle_mnu_close').css('display', 'none');
    });

    /********** Sticky menu **********/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    if (window.pageYOffset > sticky) {
        navbar.classList.remove("no-sticky");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("no-sticky");
    }
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.remove("no-sticky");
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.add("no-sticky");
        }
    }
    /* Scrool animation */
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('fadeInUp animated');
                $(this).css('opacity', '1');
            }
        });
    });

    $(window).scroll(function() {

        $('.mov-in').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });
    });

    /*********** Scrool to top ************/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
});

/* Owl carousel */
/********************** OWL carousel ***************/
  
});
