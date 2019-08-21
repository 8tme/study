const fs = require('fs')
const path = require('path')
require('net')
// fs.readFile('./nodejs/browser-server/text.txt', 'utf-8', (err, data)=> {
//     console.log(err, data)
// });
var data = fs.readFileSync(path.join(__dirname,'text.txt'), 'utf-8');
console.log(data)