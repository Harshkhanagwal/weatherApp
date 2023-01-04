const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const port = process.env.port || 8000;

//paths
const publicPath = path.join(__dirname, "../public");

const tempPath = path.join(__dirname, '../views')
const partialPath = path.join(__dirname + '/views/partials');

app.set('view engine', 'hbs');
// app.set('views', tempPath);
hbs.registerPartials(partialPath);

console.log(partialPath)

//hbs partials 
// hbs.registerPartial('nav.hbs', '{{nav}}');


app.use(express.static(publicPath));


app.get("/", (req, res)=>{
    res.render("home.hbs");
})

app.get("/weather", (req, res)=>{
    res.render("weather.hbs");
})

app.get("/about", (req, res)=>{
    res.render("about.hbs");
})

app.get("*", (req, res)=>{
    res.render("error.hbs");
})


app.listen(port, () => {
    console.log("listening to the port : "+port);
})