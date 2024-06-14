(function($, jQuery) {
  $(document).ready(function() {
    
$('.datetime').each(function() {
    var text = $(this).text();
    text = text.replace("January", "Enero");
    text = text.replace("February", "Febrero");
    text = text.replace("March", "Marzo");
    text = text.replace("April", "Abril");
    text = text.replace("May", "Mayo");
    text = text.replace("June", "Junio");
    text = text.replace("July", "Julio");
    text = text.replace("August", "Agosto");
    text = text.replace("September", "Septiembre");
    text = text.replace("October", "Octubre");
    text = text.replace("November", "Noviembre");
    text = text.replace("December", "Diciembre");
    text = text.replace("Monday", "Lunes");
    text = text.replace("Tuesday", "Martes");
    text = text.replace("Wednesday", "Miércoles");
    text = text.replace("Thursday", "Jueves");
    text = text.replace("Friday", "Viernes");
    text = text.replace("Saturday", "Sábado");
    text = text.replace("Sunday", "Domingo");
    $(this).text(text);
});
$('.apl-loc').each(function() {
    var text = $(this).text();
    text = text.replace("Online Event", "Evento en línea");
    $(this).text(text);
});
  });
})(jQuery);