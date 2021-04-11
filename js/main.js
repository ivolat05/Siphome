$(function () {
    $('.menu__burger').click(function(event){
        $('.menu__burger').toggleClass('menu__burger--active');
        $('.menu').toggleClass('menu--active');
        $('.header__wrap-inner').toggleClass('header__wrap-inner--active');
        $('.header__wrap-list').toggleClass('header__wrap-list--active');
        $('.logo__menu').toggleClass('logo__menu--active');
        $('.logo').toggleClass('logo--active');
    });
    
    $('.services__slaider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
    ]
    });
    $('.testimonials__slaider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/btn__icon-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/btn__icon-right.png" alt="next"></button>',
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
    ]
    });
});
