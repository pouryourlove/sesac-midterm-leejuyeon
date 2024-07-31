const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/todo');
const { sequelize } = require('./models');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router)
app.use('/todo', router)

sequelize
    .sync({ force: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log('database connection succeeded');
            console.log(`server is running! port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

