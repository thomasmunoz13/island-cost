var stats = [];

for(var i = 0; i < logs.length; ++i){
    for(var j = 0; j < logs[i].length; ++j){

        if(logs[i][j].data.cost != undefined){
            var currentAction = logs[i][j - 1].data.action;
            var is = inArray(stats, currentAction);

            if(is != -1){
                stats[is].number++;
                stats[is].count += logs[i][j].data.cost;
                
                if(stats[is].max < logs[i][j].data.cost){
                    stats[is].max = logs[i][j].data.cost;
                }

                if(stats[is].min > logs[i][j].data.cost){
                    stats[is].min = logs[i][j].data.cost;
                }
            } else {
                stats[stats.length] = {
                    'action' : currentAction,
                    'count' : logs[i][j].data.cost,
                    'number' : 1, 
                    'max' : logs[i][j].data.cost,
                    'min' : logs[i][j].data.cost
                };
            }
        }
    }
}
    computeAverage(stats);


    function inArray(array, value){
        for(var i = 0; i < array.length; ++i){
            if(array[i].action == value) return i;
        }

        return -1;
    };

    function computeAverage(array){
        array.forEach(function(current, index){
            var average = current.count / current.number;
   
            console.log('# ' + current.action);
            console.log('--> Average = ' + average)
            console.log('--> Maximum = ' + current.max);
            console.log('--> Minimum = ' + current.min);     
        });
    };
