const express = require('express');
const app = express();

app.use(express.static('../../www'));

app.listen(8080);
