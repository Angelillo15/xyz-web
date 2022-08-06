const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
const router = require('./router')
require('dotenv').config();

app.set('views', path.join(__dirname, '/views'))

app.use(morgan('dev'));


const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');


app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(router)


app.listen(port, () => {
    console.log(`Start`)
    console.log(`Server running on port ${port}`);
})
