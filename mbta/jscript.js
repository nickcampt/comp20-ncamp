/* access contol allow origin */
/* check cross origin resource sharing to get around same origin policy */
/* access-control-allow-origin */ /* this means the server can allow cross origin requests 8?
/* the above is on the SERVER level so this is in assignment number 3 */

/* infoWindow is a bad variable name as we may have many ? */
var map, infoWindow, localLat, localLong;
var yourIcon, sstatIcon, andrwIcon, portrIcon, harsqIcon, jfkIcon, shmnlIcon, pktrmIcon, brdwyIcon, nqncyIcon, smmnlIcon, davisIcon, alfclIcon, knnclIcon, chmnlIcon, dwnxgIcon, qnctrIcon, asmnlIcon, wlstaIcon, fldcrIcon, cntsqIcon, brntnIcon;



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
            };
        localLat = position.coords.latitude;
        localLong = position.coords.longitude;
        infoWindow.setPosition(pos); /* remove this from here and use for on icon click */
        infoWindow.setContent('Run.');
        infoWindow.open(map);
        map.setCenter(pos);
            }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
    }
    else {
         // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

  /* 
   * code grabbed from google tutorial site: 
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

    yourIcon = new google.maps.Marker({
        position: {lat: localLat, lng: localLong },
        map: map,
        title: 'Your Location'
    });

    sstatIcon = new google.maps.Marker({
        position: {lat: 42.352271, lng: 71.05524200000001 },
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'South Station'
     });

    andrwIcon = new google.maps.Marker({
        position: {lat: 42.330154, lng: -71.057655},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Andrew'
    });

    portrIcon = new google.maps.Marker({
        position: {lat: 42.3884, lng: -71.11914899999999},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Porter Square'
    });

    harsqIcon = new google.maps.Marker({
        position: {lat: 42.373362, lng:  -71.118956},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Harvard Square'
    });

    jfkIcon = new google.maps.Marker({
        position: {lat: 42.320685, lng: -71.052391},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'JFK/UMass'
    });

    shmnlIcon = new google.maps.Marker({
        position: {lat:  42.31129, lng: -71.053331},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Savin Hill'
    });

    pktrmIcon = new google.maps.Marker({
        position: {lat: 42.35639457, lng: -71.0624242},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Park Street'
    });

    brdwyIcon = new google.maps.Marker({
        position: {lat: 42.342622, lng: -71.056967},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Broadway'
    });

    nqncyIcon = new google.maps.Marker({
        position: {lat: 42.275275, lng: -71.029583},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'North Quincy'
    });

    smmnlIcon = new google.maps.Marker({
        position: {lat: 42.29312583, lng: -71.06573796000001},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Shawmut'
    });

    davisIcon = new google.maps.Marker({
        position: {lat: 42.39674, lng: -71.121815},
        map: map,
        title: 'Davis'
    });

    alfclIcon = new google.maps.Marker({
        position: {lat: 42.395428, lng: -71.142483},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Alewife'
    });

    knnclIcon = new google.maps.Marker({
        position: {lat: 42.36249079, lng:  -71.08617653},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Kendall/MIT'
    });

    chmnlIcon = new google.maps.Marker({
        position: {lat: 42.361166, lng: -71.070628},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Charles/MGH'
    });

    dwnxgIcon = new google.maps.Marker({
        position: {lat: 42.355518, lng: -71.060225},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Downtown Crossing'
    });

    qnctrIcon = new google.maps.Marker({
        position: {lat: 42.251809, lng:- 71.005409},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Center'
    });

    qamnlIcon = new google.maps.Marker({
        position: {lat: 42.233391, lng: -71.007153},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Adams'
    });

    asmnlIcon = new google.maps.Marker({
        position: {lat: 42.284652, lng: -71.06448899999999},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Ashmont'
    });

    wlstaIcon = new google.maps.Marker({
        position: {lat: 42.2665139, lng: -71.0203369},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Wollaston'
    });

    fldcrIcon = new google.maps.Marker({
        position: {lat: 42.300093, lng: -71.061667},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Fields Corner'
    });

    cntsqIcon = new google.maps.Marker({
        position: {lat: 42.365486, lng: -71.103802},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Central Square '
    });

    brntnIcon = new google.maps.Marker({
        position: {lat: 42.2078543, lng:  -71.0011385},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Braintree'
    });

}
