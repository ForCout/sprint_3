


class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos =0;
        
    }
    puntuacion(puntos) {
        this.puntos += puntos
      
      
    }
   
}

class Marcador extends Jugador {
    
  constructor() {
    super.puntuacion(puntos)
    console.log(puntos)
  

      if (typeof Marcador.instace === "object") {
      return Marcador.instace;
    }
    Marcador.instace = this;
    return this;
  }
    
   
}

let jugador1 = new Jugador("Moncho");
let jugador2 = new Jugador("Pedro")
jugador1.puntuacion(5);
jugador1.puntuacion(3)
jugador2.puntuacion(4);
let marcador = new Marcador();






/*
function Jugador(name) {
  this.name = name;

  this.say = function () {
    console.log("jugador: " + name);
  };
}

function FabricaJugadores() {
  this.create = function (name) {
    return new Jugador(name);
  };
}

function run() {
  let jugadores = [];
  let fabricaJugadores = new FabricaJugadores();

  jugadores.push(fabricaJugadores.create("Moncho"));
  jugadores.push(fabricaJugadores.create("Pedro"));

  for (let i = 0, len = jugadores.length; i < len; i++) {
    jugadores[i].say();
  }
}
*/