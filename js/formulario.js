 document.addEventListener('DOMContentLoaded', function() {

    var formulario = document.getElementById('formReserva');
    var mensaje = document.getElementById('mensajeExito');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); 

        var servicio = document.getElementById('servicio').value;

        if (servicio === "") {
            alert("Por favor, selecciona un servicio.");
            return;
        }
        
        mensaje.style.display = "block";


        formulario.reset();
    });

});
