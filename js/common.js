$(document).on('click', '.close, .button-cancel', function(){
    $(this).parents('.popup').fadeOut();
});
$(document).on('click', '.rate-item', function(){
    $('.rate-item').removeClass('active');
    $(this).addClass('active')
});
$(document).on('click', '.button-popup', function(){
    $('.popup').fadeIn();
});