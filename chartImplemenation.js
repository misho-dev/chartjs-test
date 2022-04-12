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


function initChart(){
    if(chartMap.get("myChart") == undefined){
        var config = JSON.parse(JSON.stringify(defaultConfig));
        var chart = new Chart(document.getElementById("myChart"), config);
        console.log(defaultConfig);
        chartMap.set("myChart", chart);
    }else{
        alert("chart already exists");
    }

}

function destroyChart(){
    if(chartMap.get("myChart") == undefined){
        alert("chart does not exist yet");
    }else{
        chartMap.get("myChart").destroy();
        chartMap.delete("myChart");
    }
    
}

function addItem(dataPoint, label){

}

function removeItem(dataPoint){

}

function changeType(type){
    if(chartMap.get("myChart") == undefined){
        alert("chart does not exist yet");
    }else{
        var currentConfig = chartMap.get("myChart").config;
        currentConfig.type = type;
        destroyChart("myChart");
        chartMap.delete("myChart");
        var chart = new Chart(document.getElementById("myChart"), currentConfig);
        chartMap.set("myChart", chart);
    }
    
}

function replaceData(){
    if(chartMap.get("myChart") == undefined){
        alert("chart does not exist yet");
    }else{
        var data1 = Array.from({length: 20}, () => Math.floor(Math.random() * 40));
        var label1 = data1;
        var bacgroundColors = Array.from({length:data1.length}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16));
        var newData = {
            labels: label1,
            datasets:[{
                label: "data",
                data: data1,
                backgroundColor: bacgroundColors,
            }]
        };
        chartMap.get("myChart").config.data = newData;
        chartMap.get("myChart").update();
    }
}