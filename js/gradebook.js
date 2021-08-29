$(document).ready(function () {
    $('.header-item-col').click(function () {
        let header_item_col = $('.header-item-col');
        $(header_item_col).removeClass('clicked');
        $(header_item_col).children('.lesson__info-block').addClass('hide');
        $(this).addClass('clicked');

        $(this).parent().children('.lesson__info-block').toggleClass('hide');
    });

    $('.table-row').hover(function () {
        let index = $(this).parent().children($(this)).index($(this)) - 1;
        $('.table-row').parent().children('.table-header-row').children('.header-item-col').removeClass('hovered');
        $(this).parent().children('.table-header-row').children('.header-item-col').addClass('hovered');

        let firstCol_row = $('.first-col > .table-row').not(':first-child');
        firstCol_row.removeClass('active');
        $(firstCol_row[index]).addClass('active');

        let lastCol_row = $('.last-col > .table-row').not(':first-child');

        $(lastCol_row).children('.lesson').removeClass('hovered');
        $(lastCol_row[index]).children('.lesson').addClass('hovered');

    }, function () {

    });

    $('.lesson').click(function () {
        $('.lesson').removeClass('clicked');
        $(this).addClass('clicked');
    });
});