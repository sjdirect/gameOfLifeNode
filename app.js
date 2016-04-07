var GameOfLife  = require('./gameOfLife');
var gol         = new GameOfLife();

var firstGeneration = [
    ['.','.','.','.','.','.','.','.'],
    ['.','.','.','.','*','.','.','.'],
    ['.','.','.','*','*','.','.','.'],
    ['.','.','.','.','.','.','.','.']
];

console.log("Generation: 1");
gol.printGeneration(firstGeneration);

var nextGeneration = gol.getNextGeneration(firstGeneration);
console.log("Generation: 2");
gol.printGeneration(nextGeneration);