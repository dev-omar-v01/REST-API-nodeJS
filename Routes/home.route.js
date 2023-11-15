
const { getApiList } = require("../controllers/home.controller");

const router = require("express").Router();

//home route 
router.get('/',getApiList);


module.exports = router;