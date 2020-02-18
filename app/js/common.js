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

    

    /* Parallax 
    $('.parallax-window').parallax({imageSrc: 'img/background.jpg'}); */

    /* Resize
    function heightDetect(){
        $(".parallax-window").css("height", $(window).height());    
    }
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
    */

    /* Scrool animation
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-right').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInRight animated');
                $(this).css('opacity', '1');
            }
        });
    });*/
});