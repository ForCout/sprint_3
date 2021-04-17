const EventEmitter = require("events");
const chat = new EventEmitter();
const util = require("util");

nodeSubscriptor = [];
javaSubscriptor = [];

 function Usuarios(name) {
   this.name = name;
 }

function Topic(topic) {
  this.topic = topic;

  this.subscribirse = function (usuario, topic) {
    return {
      usuario, topic
    }
      };
  };

const jonatan = new Usuarios("Jonatan");
const moncho = new Usuarios("Moncho");
const luis = new Usuarios("Luis");
const maria = new Usuarios("Maria");

const topic = new Topic();

nodeSubscriptor.push(topic.subscribirse("Jonatan", "ChatNodejs"));
nodeSubscriptor.push(topic.subscribirse("Moncho", "ChatNodejs"));
nodeSubscriptor.push(topic.subscribirse("Luis", "ChatNodejs"));
javaSubscriptor.push(topic.subscribirse("Maria", "ChatJava"));

util.inherits(Topic, EventEmitter);

topic.on("ChatNodejs", function (usuario, mensaje) {
  console.log(usuario + " " + ": Emite mensaje");
  console.log(mensaje);
  console.log("_____________________");

  nodeSubscriptor.forEach((value) => {
    if (usuario != value.usuario) {
      console.log(value.usuario + " " + ": Recibe mensaje");
      console.log(mensaje);
      console.log("_____________________");
    }
  });
});

topic.on("ChatJava", function (usuario, mensaje) {
  console.log(usuario + " " + ": Emite mensaje");
  console.log(mensaje);
  console.log("_____________________");

  javaSubscriptor.forEach((value) => {
    if (usuario != value.usuario) {
      console.log(value.usuario + " " + ": Recibe mensaje");
      console.log(mensaje);
      console.log("_____________________");
    }
  });
});

topic.emit("ChatNodejs", "Jonatan", "Bienvenidos chicos al curso de NodeJs");
topic.emit("ChatNodejs", "Moncho", "Gracias, encatado de estar aquí");
topic.emit("ChatNodejs", "Luis", "Igualmente");
topic.emit("ChatJava", "Maria", "Hay alguien ahí?");
