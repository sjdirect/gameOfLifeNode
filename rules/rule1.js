var config = require('../config');

module.exports = {
    ruleApplies: function(currentCellValue, neighbors){
        var liveNeighborsCount = neighbors.getLiveCount();
        return (currentCellValue == config.liveCell && liveNeighborsCount < 2);        
    },
    newCellValue:config.deadCell
};