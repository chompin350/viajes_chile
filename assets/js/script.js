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

