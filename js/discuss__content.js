$(document).ready(function () {
    $(window).resize(function(){
    if(window.matchMedia('(min-width: 1199px)').matches){
        var padding__top=$("#fixed__top").outerHeight()+10;
        var padding__bottom=$("#fixed__bottom").outerHeight()+10;
        $("#discuss__content").css({
            'padding-top':padding__top,
            'padding-bottom':padding__bottom

        });
    }
    else{
        $("#discuss__content").css({
            'padding-top':0,
            'padding-bottom':0

        });
    }
})
})
