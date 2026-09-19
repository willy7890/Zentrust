import express from "express";


const app= express();
app.use(express.json());

app.get("/",async(req,res)=>{
    res.json({
        status:"Ok",
        message:"API is runnng",
    });
});

export default app;


  