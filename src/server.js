const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://yuriF:18032003@sidoka-tmqbn.mongodb.net/Sidoka?retryWrites=true&w=majority', {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(8000);