var router = require('express').Router();

// router.get('/', (req, res) => {
//     res.send("router called");
// });

router.route('/')
    .get((req, res) => {
        res.send("get request");
    });

module.exports = router;