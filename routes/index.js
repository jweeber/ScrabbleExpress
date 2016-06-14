var express = require('express')
var router = express.Router()
var Chart = require('../controllers/chart')
var Score = require('../controllers/score')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrabble Scoring!' })
})

router.get('/chart', Chart.getChart)
router.get('/score', Score.getWord)
router.post('/score', Score.getScore)
router.get('/score/:word', Score.getWord)
router.post('/score/:word', Score.getScore)


module.exports = router;
