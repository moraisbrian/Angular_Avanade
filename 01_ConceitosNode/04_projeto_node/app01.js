const moment = require('moment');

moment.locale('pt-BR')

const now = moment();
console.log(now);
console.log(now.format('DD/MM/yyyy - ddd - (MMM)'));
console.log(now.format('DD/MM/yyyy - dddd - (MMMM)'));