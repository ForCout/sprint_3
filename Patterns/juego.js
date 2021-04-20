const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Marcador = (() => {
  function Puntuacion() {
    clasificacion = [];

    this.add = function (jugador) {
      clasificacion.push(jugador);
    };
    this.getGanador = function () {
      ganador = clasificacion[0];

      for (let i = 0, len = clasificacion.length; i < len; i++) {
        if (clasificacion[i].puntos > ganador.puntos) {
          ganador = clasificacion[i];
        }
      }
      console.log(`------------El Ganador-------------------`);
      console.log(
        `El ganador es ${ganador.name},con ${ganador.puntos} puntos `
      );
    };
  }
  let instance;
  return {
    getInstance: () => {
      if (!instance) {
        instance = new Puntuacion();
      }
      return instance;
    },
  };
})();

function Jugador(name, puntos) {
  this.name = name;
  this.puntos = puntos;
}

function Ruleta() {
  const marcador = Marcador.getInstance();
  rl.question("Introduzca nombre jugador_1 ", function (respuesta) {
    let jugador1 = new Jugador(respuesta, 0);
    rl.question("Introduzca nombre jugador_2 ", function (respuesta) {
      let jugador2 = new Jugador(respuesta, 0);

      marcador.add(jugador1);
      marcador.add(jugador2);

      let tiradas = 0;
      while (tiradas < 2) {
        tiradas++;
        let min = -10;
        let max = +20;

        console.log(`------------Tirada nº${[tiradas]}-------------------`);
        for (let i = 0, len = clasificacion.length; i < len; i++) {
          let puntos = Math.floor(Math.random() * (max - min + 1) + min);
          clasificacion[i].puntos += puntos;
          console.log(
            `${clasificacion[i].name} ha sacado ${puntos} puntos----Total: ${clasificacion[i].puntos} puntos`
          );
        }
      }
      marcador.getGanador();
      process.exit(0);
    });
  });
}

Ruleta();


