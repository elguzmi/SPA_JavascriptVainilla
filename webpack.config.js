const path =  require('path');  //nos permite acceder a donde estamos en las carpetas,ya sea local o en la nube
const htmlWebpackPlugin = require('html-webpack-plugin');  //archivo para trabajar con html
const { resolve } = require('path');

module.exports= {
    entry:'./src/index.js', //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'//Este es el nombre del archivo final para producción.
    },
    resolve:{
        extensions: ['.js'], //Extensiones que vamos a utilizar.
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [
            {  // Estructura de Babel
                test: /\.js?$/,  //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader' //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },

    //que plugin vamos a utilizar
    plugins:[
        new htmlWebpackPlugin([
            {
                inject: true,   //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html',   //Dirección donde se encuentra el template principal
                filename: './index.html'  //El nombre que tendrá el archivo
            }
        ])
    ]
}