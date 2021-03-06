$(document).ready(function(){
    $('.home-slider').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        dots:true,
        autoplay:true,
        autoautoplayTimeout:5000,
        smartSpeed:500
    });
    $('.why-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        autoautoplayTimeout:5000,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('.product-slider').owlCarousel({
        center: true,
        items:2,
        loop:true,
        dots:false,
        nav:true,
        margin:10,
        autoplay:true,
        autoautoplayTimeout:5000,
        smartSpeed:500,
        responsive:{
            600:{
                items:3
            }
        }
    });
});