const createRouter = require('./create');
const homeRouter = require('./home');

function router(app) {

    app.use('/create', createRouter);
    app.use('/', homeRouter);
}

module.exports = router;