$(document).ready(function(){

    // FUNCION SMOOTH SCROLL
    $(".navbar a").click(function(event){
        event.preventDefault();
        var gato = this.hash;
        $("html").animate(
            {
                scrollTop: $(gato).offset().top,
            },
            800
        );
    });

});

// FUNCION PARA CARGAR LOS TOOLTIP
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$('.animation-toggle').hover(function() {
    var anim = $(this).attr('data-animate');
    $(this).addClass('animated');
    $(this).addClass(anim);
    setTimeout(function() {
        $('.animation-toggle').removeClass(anim);
    }, 3000);
});