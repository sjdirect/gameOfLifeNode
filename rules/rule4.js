var config = require('../config');

module.exports = {
    ruleApplies: function(currentCellValue, neighbors){
        var liveNeighborsCount = neighbors.getLiveCount();
        return (currentCellValue == config.deadCell && liveNeighborsCount == 3);
    },
    newCellValue:config.liveCell
};