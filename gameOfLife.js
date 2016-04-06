//var _ = require('lodash');
var os = require("os");

function GameOfLife(){
    
}

GameOfLife.prototype.getNextGeneration = function(currentGeneration){
    return currentGeneration
};

GameOfLife.prototype.printGeneration = function(currentGeneration){
    for(var row = 0; row < currentGeneration.length; row++){
        for(var column = 0; column < currentGeneration[0].length; column++)
            process.stdout.write(currentGeneration[row][column]);

        process.stdout.write(os.EOL);
    }
};


module.exports = GameOfLife;