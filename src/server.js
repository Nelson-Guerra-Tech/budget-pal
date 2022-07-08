const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
const port = 3004;

app.get('/', (req, res) => res.send('🟢 Server Connected'));
app.listen(port, () => console.log(`Node Js server started at ${port}`));
