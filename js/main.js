$('.sliderwrapper').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var owl = $('.sliderwrapper');
owl.owlCarousel();
// Go to the next item
$('.customPrevBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customNextBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
$('.testicarosel').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var owl = $('.testicarosel');
owl.owlCarousel();
// Go to the next item
$('.customPrevBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customNextBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

