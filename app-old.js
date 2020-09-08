const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Contect-Type': 'application/json' })

        let salida = {
                nombre: 'Daniel ',
                edad: 24,
                url: req.url
            }
            //res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3000);

console.log('Escuchando en el Puerto 3000');