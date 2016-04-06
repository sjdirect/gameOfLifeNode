var config = require('./config');
var GameOfLife = require('./gameOfLife');
var gol = new GameOfLife();

var firstGeneration = [
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','*','.','.','.'],
    ['.','.','.','*','*','.','.','.'],
    ['.','.','.','.','.','.','.','.'],
];

var nextGeneration = firstGeneration;
for(var i = 1; i <= config.repititions; i++)
{
    console.log("Generation: " + i);
    gol.printGeneration(nextGeneration);

    nextGeneration = gol.getNextGeneration(nextGeneration);
}
