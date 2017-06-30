const bodyParser = require('body-parser');
const router = require('./router');
const path = require('path');

const ejs = require('ejs');
const pug = require('pug');
const exphbs = require('express-handlebars');

const config = (app) => {
    app.set('PORT', 3000);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    /**
     *  PATH MOUNTING
     */

    // const user = require('express')();
    // const admin = require('express')();

    // app.use('/', user);
    // app.use('/admin', admin);

    // user.get('/', (req, res) => {
    //     res.send('User Route');
    // });

    // admin.get('/', (req, res) => {
    //     res.send("Admin Route");
    // });

    /**
     * APP REQUESTS
     */

    // app.all('/', (req, res) => {
    //     res.send("APP ALL METHOD");
    // });

    /**
     * APP ROUTES
     */

    // app.route('/')
    //     .get((req, res) => {
    //         res.send('GET REQUEST');
    //     })
    //     .put((req, res) => {
    //         res.send('PUT REQUEST');
    //     })
    //     .post((req, res) => {
    //         res.send('POST REQUEST');
    //     })
    //     .delete((req, res) => {
    //         res.send('DELETE REQUEST');
    //     })
    //     .copy((req, res) => {
    //         res.send('COPY REQUEST');
    //     });

    /**
     *  APP SETTING ENVIRONMENT
     */

    app.set('x-powered-by', false);
    app.disable('x-powered-by');
    app.disable('etag');

    /**
     * REQUEST OBJECTS
     */

    // app.get('/', (req, res) => {
    //     var query = req.query;
    //     res.send(query);
    // });

    // app.get('/:id', (req, res) => {
    //     var params = req.params;
    //     res.send(params);
    // });

    /**
     * Express router
     */

    //app.use('/router', router);

    /**
     * TEMPLATE 
     */

    app.set('views', path.join(__dirname, '/views'));

    //app.set('view engine', 'ejs');
    // app.engine('shiva', require('ejs').renderFile);

    //app.set('view engine', 'pug');
    //app.engine('html', pug.__express);

    var hbs = exphbs.create({});
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    //app.engine('html', hbs.engine);
    app.set('view engine', 'handlebars');

    app.get('/', (req, res) => {
        res.render('index', { "name": "viral" });
    });

    // app.use(express.static(__dirname + '/public'));
}

module.exports = config;