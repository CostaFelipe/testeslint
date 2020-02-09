const express = require('express');
const cors = require('cors');

const middlewares = require('./middlewares/middlewares');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(cors({origin:'http://localhost:3000'}));

app.get('/', (req, res) => { 
    res.json('Hello World!');
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
    console.log(`port in listening http://localhost:${port}`);
});