var Scrabble = function() {}

Scrabble.prototype = {

  scoreChart: {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
    "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
    "Q": 10, "Z": 10
  },

  bonus: 50,

  score: function (word) {
    if (word.length > 7) {
      // also couldn't figure out error handling in express, 
      // so I'm just full of shortcuts tonight. Like returning errors here.
      return "You can only enter a word up to seven letters long."
    }

    if (word.match(/^[A-z]+$/)) {
      var word = word.toUpperCase()
      var points = 0
      if (word.length === 7) {
        points += this.bonus
      } 

      for (var letter of word) {
        points += this.scoreChart[letter]
      }

      return points

    } else {
      return "That is not valid input!"
    }
  }
}

module.exports = Scrabble