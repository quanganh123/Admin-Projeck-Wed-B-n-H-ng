const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('handlebars');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 9000;

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const router = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, './public')));

app.use(morgan('combined'));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use(methodOverride('_method'))

app.engine('hbs', hbs.engine({
  extname: 'hbs',
  handlebars: allowInsecurePrototypeAccess(handlebars),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});