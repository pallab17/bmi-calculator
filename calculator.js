const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// syntax of bodyparser we have to use everytime
app.use(bodyParser.urlencoded({extended:true}));

app.listen("3000",function(){
    console.log("port started on 3000");
});

// app.get("/",function(req,res){
//     res.send("hello world");
// });
// get function for addition
app.get("/",function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

// for addition calculator
app.post("/",function(req,res){

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);

    var result= num1+num2;
 res.send("the result of the calculation is " + result);
})

// get function for bmi calculator
app.get("/bmicalculator",function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/bmiCalculator.html");
});


// post function for bmi calculator
app.post("/bmicalculator",function(req,res){

    var height= parseFloat(req.body.height);
    var weight= parseFloat(req.body.weight);

    var n=  weight/(height*height);
 res.send("your bmi  is " + n);
})