/* access contol allow origin */
/* check cross origin resource sharing to get around same origin policy */
/* access-control-allow-origin */ /* this means the server can allow cross origin requests 8?
/* the above is on the SERVER level so this is in assignment number 3 */

/* infoWindow is a bad variable name as we may have many ? */
var map, infoWindow, localLat, localLong;
var yourIcon, sstatIcon, andrwIcon, portrIcon, harsqIcon, jfkIcon, shmnlIcon, pktrmIcon, brdwyIcon, nqncyIcon, smmnlIcon, davisIcon, alfclIcon, knnclIcon, chmnlIcon, dwnxgIcon, qnctrIcon, asmnlIcon, wlstaIcon, fldcrIcon, cntsqIcon, brntnIcon;
var sstatLl = [42.352271, -71.05524200000001];
var andrwLl = [42.330154, -71.057655];
var portrLl = [42.3884, -71.11914899999999];
var harsqLl = [42.373362, -71.118956];
var jfkLl   = [42.320685, -71.052391];
var shmnlLl = [42.31129, -71.053331];
var pktrmLl = [42.35639457, -71.0624242];
var brdwyLl = [42.342622, -71.056967];
var nqncyLl = [42.275275, -71.029583];
var smmnlLl = [42.29312583, -71.06573796000001];
var davisLl = [42.39674, -71.121815];
var alfclLl = [42.395428, -71.142483];
var knnclLl = [42.36249079, -71.08617653];
var chmnlLl = [42.361166, -71.070628];
var dwnxgLl = [42.355518, -71.060225];
var qnctrLl = [42.251809, -71.005409];
var qamnlLl = [42.233391, -71.007153];
var asmnlLl = [42.284652, -71.06448899999999];
var wlstaLl = [42.2665139, -71.0203369];
var fldcrLl = [42.300093, -71.061667];
var cntsqLl = [42.365486, -71.103802];
var brntnLl = [42.2078543, -71.0011385];

var redlineCoords1 = [];
var redLineCoords2 = [];

function testJSON(data){
    var logString = data;
    console.log(logString);
    console.log("yeey");

}

function testXMLHttpRequest(){
    var requestURL = "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-davis";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        var responseData = request.response;
        testJSON(responseData)
    }
}

function nearestStation(){
    console.log("clikkk");
}

function stationData(stopID) {
    console.log(stopID);
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
            nearestStation();
        });

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
            stationData("place-sstat");
    });

    andrwIcon = new google.maps.Marker({
        position: {lat: andrwLl[0], lng: andrwLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Andrew'
    });
    andrwIcon.addListener('click', function() {
            stationData("place-andrw");
    });

    portrIcon = new google.maps.Marker({
        position: {lat: portrLl[0], lng: portrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Porter Square'
    });
    portrIcon.addListener('click', function() {
            stationData("place-portr");
    });

    harsqIcon = new google.maps.Marker({
        position: {lat: harsqLl[0], lng:  harsqLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Harvard Square'
    });
    harsqIcon.addListener('click', function() {
            stationData("place-harsq");
    });

    jfkIcon = new google.maps.Marker({
        position: {lat: jfkLl[0], lng: jfkLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'JFK/UMass'
    });
    jfkIcon.addListener('click', function() {
            stationData("place-jfk");
    });

    shmnlIcon = new google.maps.Marker({
        position: {lat:  shmnlLl[0], lng: shmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Savin Hill'
    });
    shmnlIcon.addListener('click', function() {
            stationData("place-shmnl");
    });

    pktrmIcon = new google.maps.Marker({
        position: {lat: pktrmLl[0], lng: pktrmLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Park Street'
    });
    pktrmIcon.addListener('click', function() {
            stationData("place-pktrm");
    });

    brdwyIcon = new google.maps.Marker({
        position: {lat: brdwyLl[0], lng: brdwyLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Broadway'
    });
    brdwyIcon.addListener('click', function() {
            stationData("place-brdwy");
    });

    nqncyIcon = new google.maps.Marker({
        position: {lat: nqncyLl[0], lng: nqncyLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'North Quincy'
    });
    nqncyIcon.addListener('click', function() {
            stationData("place-nqncy");
    });

    smmnlIcon = new google.maps.Marker({
        position: {lat: smmnlLl[0], lng: smmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Shawmut'
    });
    nqncyIcon.addListener('click', function() {
            stationData("place-nqncy");
    });

    davisIcon = new google.maps.Marker({
        position: {lat: davisLl[0], lng: davisLl[1]},
        icon: iconImageData,
        shape: iconShapeData,
        map: map,
        title: 'Davis'
    });
    davisIcon.addListener('click', function() {
            stationData("place-davis");
    });

    alfclIcon = new google.maps.Marker({
        position: {lat: alfclLl[0], lng: alfclLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Alewife'
    });
    alfclIcon.addListener('click', function() {
            stationData("place-alfcl");
    });

    knnclIcon = new google.maps.Marker({
        position: {lat: knnclLl[0], lng:  knnclLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Kendall/MIT'
    });
    knnclIcon.addListener('click', function() {
            stationData("place-knncl");
    });

    chmnlIcon = new google.maps.Marker({
        position: {lat: chmnlLl[0], lng: chmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Charles/MGH'
    });
    chmnlIcon.addListener('click', function() {
            stationData("place-chmnl");
    });

    dwnxgIcon = new google.maps.Marker({
        position: {lat: dwnxgLl[0], lng: dwnxgLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Downtown Crossing'
    });
    dwnxgIcon.addListener('click', function() {
            stationData("place-dwnxg");
    });

    qnctrIcon = new google.maps.Marker({
        position: {lat: qnctrLl[0], lng: qnctrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Center'
    });
    qnctrIcon.addListener('click', function() {
            stationData("place-qnctr");
    });

    qamnlIcon = new google.maps.Marker({
        position: {lat: qamnlLl[0], lng: qamnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Adams'
    });
    qamnlIcon.addListener('click', function() {
            stationData("place-qamnl");
    });

    asmnlIcon = new google.maps.Marker({
        position: {lat: asmnlLl[0], lng: asmnlLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Ashmont'
    });
    asmnlIcon.addListener('click', function() {
            stationData("place-asmnl");
    });

    wlstaIcon = new google.maps.Marker({
        position: {lat: wlstaLl[0], lng: wlstaLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Wollaston'
    });
    wlstaIcon.addListener('click', function() {
            stationData("place-wlsta");
    });

    fldcrIcon = new google.maps.Marker({
        position: {lat: fldcrLl[0], lng: fldcrLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Fields Corner'
    });
    fldcrIcon.addListener('click', function() {
            stationData("place-fldcr");
    });

    cntsqIcon = new google.maps.Marker({
        position: {lat: cntsqLl[0], lng: cntsqLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Central Square '
    });
    cntsqIcon.addListener('click', function() {
            stationData("place-cntsq");
    });

    brntnIcon = new google.maps.Marker({
        position: {lat: brntnLl[0], lng: brntnLl[1]},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Braintree'
    });
    brntnIcon.addListener('click', function() {
            stationData("place-brntn");
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

testXMLHttpRequest()
