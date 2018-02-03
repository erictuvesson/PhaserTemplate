//
// This is only designed to act as a bridge to the game. 
//

const fs = require('fs');
const express = require('express')
const app = express()

var port = process.env.port || 1337

// Copy phaser to build/vendor
fs.createReadStream('node_modules/phaser-ce/build/phaser.min.js')
  .pipe(fs.createWriteStream('build/vendor/phaser.min.js'));

app.use('/js',     express.static('build/js'))
app.use('/assets', express.static('build/assets'))
app.use('/vendor', express.static('build/vendor'))
app.use('/src', express.static('src'))

fs.readFile('./build/index.html', (error, html) => {
    if (error) throw error;

    app.get('/', (request, response) => {
        response.write(html)
        response.end();
    })

    app.listen(port, () => console.log("Server running at => http://localhost:" + port + "/\nCTRL + C to shutdown"))

});
