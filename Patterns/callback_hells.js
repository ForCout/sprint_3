const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = (str) => str.split("").reverse().join("");
let file ;

function cargarArchivos() {
  return new Promise((resolve, reject) => {
    readdir(inbox, (error, files) => {
      if (error) reject(console.log("Error: Folder inaccessible"));
      resolve(files);
    });
  });
}

function leerArchivos(files) {
  return new Promise((resolve, reject) => {
    files.forEach((file) => {
      readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) reject(console.log("Error:  File could not be saved!"));
        resolve(data);
      });
    });
  });
}

function escribirArchivos(data) {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), reverseText(data), (error) => {
      if (error) reject(console.log("Error: File error"));
      resolve(console.log(`${file} was successfully saved in the outbox!`));
    });
  });
}

cargarArchivos()
  .then(function (archivos) {
    return leerArchivos(archivos);
  })
  .then(function (data) {
    return escribirArchivos(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    files.forEach((file) => {
      readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error");
        writeFile(join(outbox, file), reverseText(data), (error) => {
          if (error) return console.log("Error: File could not be saved!");
          console.log(`${file} was successfully saved in the outbox!`);
        });
      });
    });
  });
  */
