$('.page-scroll').on('click', function (e) {

    var Tujuan = $(this).attr('href');
    var elemenTujuan = $(Tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1000, 'easeInOutExpo');

    e.preventDefault();



});