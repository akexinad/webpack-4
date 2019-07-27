const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {

    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');

    // In order to read the content of the html file, node requires utf-8 unicode format.
    const content = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(content);

});

app.listen(3000, () => {

    console.log(`Listening on http://localhost:3000/`);

});