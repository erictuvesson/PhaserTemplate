const fs = require('fs');
const express = require('express');
const app = express();

var port = process.env.port || 1337;

fs.createReadStream('node_modules/phaser-ce/build/phaser.min.js')
  .pipe(fs.createWriteStream('dist/vendor/phaser.min.js'));
  
// Make all assets public
app.use('/',       express.static('dist'));
app.use('/assets', express.static('dist/assets'));
app.use('/vendor', express.static('dist/vendor'));
app.use('/src',    express.static('src'));

app.listen(port, () => {
    console.log("Server running at => http://localhost:" + port + "/");
    console.log("CTRL + C to shutdown");
});
