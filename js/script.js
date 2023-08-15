    jQuery(document).ready(function() {
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 1 is increment */
    $this.html(++current);
    if(current > $this.data('count')){
    $this.html($this.data('count'));
    } else {
    setTimeout(function(){count($this)}, 0.5);
    }
    }

    jQuery(".stat-count").each(function() {
    jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
    jQuery(this).html('0');
    count(jQuery(this));
    });
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 2000,
        autoplay:true,
        autoplayTimeout:5000,
        dots:false,
        navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
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
    })

    $(".icon").click(function(){
        $("ul").slideToggle(500);
    })

   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');
    return false;
});


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 20,
    time: 5000
});

    

