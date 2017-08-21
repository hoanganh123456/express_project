'use strict';

/**
 * Created by hoanganh on 03/08/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.send('<h2>Wel come to project</h2>');
});

module.exports = router;
//# sourceMappingURL=index.js.map