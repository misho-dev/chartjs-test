var chartMap = new Map();
var colors =  ['rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',]

var defaultConfig = {
    type: 'bar',
    data: {
        labels:[],
        datasets: [{
            label:"",
            data:[],
            backgroundColor: colors,
        }]
    },
    options: {
        maintainAspectRatio: false,
    }
};


function initChart(divId){
    if(chartMap.get(divId) == undefined){
        var config = JSON.parse(JSON.stringify(defaultConfig));
        var chart = new Chart(document.getElementById(divId), config);
        console.log(defaultConfig);
        chartMap.set(divId, chart);
    }else{
        alert("chart already exists");
    }

}

function destroyChart(divId){
    if(chartMap.get(divId) == undefined){
        alert("chart does not exist yet");
    }else{
        chartMap.get(divId).destroy();
        chartMap.delete(divId);
    }
    
}

function addItem(dataPoint, label){

}

function removeItem(dataPoint){

}

function changeType(divId, type){
    if(chartMap.get(divId) == undefined){
        alert("chart does not exist yet");
    }else{
        var currentConfig = chartMap.get(divId).config;
        currentConfig.type = type;
        destroyChart(divId);
        chartMap.delete(divId);
        var chart = new Chart(document.getElementById(divId), currentConfig);
        chartMap.set(divId, chart);
    }
    
}

function replaceData(divId, labelsParam, dataParam, datasetName){

        var bacgroundColors = Array.from({length:dataParam.length}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16));
        var newData = {
            labels: labelsParam,
            datasets:[{
                label: datasetName,
                data: dataParam,
                backgroundColor: bacgroundColors,
            }]
        };
        chartMap.get(divId).config.data = newData;
        chartMap.get(divId).update();
}