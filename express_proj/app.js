const express = require('express');
const app = express();

const locals = require('./locals')(app);
const config = require('./config')(app);
const PORT = app.get('PORT');

console.log("PORT", app.get('PORT'));
console.log("LOCALS", app.locals.fname);

app.listen(PORT, () => {
    console.log(`Server Started @ http://localhost:${PORT}`);
});