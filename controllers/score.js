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
    // so this is weird but it works.
    // couldn't figure out how to get dynamic route to work in the actual route
    var word = request.body.word || request.params.word
    var locals = {}
    var title = "Score a Word!"
    var points = scrabble.score(word)

    locals.title = title
    locals.points = points

    response.render('score', locals)
  }
}

module.exports = ScoreController
