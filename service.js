
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFvMTgyIiwiYSI6ImNsZXBlcXdpczBicGEzcW83aWwzNjBpd2kifQ.6ziaeLPI7eab1oygQc7oRg';
//地图填充盒子
var map = new mapboxgl.Map({
    container: 'map',
    projection: 'mercator',
    style: 'mapbox://styles/bao182/clgg5pq79000k01lnpnysz4i8', // replace with your own Mapbox style URL
    center: [110,30.9], // replace with the coordinates of the center point of your map
    zoom: 2.9 // replace with the initial zoom level of your map
});

// 这个代码块中的map是一个Mapbox地图对象，在地图加载完毕之后，
// 使用map.on()方法监听了load事件，当地图加载完成后，会执行回调函数，即箭头函数() 
// => { // the rest of the code will go in here }中的代码，
// 这里可以编写需要在地图加载完成之后执行的代码。
map.on('load', () => {
    // 提供默认指针光标，箭头指针
    // map.getCanvas().style.cursor = 'pointer';
    
    //set map bounds to JS
    // 相比于setcentre和setzoom更加平滑，不用设置zoom
    map.fitBounds([
    [115.5, 35.5],
    [122.5, 30.5]
    ]);

    // define layer names
    const layers = [
    '18970-23958',
    '13982-18970',
    '11488-13982',
    '8994-11488',
    '6500-8994',
    '4005-6500'
    ];
    const colors = [
    '#d73027',
    '#fee090',
    '#ffffbf',
    '#e0f3f8',
    '#91bfdb',
    '#4575b4'
    ];
    
    // create legend
    const legend = document.getElementById('legend');
    
    layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');

    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
    
    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
    });
    
    // change info window on hover
    map.on('mousemove', (event) => {
    const states = map.queryRenderedFeatures(event.point, {
    layers: ['output-gdp']
    });
    document.getElementById('pd').innerHTML = states.length
    ? `<h3>${states[0].properties.name}</h3>
        <p><strong>
            <em>${states[0].properties.GDP}
        </strong> people per square mile</em></p>`
    : `<p>Hover over a state!</p>`;

    //显示坐标
    const lngLat = event.lngLat;
    document.getElementById('coordinates').innerHTML=
    `Lon: ${lngLat.lng}, Lat: ${lngLat.lat}`
    });
});

//作用函数
function zoomtoJS() {
    map.fitBounds([
    [115.5, 35.5],
    [122.5, 30.5]
    ]);
}
function zoomtoChina(){
    map.fitBounds([
    [70, 55],
    [140, 2]
    ]);
}
function StarrySky(){
    map.setStyle('mapbox://styles/bao182/clezql8zb000q01oblq6b2egr');
}
function StarrySkyEX(){
    map.setStyle('mapbox://styles/bao182/clgg44whl002q01pkai118y1f');
}
function GrandCanal(){
    map.setStyle('mapbox://styles/bao182/clfne770n000j01mchycyi4eu');
}
function ChoroplethMap(){
    map.setStyle('mapbox://styles/bao182/clgg5pq79000k01lnpnysz4i8');
}