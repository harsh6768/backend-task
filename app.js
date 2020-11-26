const express           =       require('express');
const logger            =       require('morgan');
const cors              =       require('cors');

const app               =       express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const db = require('./engine/db');
app.use(require('./routes/routes'));

const PORT=process.env.PORT || 3000;

app.listen( PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
