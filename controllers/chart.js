var Scrabble = require("../lib/scrabble")
scrabble = new Scrabble

var ChartController = {

  getChart: function (request, response) {
    var locals = {}

    // var letters = Object.keys(scrabble.scoreChart)

    locals.scoring = scrabble.scoreChart
    locals.letters = Object.keys(locals.scoring)
    // locals.points = points
    locals.bonus = scrabble.bonus
    locals.title = "Scrabble Scoring Chart!"

    response.render('chart', locals)
  }
}

module.exports = ChartController;
