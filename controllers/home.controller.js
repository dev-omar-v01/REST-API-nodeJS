
const path  = require('path');
//get all api list controller
const getApiList = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};



module.exports = { getApiList};