var map, infoWindow, localLat, localLong;
var yourIcon, sstatIcon, andrwIcon, portrIcon, harsqIcon, jfkIcon, shmnlIcon, pktrmIcon, brdwyIcon, nqncyIcon, smmnlIcon, davisIcon, alfclIcon, knnclIcon, chmnlIcon, dwnxgIcon, qnctrIcon, asmnlIcon, wlstaIcon, fldcrIcon, cntsqIcon, brntnIcon;
var sstatLl = [42.352271, -71.05524200000001, "place-sstat", "South Station"];
var andrwLl = [42.330154, -71.057655, "place-andrw", "Andrew"];
var portrLl = [42.3884, -71.11914899999999, "place-portr", "Porter Square"];
var harsqLl = [42.373362, -71.118956, "place-harsq", "Harvard Square"];
var jfkLl   = [42.320685, -71.052391, "place-jfk", "JFK/UMass"];
var shmnlLl = [42.31129, -71.053331, "place-shmnl", "Savin Hill"];
var pktrmLl = [42.35639457, -71.0624242, "place-pktrm", "Park Street"];
var brdwyLl = [42.342622, -71.056967, "place-brdwy", "Broadway"];
var nqncyLl = [42.275275, -71.029583, "place-nqncy", "North Quincy"];
var smmnlLl = [42.29312583, -71.06573796000001, "place-smmnl", "Shawmut"];
var davisLl = [42.39674, -71.121815, "place-davis", "Davis"];
var alfclLl = [42.395428, -71.142483, "place-alfcl", "Alewife"];
var knnclLl = [42.36249079, -71.08617653, "place-knncl", "Kendall/MIT"];
var chmnlLl = [42.361166, -71.070628, "place-chmnl", "Charles/MGH"];
var dwnxgLl = [42.355518, -71.060225, "place-dwnxg", "Downtown Crossing"];
var qnctrLl = [42.251809, -71.005409, "place-qnctr", "Quincy Center"];
var qamnlLl = [42.233391, -71.007153, "place-qamnl", "Quincy Adams"];
var asmnlLl = [42.284652, -71.06448899999999, "place-asmnl", "Ashmont"];
var wlstaLl = [42.2665139, -71.0203369, "place-wlsta", "Wollaston"];
var fldcrLl = [42.300093, -71.061667, "place-fldcr", "Fields Corner"];
var cntsqLl = [42.365486, -71.103802, "place-cntsq", "Central Square"];
var brntnLl = [42.2078543, -71.0011385, "place-brntn", "Braintree"];
var locations = [sstatLl, andrwLl, portrLl, harsqLl, jfkLl, shmnlLl, pktrmLl, brdwyLl, nqncyLl, smmnlLl, davisLl, alfclLl, knnclLl, chmnlLl, dwnxgLl, qnctrLl, qamnlLl, asmnlLl, wlstaLl, fldcrLl, cntsqLl, brntnLl];

var redlineCoords1 = [];
var redLineCoords2 = [];

function makeSchedule(stopData, someIcon){
    var inOut = ["Southbound", "Northbound"];
    var i;
    var content = '<div id="clickedStation"><h2>Next 10 Trains</h2>';
    for (i = 0; i < 10; i++) {
        stopNum = i+1;

        content += '<div><h3>' + 
        stopNum + 
        '</h3><h4>Arrives:</h4> ' + 
        stopNum + stopData.data[0].attributes.arrival_time + 
        ' <h4>Departs:</h4>' + stopData.data[0].attributes.departure_time + 
        ' ' + 
        inOut[stopData.data[0].attributes.direction_id] +
        '</div>';
    }
    content += '</div>';

    infoWindow.setContent(content);
    infoWindow.open(map, someIcon);

}

/* Code from https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript */
function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if(isMiles) d /= 1.60934;

  return d;
}

function nearestStation(){
    localCoords = [localLat, localLong];
    var closest;
    var closeDistance = -1;
    var closestIndex = 0;
    var i; 
    for (i = 0; i < locations.length; i++) {
        if (closeDistance == -1) {
            closest = locations[i][2];
            closeDistance = haversineDistance(localCoords, locations[i], true);
            closestIndex = i;
        }
        else {
            tempDist = haversineDistance(localCoords, locations[i], true);
            if (tempDist < closeDistance) {
                closeDistance = tempDist;
                closest = locations[i][2];
                closestIndex = i;
            }
        }
    }
    return locations[closestIndex];
}

