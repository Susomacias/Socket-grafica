import Server from './classes/server';
import router from './routes/router';
import express from 'express';
import cors from 'cors';

const server = Server.instance;

//BodyParser
server.app.use( express.urlencoded({ extended:true}));
server.app.use( express.json());

//cors
server.app.use( cors({ origin:true, credentials:true }));

//rutas
server.app.use('/', router);

server.start ( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});