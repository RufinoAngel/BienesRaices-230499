//ECMA Sript 6
// commin JS
import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'
//const express = require('express'); //DECLARANDO UN OBJETO QUE VA A PERMITIR LEER PAGINAS ETC.importar la libreria para crear un servidor web
//INSTANCIAR NUESTRA APLICACIÓN WEB
const app = express();
//CONFIGURAMOS NUESTRO SERVIDOR WEB (puerto donde estara escuchando nuestro sitio web)
const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);  
});
//Probamos rutas para poder presentar mensajes al usuario a través del navegador
// Definir la carpeta publica de recursos estaticos (assets)
app.use(express.static('./public'));
//Routing - Enrutamiento
app.use('/',generalRoutes);
app.use('/usuario/', userRoutes);


//Habilitar pug
//Set es para hacer configuraciones
app.set('view engine','pug')
app.set('views','./views')//se define donde tendrá el proyecto las vistas
//auth -> auntentificación