



jQuery(document).ready(function($) {

   

    // Счетчик
    $(window).on('scroll.progress', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 1500 /* Нужное значение на странице */ ) {
            /* Запускаем скрипт */
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                 Counter: $(this).text()
                 }, {
                  duration: 1500,
                  easing: 'swing',
                  step: function (now) {
                     $(this).text(Math.ceil(now));
                  }
                 });
             });
            /* Отписываемся от события если больше не нужно запускать скрипт */
            $(window).off('scroll.progress');
        }
    });


    

    // Слайдер
    $('.slider__inner').slick({
        infinite: true,
        dots: false,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-left-solid"></span></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-right-solid"></span></span></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    // Кнопка Наверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    
    // Плавная прокрутка
    $('a[href^=#up]').click(function(){
        var _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('a[href^="#"]:not([href=#team]):not([href=#up])').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 40 });
        return false;
    });

    $('a[href^="#team"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 90 });
        return false;
    });

    //липкое меню

    var $menu = $(".header__wrapper");
    var $menuOffsetTop = $menu.offset().top;
    var $menuHeight = $menu.outerHeight();
    var $menuParent = $menu.parent();
    var $menuParentPaddingTop = parseFloat($menuParent.css("padding-top"));
 
    checkWidth();
    
    function checkWidth() {
        if (window.matchMedia("(max-width: 1920px)").matches) {
            if ($menu.length !== 0) {
            $(window).scroll(onScroll);
            }
        }
    }
 
    function onScroll() {
        if ($(window).scrollTop() > $menuOffsetTop) {
            $menu.addClass("fixed");
            $menuParent.css({ "padding-top": $menuParentPaddingTop + $menuHeight });
        } else {
            $menu.removeClass("fixed");
            $menuParent.css({ "padding-top": $menuParentPaddingTop });
        }
    }


     // Моб меню

     $(".navbar__icon").click(function () {
         if ($(".navbar__icon").hasClass("navbar__icon_active")) {
             $(".navbar__icon").removeClass("navbar__icon_active");
             $(".navbar__list").slideUp();
         } else {
             $(".navbar__icon").addClass("navbar__icon_active");
             $(".navbar__list").slideDown();
             $(".navbar__list").css("display","flex");
         }
     }); 
     $('.navbar__link').click(function() {
        if ($(".navbar__icon").hasClass("navbar__icon_active")) {
            $(".navbar__icon").removeClass("navbar__icon_active");
            $(".navbar__list").slideUp();
        }
     });
     $(window).resize(function(){
           if ($(window).width() > 991) {
             $(".navbar__list").css("display","flex");
             $(".navbar__icon").removeClass("inavbar__icon_active");
         } else {
             $(".navbar__list").css("display","none");
             $(".navbar__icon").removeClass("navbar__icon_active");
         }
     });

    //  форма

    


  });