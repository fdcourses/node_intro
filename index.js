'use strict';

// const fsPromises1 = require('fs/promises');

const fs = require('fs').promises;

fs.readFile('./text.txt', { encoding: 'utf-8' }).then((textData) => {
  console.log(textData);
  const newFileText = `\nNEW CONTENT : LOREM IPSUM BLA BLA BLA`;
  fs.appendFile('./newFile.txt', newFileText);
});

// создать новый файл и в него завписать сначало содержимое старого файла
// а потом чтото свое
