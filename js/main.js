$(document).ready(function () {
   
    $('.menu__more-button').click(function () {
        $(this).toggleClass('active');
        $(this.nextElementSibling).toggleClass('active');

    });

    $('#menu__button__burger').click(function () {
        $(this).toggleClass('show');
    });

    $('.input__dropdown').click(function () {
        let parent = $(this).parent();
        $(parent).children('.dropdown__itemsBlock').toggleClass('hide');
        $(parent).children('.arrow_down_SVG').toggleClass('arrow_down_SVG_inverted');
    });

    $('.dropdown__itemsBlock>li').click(function(){
        console.log($(this).closest('.inputWrapper'));
        $(this).closest('.inputWrapper').children('.input__dropdown').val($(this).children('.dropdown__itemWithImage_text').text());
    })

/*    $('.input__dropdown').blur(function(){
        $('.input__dropdown').parent().children('.dropdown__itemsBlock').each(function (i, elem) {
            $(elem).addClass('hide');
        })
        $('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
    });*/

    $('.inputMessageBlock-smiles').click(function () {
        $(this).toggleClass('inputMessageBlock-smiles-active');
        $('.menu__smileMenu').toggleClass('hide');
        return false;
    });

    $('.inputMessageBlock-smiles').on('mousedown', function() {
        return false;
    });

    $('.favouriteIcon').click(function(){
        $(this).toggleClass('active');
    });

    (function() {
        let sort = $(".sort");
        let input = $(sort).children('.sort-switch').find('input');

        $(input).click(function () {
            let sortItems = $(this).parents('.sort').children('.sort-item');

            $(sortItems).removeClass('active');

            let currentInput = $(this);

            if($(currentInput).prop('checked') === true) {
                $(sortItems).last().addClass('active');
                $(sortItems).last().addClass('attendance-active');
                $(sortItems).first().removeClass('active');
            }
            else {
                $(sortItems).last().removeClass('active');
                $(sortItems).last().removeClass('attendance-active');
                $(sortItems).first().addClass('active');
            }
        })
    })();
});