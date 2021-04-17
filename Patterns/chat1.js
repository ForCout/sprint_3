class Topic {
  constructor() {
    this.supscriptores = [];
  }
  registraSubscriptores(observer) {
    this.supscriptores.push(observer);
  }

  cancelaSubscripcion(usuario) {
    let index = this.supscriptores.indexOf(usuario);
    if (index > -1) {
      this.supscriptores.splice(index, 1);
    }
  }

  notify(mensaje) {
    this.supscriptores.forEach((observer) => {
        observer.notify(observer, mensaje);
        
    });
  }
}

class Usuario {
  constructor(name) {
    this.name = name;
    }
    
  notify(observer,mensaje) {
    this.mensaje = mensaje;
    console.log(observer.name+": "+ mensaje);
  }
}

let moncho = new Usuario("Moncho");
let pedro = new Usuario("Pedro");
let maria = new Usuario("Maria");
let nodejs = new Topic();
let java = new Topic();

nodejs.registraSubscriptores(moncho);
nodejs.registraSubscriptores(pedro);
java.registraSubscriptores(maria);


nodejs.notify("Tenemos nuevas noticias");
java.notify("Curso cancelado")
