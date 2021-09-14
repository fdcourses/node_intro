'use strict';

const MyMath = require('./src/MyMath');
const exported = require('./src/Component.js');
const lodash = require('lodash');

console.log(exported);
/*
 resolve -> loading -> wrapping -> evaluation -> caching

 resolve - мы ищем файл
    1. подключаем кор модули ноды (Globals)
    2. ищем файл по имени
      2.1 ищем файлик с расширением .js
      2.2 ищем файлик с расширением .json
    3. ищем папку с таким названием
      3.1 ищем package.json -> "main"
      3.2 index.js | index.json
    4. ищем папку node_modules
    5. кидем ошибку
 loading - мы читаем содержимое найденного файла

 wrapping - оборачиваем файл в функцию, докидываем инжектированные переменные

 evaluation - запускаем весь код в файле 1 раз

 caching - кешируем результат работы прошлого шага

*/

