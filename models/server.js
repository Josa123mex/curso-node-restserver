const express = require('express')
const cors= require ('cors')



class Server{
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

//midelwares
//son funciones que añiden otra funciolanidad al web server
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //cors
        this.app.use(cors() );
        
        //lectura y parseo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
}

listen(){
    
    this.app.listen(this.port, () => {
    console.log();('Servidor corriendo en el puerto', this.PORT);
});
}

}

module.exports = Server;