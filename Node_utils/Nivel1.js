//Nivel 1 ejercicio 1

function recursiva(x) {
    if (x < 5) {
      setTimeout(() => {
        console.log("Imprimo cada segundo");
        recursiva(x + 1);
      }, 1000);
    }
  }
  
  recursiva(0);
  
  //Nivel 1 ejercicio 2
  
  function escriboMiNombre() {
      let fs = require('fs');
      fs.writeFile('archivo.txt', 'escriboMiNombre', function (err) {
          if (err) {
              return console.log('Se ha producido un error')
          }
          console.log('Se ha creado el archivo')
      });
  }
  
  escriboMiNombre();
  
  //Nivel 1 ejercicio 3
  
  function leeoFicheros() {
      let fs = require('fs');
      fs.readFile('archivo.txt', 'utf-8', function (err,data) {
          if (err) {
              return console.log('Se ha producido un error')
          }
          console.log(data)
      });
  }
  leeoFicheros();
  