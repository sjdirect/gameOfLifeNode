var config = require('./config');

function Neighbors(){
    this.left = null;
    this.right = null;

    this.top = null;
    this.topRight = null;
    this.topLeft = null;

    this.bottom = null;
    this.bottomRight = null;
    this.bottomLeft = null;

    this.getLiveCount = function(){
        var count = 0;
        for(var key in this){
            if(this.hasOwnProperty(key) && this[key] == config.liveCell)
                count++;
        }

        return count;
    }
}

module.exports = Neighbors;