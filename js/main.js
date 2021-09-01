$(document).ready(() => {
    $('.my-carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('#packages-tabs').tabs();
    $( "#accordion" ).accordion();
});