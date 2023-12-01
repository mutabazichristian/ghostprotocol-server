//imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const prompterRouter = require('./routes/prompterRouter');

//consts
PORT = process.env.PORT || 8081;

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use('/prompter', prompterRouter);

//trying the sequelize connection
sequelize.authenticate()
    .then(() => {
        console.log('connection to ghost db established..');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Ghost server is now listenting on PORT ${PORT} ...`);

        })
    })

    .catch(error => {
        console.log('Connection to ghost db failled with the following error:', error);
    }) 
