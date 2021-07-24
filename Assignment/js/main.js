(function ($) {
    "use strict";

    //  01. Menu Navvar
    $(".navbar-nav a,.scroll-icon a,.appai-preview .button-group a").on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // 02. Nav Var Remove Add
    $(document).on("click",".navbar-nav a", function(){
        $(".navbar-nav").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
    });

    // 03. Scrool Spy
    $('body').scrollspy({target: '#navigation'})

    // 04. Sticky Header
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('#header-top').addClass("navbar-fixed-top");
        } else {
            $('#header-top').removeClass("navbar-fixed-top");
        }
    });

})(jQuery);