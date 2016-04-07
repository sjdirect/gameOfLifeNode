var _           = require('lodash');
var os          = require('os');
var config      = require('./config');
var Neighbors   = require('./neighbors');

function GameOfLife(rowMax, columnMax, rules){
    rowMax = rowMax || config.maxRow;
    columnMax = columnMax || config.maxColumns;
    rowMax--;
    columnMax--;
    if(!rules)
    {
        rules = [
            require('./rules/rule1'),
            require('./rules/rule2'),
            require('./rules/rule3'),
            require('./rules/rule4')
        ];
    }

    function getNextGeneration(generation){
        var nextGeneration = generation;
        for (var row = 0; row < generation.length; row++) {
            for (var column = 0; column < generation[0].length; column++) {
                var neighbors = getNeighbors(generation, row, column);
                nextGeneration[row][column] = applyRules(generation[row][column], neighbors);
            }

            process.stdout.write(os.EOL);
        }

        return nextGeneration;
    }

    function getNeighbors(generation, row, column)
    {
        var neighbors = new Neighbors();

        //Get left and right values
        if (column > 0)
            neighbors.left = generation[row][column - 1];

        if (column < columnMax)
            neighbors.right = generation[row][column + 1];

        //Get top values
        if (row > 0)
        {
            neighbors.top = generation[row - 1][column];
            if (column > 0)
                neighbors.topLeft = generation[row - 1][column - 1];

            if (column < columnMax)
                neighbors.topRight = generation[row - 1][column + 1];
        }

        //Get bottom values
        if (row < rowMax)
        {
            neighbors.bottom = generation[row + 1][column];
            if (column > 0)
                neighbors.bottomLeft = generation[row + 1][column - 1];

            if (column < columnMax)
                neighbors.bottomRight = generation[row + 1][column + 1];
        }

        return neighbors;
    }

    function printGeneration(generation) {
        for (var row = 0; row < generation.length; row++) {
            for (var column = 0; column < generation[0].length; column++)
                process.stdout.write(generation[row][column]);

            process.stdout.write(os.EOL);
        }
    }

    function applyRules(currentCellValue, neighbors){
        var newCellValue = config.deadCell;
        _(rules).forEach(function(rule){
           if(rule.ruleApplies(currentCellValue, neighbors)){
               newCellValue = rule.newCellValue;
               return false;//break forEach
           }
        });

        return newCellValue;
    }

    return {
        getNextGeneration: getNextGeneration,
        printGeneration: printGeneration,
        applyRules: applyRules
    }

}

module.exports = GameOfLife;