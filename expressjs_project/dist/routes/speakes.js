'use strict';

/**
 * Created by hoanganh on 03/08/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/speakers', function (req, res) {
    var info = '';
    dataFile.speakers.forEach(function (item) {
        info += '\n        <li>\n            <h2>' + item.name + '</h2>\n            <p>' + item.summary + '</p>\n        </li>    \n        ';
    });
    res.send('' + info);
});

router.get('/speakers/:speakersid', function (req, res) {
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakersid];
    res.send('<h1>' + speaker.title + '</h1>\n         <h2>with ' + speaker.name + '</h2>\n         <p>' + speaker.summary + '</p>\n        ');
});

module.exports = router;
//# sourceMappingURL=speakes.js.map