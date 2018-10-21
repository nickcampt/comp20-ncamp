/* access contol allow origin */
/* check cross origin resource sharing to get around same origin policy */
/* access-control-allow-origin */ /* this means the server can allow cross origin requests 8?
/* the above is on the SERVER level so this is in assignment number 3 */


var map, infoWindow, localLat, localLong;



function initMap() {
  /* my current location is
   * (42.4092844, -71.1121079) lat long
   * so just center on this
   */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.4092844, lng: -71.1121079},
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
        infoWindow.setPosition(pos);
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

  /* code grabbed from google tutorial site: 
   * https://developers.google.com/maps/documentation/javascript/markers 
   */

   var iconImageData = {
        url: 'https://cdn130.picsart.com/272354380029211.png?c256x256',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(15, 30)
    };

    var iconShapeData = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    var yourIcon = new google.maps.Marker({
        position: {lat: localLat, lng: localLong },
        map: map,
        title: 'Your Location'
    });

    var sstatIcon = new google.maps.Marker({
        position: {lat: 42.352271, lng: 71.05524200000001 },
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'South Station'
     });

    var andrwIcon = new google.maps.Marker({
        position: {lat: 42.330154, lng: -71.057655},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Andrew'
    });

    var portrIcon = new google.maps.Marker({
        position: {lat: 42.3884, lng: -71.11914899999999},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Porter Square'
    });

    var harsqIcon = new google.maps.Marker({
        position: {lat: 42.373362, lng:  -71.118956},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Harvard Square'
    });


    var jfkIcon = new google.maps.Marker({
        position: {lat: 42.320685, lng: -71.052391},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'JFK/UMass'
    });


    var shmnlIcon = new google.maps.Marker({
        position: {lat:  42.31129, lng: -71.053331},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Savin Hill'
    });

    var pktrmIcon = new google.maps.Marker({
        position: {lat: 42.35639457, lng: -71.0624242},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Park Street'
    });

    var brdwyIcon = new google.maps.Marker({
        position: {lat: 42.342622, lng: -71.056967},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Broadway'
    });

    var nqncyIcon = new google.maps.Marker({
        position: {lat: 42.275275, lng: -71.029583},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'North Quincy'
    });

    var smmnlIcon = new google.maps.Marker({
        position: {lat: 42.29312583, lng: -71.06573796000001},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Shawmut'
    });

    var davisIcon = new google.maps.Marker({
        position: {lat: 42.39674, lng: -71.121815},
        map: map,
        title: 'Davis'
    });

    var alfclIcon = new google.maps.Marker({
        position: {lat: 42.395428, lng: -71.142483},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Alewife'
    });

    var knnclIcon = new google.maps.Marker({
        position: {lat: 42.36249079, lng:  -71.08617653},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Kendall/MIT'
    });

    var chmnlIcon = new google.maps.Marker({
        position: {lat: 42.361166, lng: -71.070628},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Charles/MGH'
    });

    var wnxgdIcon = new google.maps.Marker({
        position: {lat: 42.355518, lng: -71.060225},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Downtown Crossing'
    });

    var qnctrIcon = new google.maps.Marker({
        position: {lat: 42.251809, lng:- 71.005409},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Center'
    });

    var qamnlIcon = new google.maps.Marker({
        position: {lat: 42.233391, lng: -71.007153},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Quincy Adams'
    });

    var asmnlIcon = new google.maps.Marker({
        position: {lat: 42.284652, lng: -71.06448899999999},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Ashmont'
    });

    var wlstaIcon = new google.maps.Marker({
        position: {lat: 42.2665139, lng: -71.0203369},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Wollaston'
    });

    var fldcrIcon = new google.maps.Marker({
        position: {lat: 42.300093, lng: -71.061667},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Fields Corner'
    });

    var cntsqIcon = new google.maps.Marker({
        position: {lat: 42.365486, lng: -71.103802},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Central Square '
    });

    var brntnIcon = new google.maps.Marker({
        position: {lat: 42.2078543, lng:  -71.0011385},
        map: map,
        icon: iconImageData,
        shape: iconShapeData,
        title: 'Braintree'
    });

}
