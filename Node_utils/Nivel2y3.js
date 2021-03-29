//Nivel 2 ejercicio 1

function comprimirArchivos() {

    let zlib = require('zlib');
    let fs = require('fs');
    let gzip = zlib.createGzip();
    let r = fs.createReadStream('./archivo.txt');
    let w = fs.createWriteStream('./miZip.txt.gz');
    r.pipe(gzip).pipe(w);
}
comprimirArchivos();

//Nivel 3

function listar() {

    const { exec } = require('child_process');
      
    exec('dir', (err, stdout, stderr) => {
        if (err) {
            console.error(`Se ha producido el siguiente error: ${err}`);
            return;
        }
        console.log(`Listado de Ficheros: ${stdout}`);
    });
}
    
listar();