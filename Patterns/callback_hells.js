const fs = require("fs");
const path = require("path");
const util = require("util");

const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = (str) => str.split("").reverse().join("");

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readdir(inbox)
  .then((files) =>files.map((file) =>readFile(path.join(inbox, file), "utf8")
  .then(reverseText)
  .then((data) => writeFile(path.join(outbox, file), data))
  .then(() =>console.log(`${file} was successfully saved in the outbox!`))))
  .catch((error) => console.error(error));
