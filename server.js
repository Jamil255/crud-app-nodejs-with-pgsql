const express = require('express');
const connectDb = require('./config/db');

const app = express();
app.use(express.json());

const PORT = 3030;

connectDb();

app.get('/', (req, res) => res.send('Welcome'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
