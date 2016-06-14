var Scrabble = require("../lib/scrabble")
var scrabble = new Scrabble

var ScoreController = {

  getWord: function (request, response) {
    var locals = {}
    var title = "Score a Word!"
    locals.title = title

    response.render('score', locals)
  },

  getScore: function (request, response) {
    var word = request.body.word
    var locals = {}
    var title = "Score a Word!"
    var points = scrabble.score(word)

    locals.title = title
    locals.points = points
    locals.word = word

    response.render('score', locals)
  }
}

module.exports = ScoreController