'use strict';

/**
 * Created by hoanganh on 03/08/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/feedback', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork); // noi voi mang
    });

    // res.send(`
    //        <link rel="stylesheet" href="css/style.css">
    //        <h1>Welcome to web express rat la hay va tuyet</h1>
    //        <img src="./images/misc/background.jpg" alt="background">
    //        <p>OK toi lam duoc roi</p>
    //        <script src="/reload/reload.js"></script>
    // `);
    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback'
    });
});
module.exports = router;
//# sourceMappingURL=feedback.js.map