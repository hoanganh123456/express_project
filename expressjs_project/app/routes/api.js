/**
 * Created by hoanganh on 07/08/2017.
 */
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const feedbackData = require('../data/feedback.json');


router.get('/api',function (req,res) {
    res.json(feedbackData);
});
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/api',function (req,res) {
   feedbackData.unshift(req.body);
    fs.writeFile('app/data/feedback.json',JSON.stringify(feedbackData),'utf8',
    function (err) {
        if(err) {
            console.log(err);
        }
    });
   res.json(feedbackData);
});

router.delete('/api/:id',function (req,res) {
    feedbackData.splice(req.params.id,1);
    fs.writeFile('app/data/feedback.json',JSON.stringify(feedbackData),'utf8',
        function (err) {
            if(err) {
                console.log(err);
            }
        });
    res.json(feedbackData);
});

module.exports = router;