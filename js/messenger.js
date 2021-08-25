$(document).ready(function () {
    $('.messenger__list-item').hover(function () {
        $(this).children('.additionalThreePoints').removeClass('hide');
    }, function () {
        $(this).children('.additionalThreePoints').addClass('hide');
    });
});