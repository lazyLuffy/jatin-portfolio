const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const routes = require('./routes/userRoute');
const port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://jatin121:jatin121@cluster0.1izut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((result) => {
    console.log("Connect Stablished")
}).catch((err) => {
    console.log(err.message)
});

app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'assets/js')))
app.use('/css', express.static(path.join(__dirname, 'assets/css')))
app.use('/sass', express.static(path.join(__dirname, 'assets/sass')))
app.use('/webfonts', express.static(path.join(__dirname, 'assets/webfonts')))
app.use('/images', express.static(path.join(__dirname, 'assets/images')))
app.use(express.urlencoded({extended:false}));


app.get('/', (req,res)=>{
    res.render('index')
});


app.use('/create',routes)

app.listen(port,"localhost",()=>{
    console.log('listening at http://localhost:${port}');
})