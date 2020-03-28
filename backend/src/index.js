const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //uso o ./ pois é um pacote

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);