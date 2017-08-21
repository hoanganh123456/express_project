/**
 * Created by hoanganh on 03/08/2017.
 */
const express = require('express')
const router = express.Router();


router.get('/chat',function (req,res) {


    // res.send(`
    //        <link rel="stylesheet" href="css/style.css">
    //        <h1>Welcome to web express rat la hay va tuyet</h1>
    //        <img src="./images/misc/background.jpg" alt="background">
    //        <p>OK toi lam duoc roi</p>
    //        <script src="/reload/reload.js"></script>
    // `);
    res.render('chat',{
        pageTitle: 'Chat',
        pageID: 'chat'
    });
});
module.exports = router;