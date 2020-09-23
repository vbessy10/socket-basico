var socket = io();

// on, escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit, enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Mariela',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor:', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});