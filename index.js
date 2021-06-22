const { RSA_NO_PADDING } = require('constants');
const express =require('express');
const path = require ('path');
const app = express();
const logger = require('./middleware/logger');


//Init middleware
//app.use(logger);

//Body Parser middleware
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on ${PORT}`));