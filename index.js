const express = require('express');
const homeRouter = require("./Routes/home.route");
const path = require('path');
const { error } = require('console');
const app = express();
const PORT = 3000;

// Set the directory for static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'views')));


// home router difine 
app.use(homeRouter);

//validator route
app.use((err,req,res,next)=>{
  res.send("Route is not Fount 404")
});

app.listen(PORT,()=>{
    console.log(`Server is Running at http:localhost:${PORT}`);
});