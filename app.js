const express = require('express');
const hbs = require('hbs');
const path = require ('path');

const app = express();

//make everything inside of public/available
app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'/views'));

// our first Route
app.get('/', (req, res) => {
    let data = {
        city:"Berlin",
        country:"germany"
    }
    data.isCityBerlin = data ==='Berlin';
    res.render('home',data);
});
  
//server started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});