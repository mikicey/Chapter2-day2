const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.static("static"));

app.set("view engine", "hbs");


app.get("/",(req,res)=>{
    res.render("home")
}); 

app.get("/addmyproject",(req,res)=>{
    res.render("addproject")    
});

app.post("/postmyproject",(req,res)=>{
    console.log(req.body)
    res.redirect("/addmyproject")
});

app.get("/single",(req,res)=>{
    res.render("single")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
});


app.listen(PORT, ()=>{
    console.log(`Connected to ${PORT}`)
})
