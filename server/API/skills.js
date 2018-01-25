var express = require('express');
var skillDb = require('../models/SkillsDb')
var router = express.Router();
router.get('/skills', function (req, res, next) {
    skillDb.findallskills(function (err, skills) {
        if (err) {
            res.json(err);
        }
        res.json(skills)
    });
});
module.exports = router;
