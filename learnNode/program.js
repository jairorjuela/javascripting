var fs = require('fs');
var file = process.argv[1];
var buffer = fs.readFileSync(process.argv[2], 'utf8');
var lines = buffer.split('\n');
console.log(lines.length-1);
