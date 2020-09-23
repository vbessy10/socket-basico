const { io } = require('../server')

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         respuesta: 'Todo bien'
        //     })
        // } else {
        //     callback({ respuesta: 'Todo mal' });
        // }
    });
});