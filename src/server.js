const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/hello', (req, res) => {

    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello.html');

    // In order to read the content of the html file, node requires utf-8 unicode format.
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(contentFromHtmlFile);

});

app.get('/watch', (req, res) => {

    const pathToHtmlFile = path.resolve(__dirname, '../dist/watch.html');

    // In order to read the content of the html file, node requires utf-8 unicode format.
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(contentFromHtmlFile);

});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {

    console.log(`Listening on http://localhost:3000/`);

});