function nearestInfo(){
    closestStation = nearestStation();
    milesAway = haversineDistance(localCoords, closestStation, true);
    var contentString = '<div id="content">' + 
    '<div id="Station Name">' + 
    '<h1>' + 
    'Closest Station: ' + 
    closestStation[3] + 
    '</h1>' +
    '</div>' +
    '<div id="Distance">' +
    '<h2>' +
    milesAway +
    ' miles away!' + 
    '</h2>' +
    '</div>' +
    '</div>';
    infoWindow.setContent(contentString);
    infoWindow.open(map, yourIcon);
}

function nearestPoly() {
    closestStation = nearestStation();
    nearestPathCoords = [
        {lat: closestStation[0], lng: closestStation[1]}, 
        {lat: localLat, lng: localLong}
    ];
        
    var nearestPath = new google.maps.Polyline({
        path: nearestPathCoords,
        geodesic: true,
        strokeColor: '#BA5211',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    nearestPath.setMap(map);
}

function stationData(stopID, someIcon) {
    var requestURL = "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=";
    requestURL += stopID;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        var responseData = request.response;
        makeSchedule(responseData, someIcon)
    }
}

function initMap() {
/* center on south station */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.352271, lng: -71.05524200000001},
        zoom: 12
    });

    infoWindow = new google.maps.InfoWindow;


    /*
     * The following "get current location" code is from the
     * Google Maps tutorial on finding your location found here:
     * https://developers.google.com/maps/documentation/javascript/geolocation
     */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }; /* get the lat and lng of your location */
        localLat = position.coords.latitude;
        localLong = position.coords.longitude;
        map.setCenter(pos); /* set center where you are */ 
        yourIcon = new google.maps.Marker({
            position: {lat: localLat, lng: localLong },
            map: map,
            title: 'Your Location'
        });

        yourIcon.addListener('click', function() {
            nearestInfo();
        });

        nearestPoly();

            }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
    }
    else {
         // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }



    /* 
    * code for creating icons grabbed from google tutorial site: 
    * https://developers.google.com/maps/documentation/javascript/markers 
    */
    iconImageData = {
        url: 'https://cdn130.picsart.com/272354380029211.png?c256x256',
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 30)
    };

    iconShapeData = {
        coords: [1, 1, 1, 30, 30, 30, 30, 1],
        type: 'poly'
    };

    sstatIcon = new google.maps.Marker({
        position: {lat: sstatLl[0], lng: sstatLl[1] },
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'South Station'
     });
    sstatIcon.addListener('click', function() {
            stationData("place-sstat", this);
    });

    andrwIcon = new google.maps.Marker({
        position: {lat: andrwLl[0], lng: andrwLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Andrew'
    });
    andrwIcon.addListener('click', function() {
            stationData("place-andrw", this);
    });

    portrIcon = new google.maps.Marker({
        position: {lat: portrLl[0], lng: portrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Porter Square'
    });
    portrIcon.addListener('click', function() {
            stationData("place-portr", this);
    });

    harsqIcon = new google.maps.Marker({
        position: {lat: harsqLl[0], lng:  harsqLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Harvard Square'
    });
    harsqIcon.addListener('click', function() {
            stationData("place-harsq", this);
    });

    jfkIcon = new google.maps.Marker({
        position: {lat: jfkLl[0], lng: jfkLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'JFK/UMass'
    });
    jfkIcon.addListener('click', function() {
            stationData("place-jfk", this);
    });

    shmnlIcon = new google.maps.Marker({
        position: {lat:  shmnlLl[0], lng: shmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Savin Hill'
    });
    shmnlIcon.addListener('click', function() {
            stationData("place-shmnl", this);
    });

    pktrmIcon = new google.maps.Marker({
        position: {lat: pktrmLl[0], lng: pktrmLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Park Street'
    });
    pktrmIcon.addListener('click', function() {
            stationData("place-pktrm", this);
    });

    brdwyIcon = new google.maps.Marker({
        position: {lat: brdwyLl[0], lng: brdwyLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Broadway'
    });
    brdwyIcon.addListener('click', function() {
            stationData("place-brdwy", this);
    });

    nqncyIcon = new google.maps.Marker({
        position: {lat: nqncyLl[0], lng: nqncyLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'North Quincy'
    });
    nqncyIcon.addListener('click', function() {
            stationData("place-nqncy", this);
    });

    smmnlIcon = new google.maps.Marker({
        position: {lat: smmnlLl[0], lng: smmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Shawmut'
    });
    smmnlIcon.addListener('click', function() {
            stationData("place-smmnl", this);
    });

    davisIcon = new google.maps.Marker({
        position: {lat: davisLl[0], lng: davisLl[1]},
        icon: iconImageData,
        shape: iconShapeData,
        map: map,
        title: 'Davis'
    });
    davisIcon.addListener('click', function() {
            stationData("place-davis", this);
    });

    alfclIcon = new google.maps.Marker({
        position: {lat: alfclLl[0], lng: alfclLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Alewife'
    });
    alfclIcon.addListener('click', function() {
            stationData("place-alfcl", this);
    });

    knnclIcon = new google.maps.Marker({
        position: {lat: knnclLl[0], lng:  knnclLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Kendall/MIT'
    });
    knnclIcon.addListener('click', function() {
            stationData("place-knncl", this);
    });

    chmnlIcon = new google.maps.Marker({
        position: {lat: chmnlLl[0], lng: chmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Charles/MGH'
    });
    chmnlIcon.addListener('click', function() {
            stationData("place-chmnl", this);
    });

    dwnxgIcon = new google.maps.Marker({
        position: {lat: dwnxgLl[0], lng: dwnxgLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Downtown Crossing'
    });
    dwnxgIcon.addListener('click', function() {
            stationData("place-dwnxg", this);
    });

    qnctrIcon = new google.maps.Marker({
        position: {lat: qnctrLl[0], lng: qnctrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Center'
    });
    qnctrIcon.addListener('click', function() {
            stationData("place-qnctr", this);
    });

    qamnlIcon = new google.maps.Marker({
        position: {lat: qamnlLl[0], lng: qamnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Adams'
    });
    qamnlIcon.addListener('click', function() {
            stationData("place-qamnl", this);
    });

    asmnlIcon = new google.maps.Marker({
        position: {lat: asmnlLl[0], lng: asmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Ashmont'
    });
    asmnlIcon.addListener('click', function() {
            stationData("place-asmnl", this);
    });

    wlstaIcon = new google.maps.Marker({
        position: {lat: wlstaLl[0], lng: wlstaLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Wollaston'
    });
    wlstaIcon.addListener('click', function() {
            stationData("place-wlsta", this);
    });

    fldcrIcon = new google.maps.Marker({
        position: {lat: fldcrLl[0], lng: fldcrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Fields Corner'
    });
    fldcrIcon.addListener('click', function() {
            stationData("place-fldcr", this);
    });

    cntsqIcon = new google.maps.Marker({
        position: {lat: cntsqLl[0], lng: cntsqLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Central Square '
    });
    cntsqIcon.addListener('click', function() {
            stationData("place-cntsq", this);
    });

    brntnIcon = new google.maps.Marker({
        position: {lat: brntnLl[0], lng: brntnLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Braintree'
    });
    brntnIcon.addListener('click', function() {
            stationData("place-brntn", this);
    });


    redLineCoords1 = [
        {lat: alfclLl[0], lng: alfclLl[1]},
        {lat: davisLl[0], lng: davisLl[1]},
        {lat: portrLl[0], lng: portrLl[1]},
        {lat: harsqLl[0], lng: harsqLl[1]},
        {lat: cntsqLl[0], lng: cntsqLl[1]},
        {lat: knnclLl[0], lng: knnclLl[1]},
        {lat: chmnlLl[0], lng: chmnlLl[1]},
        {lat: pktrmLl[0], lng: pktrmLl[1]},
        {lat: dwnxgLl[0], lng: dwnxgLl[1]},
        {lat: sstatLl[0], lng: sstatLl[1]},
        {lat: brdwyLl[0], lng: brdwyLl[1]},       
        {lat: andrwLl[0], lng: andrwLl[1]},
        {lat: jfkLl[0], lng: jfkLl[1]},     
        {lat: shmnlLl[0], lng: shmnlLl[1]},
        {lat: fldcrLl[0], lng: fldcrLl[1]},
        {lat: smmnlLl[0], lng: smmnlLl[1]},
        {lat: asmnlLl[0], lng: asmnlLl[1]}
    ];

    redLineCoords2 = [
        {lat: jfkLl[0], lng: jfkLl[1]},
        {lat: nqncyLl[0], lng: nqncyLl[1]},
        {lat: wlstaLl[0], lng: wlstaLl[1]},
        {lat: qnctrLl[0], lng: qnctrLl[1]},
        {lat: qamnlLl[0], lng: qamnlLl[1]},
        {lat: brntnLl[0], lng: brntnLl[1]}
    ];

    var redLinePath1 = new google.maps.Polyline({
        path: redLineCoords1,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    var redLinePath2 = new google.maps.Polyline({
        path: redLineCoords2,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 4
    });

    redLinePath1.setMap(map);
    redLinePath2.setMap(map);


}
