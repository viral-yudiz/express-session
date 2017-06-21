const express = require('express');
const app = express();

app.set('PORT', 3000);
const PORT = app.get('PORT');

app.listen(PORT, () => {
    console.log(`Magic of express on PORT ${PORT}`);
});

const user = require('express')();
const admin = require('express')();

app.use('/', user, (req, res, next) => {
    console.log("From user");
    next();
});

app.use('/admin', admin, (req, res, next) => {
    console.log("From admin");
    next();
});

user.get('/', (req, res) => {
    res.send('User Route');
});

admin.get('/admin', (req, res) => {
    res.send("Admin Route");
});