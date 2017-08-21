'use strict';

/**
 * Created by hoanganh on 03/08/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/speakers', function (req, res) {
    // express co ban
    // let dataFile = req.app.get('appData');
    // let info = ''
    // dataFile.speakers.forEach(function (item) {
    //     info += `
    //
    //     <li>
    //         <h2>${item.name}</h2>
    //         <img src="/images/speakers/${item.shortname}_tn.jpg" alt="item">
    //         <p>${item.summary}</p>
    //     </li>
    //     `;
    // });
    // res.send(
    //   ` <link rel="stylesheet" href="/css/style.css">
    //      <h1>Roux Academy Meetups</h1>
    //     ${info}
    //     <script src="/reload/reload.js"></script>
    //     `)
    // su dung ejs
    var data = req.app.get('appData');
    var pagePhotos = [];

    var pageSpeakers = data.speakers;
    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork); // noi voi mang
    });

    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerslist'
    });
});

router.get('/speakers/:speakersid', function (req, res) {
    // let dataFile = req.app.get('appData');
    // let speaker = dataFile.speakers[req.params.speakersid];
    // res.send(
    //     ` <link rel="stylesheet" href="/css/style.css">
    //      <h1>${speaker.title}</h1>
    //      <h2>with ${speaker.name}</h2>
    //      <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
    //      <p>${speaker.summary}</p>
    //      <script src="/reload/reload.js"></script>
    //     `);
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = [];
    data.speakers.forEach(function (item) {
        if (item.shortname == req.params.speakersid) {
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork); // noi voi mang
        }
    });

    res.render('speakers', {
        pageTitle: 'Speakers info',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakersDetail'
    });
});

module.exports = router;
//# sourceMappingURL=speakes.js.map