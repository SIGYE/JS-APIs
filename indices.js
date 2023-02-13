const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.get("/addition",(req,res)=>{
    let nbrs = req.query.nbrs.split("");
    let sum = 0;

    for(let i=0; i<nbrs.length; i++){
        if(nbrs[i]===""){
            nbrs[i]="0";
        }
    }
    nbrs.forEach((nbr)=>{
        sum+=parseInt(nbr);
    });
    res.json({sum:sum});
});

app.get("/multiplication",(req,res)=>{
    let nbrs = req.query.nbrs.split("");

    for(let i=0; i<nbrs.length; i++){
        if(nbrs[i]===""){
            nbrs[i]="0";
        }
    }
    let product = 1;
    for(let i=0; i<nbrs.length;i++){
        if(nbrs[i]=="0"){
            continue;
        }
        product*=parseInt(nbrs[i]);
    }
    console.log(product);
    res.json({product:product});
});
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});