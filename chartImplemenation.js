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


var testConfig1 = {
    type: 'bar',
    data: {
        labels:["sum", "count"],
        datasets: [{
                label:"ინგა აკობია",
                data:[11023.31, 1],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"მამუკა ქვლივიძე",
                data:[59577.24, 2],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"მაია ჩანდიშვილი",
                data:[53377.12,1],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"შპს სპორტისთვის",
                data:[26828.98,1],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"გივი ღლონტი",
                data:[54644.07,3],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"შპს აველლანა",
                data:[31018.4,1],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"შპს აველლანა",
                data:[8500.5,1],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"ზაზა ჯაველიძე",
                data:[6201.24,2],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"ზაზა ჯაველიძე",
                data:[48626.85,5],
                backgroundColor: Array.from({length:2}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
    }
};

var testConfig2 = {
    type: 'bar',
    data: {
        labels:["ინგა აკობია","მამუკა ქვლივიძე", "მაია ჩანდიშვილი", "შპს სპორტისთვის", "გივი ღლონტი", "შპს აველლანა", "დათო კილაძე", "ზაზა ჯაველიძე", "ზაზა ჯაველიძე",],
        datasets: [{
                label:"sum",
                data:[11023.31, 59577.24, 53377.12, 26828.98, 54644.07, 31018.4, 8500.5, 6201.24, 48626.85],
                backgroundColor: Array.from({length:9}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
            {
                label:"count",
                data:[1,3,2,4,1,2,3,4,5],
                backgroundColor: Array.from({length:9}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            },
        ]
    },
    options: {
        maintainAspectRatio: false,
    }
};





function initChart(divId){
    if(chartMap.get(divId) == undefined){
        var config = JSON.parse(JSON.stringify(defaultConfig));
        var chart = new Chart(document.getElementById(divId), defaultConfig);
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

function addItem(divId, dataPoint, label){
    if(chartMap.get(divId) == undefined){
        alert("chart does not exist yet");
    }else{
        chartMap.get(divId).data.labels.push(label);
        chartMap.get(divId).data.datasets.forEach(elem =>{
            elem.data.push(dataPoint);
        })
        chartMap.get(divId).update();
        console.log(dataPoint);
    }
}

function removeItem(divId, label){
    if(chartMap.get(divId) == undefined){
        alert("chart does not exist yet");
    }else{
        var index = chartMap.get(divId).data.labels.indexOf(label);
        console.log(index);
        
        if(index >= 0){
            chartMap.get(divId).data.labels.splice(index, 1);
            console.log("test")
            chartMap.get(divId).data.datasets.forEach(elem =>{
                elem.data.splice(index, 1);
            })
            chartMap.get(divId).update();
        }else{
            alert("element does not exist");
        }
        console.log(label);
    }
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
