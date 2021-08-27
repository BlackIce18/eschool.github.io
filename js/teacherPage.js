$(document).ready(function () {
    let headerCols;
    let activeRow
    let lessonTime;
    let lessonTimeLastCol;
    let firstCol;
    let lastCol;
    let colIndex = 0;
    let rowIndex = 0;

    $('.lesson').hover(function(){
        firstCol = $('.table__content-main-table-col.first-col').children();
        lastCol = $('.table__content-main-table-col.last-col').children();
        headerCols = $('.table-row.table-header-row').children();
        activeRow = $(this).parent().addClass('activeRow');

        rowIndex = $(activeRow).parent().children().index($(activeRow));
        colIndex = $(this).parent().children().index($(this));

        $(headerCols[colIndex]).addClass('hovered');
        lessonTime = $(firstCol[rowIndex]).children('.lesson-time').addClass('active');
        lessonTimeLastCol = $(lastCol[rowIndex]).children('.lesson-time').addClass('active');
    }, function(){
        $(headerCols[colIndex]).removeClass('hovered');
        $(activeRow).removeClass('activeRow');
        $(lessonTime).removeClass('active');
        $(lessonTimeLastCol).removeClass('active');
    });

    $('.lesson').click(function () {
        $('.lesson').removeClass('clicked');
        $(this).addClass('clicked');

        let left = $(this).offset().left - $('.first-col').offset().left;
        let top = $(this).offset().top - $('.table__content').offset().top - $('.table__content > .lesson__info-block').height();
        console.log(top);
        console.log($('.table__content').offset().top);
        console.log($(this).offset().top);
        $('.table__content > .lesson__info-block').removeClass('hide').css({'left' : left +"px",'top' : top+"px"});
    })
});