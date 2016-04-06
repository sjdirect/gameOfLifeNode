//var _ = require('lodash');

function GameOfLife(){
    
}

GameOfLife.prototype.getNextGeneration = function(currentGeneration){
    return currentGeneration
};

GameOfLife.prototype.printGeneration = function(currentGeneration){
    for(var i = 0; i < currentGeneration.length; i++)
        console.log(currentGeneration[i])

};


module.exports = GameOfLife;