$(document).ready(function () {
    $('.attended_lists-item').click(function () {
        let item = $(this).children('.attended_lists-item-wrapper');
        $(item).toggleClass('withList');

        $(item).find('.arrow_down_SVG').toggleClass('arrow_down_SVG_inverted');

        $(this).children('.students_list').toggleClass('hide');
    });
});