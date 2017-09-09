fs = require('fs');
var m = JSON.parse(fs.readFileSync('people.json').toString());
m.forEach(function(p){
    p.pic = p.name.toLowerCase()+".png";
});
fs.writeFile('people.json', JSON.stringify(m));