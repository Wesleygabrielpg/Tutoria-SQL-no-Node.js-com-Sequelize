const express = require('express');
const routes = require('./routes');

require('./database'); 
// Tem q importar ela para o Model poder saber onde conectar

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);