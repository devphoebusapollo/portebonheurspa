require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/subsRoute');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api', router);

app.use(express.static(path.join(__dirname, "build")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

//connect to database
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to the database');
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});