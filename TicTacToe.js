const prompt = require('prompt')

var player = true
var gameWon = false

var board = '0, 0, 0\n0, 0, 0\n0, 0, 0'
String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

console.log(board)
prompt.start()

const turn = () => {
  var letter = player === true ? 'X' : 'O'
  console.log(`${letter}'s turn!`)
  prompt.get(['row', 'column'], (err, results) => {
    board = board.replaceAt(Number(results.row - 1)*8 + Number(results.column - 1)*3, letter)
    player = !player
    console.log(board)
    if(!gameWon) {
      turn()
    }
  })
}

turn()
