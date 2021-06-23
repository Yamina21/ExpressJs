const { RSA_NO_PADDING } = require('constants');
const express =require('express');
const path = require ('path');
const app = express();
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./members');


//Init middleware
//app.use(logger);

//Handlebars Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);
// Get static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on ${PORT}`));