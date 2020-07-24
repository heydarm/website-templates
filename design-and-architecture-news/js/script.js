let vh = $(window).height();
let goUpBtn = $('.go-up-btn');

$(window).scroll(function() {
    if ($(window).scrollTop() > vh) {
        goUpBtn.addClass('show');
    } else {
        goUpBtn.removeClass('show');
    }
});

goUpBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function(){
    $(".page-nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let top = $(id).offset().top;
        $('html').animate({scrollTop: top - '100'}, 1000);
    });
});

$('.slide-btn').on('click', function () {

    $('.top-rated-wrapper').slideToggle(1000);

    if ($(this).text() == 'Hide') {
        return $(this).text('Show');
    } else return $(this).text('Hide');

})