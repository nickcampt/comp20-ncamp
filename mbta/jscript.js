/* Here be javascript */
/* access contol allow origin */
/* check cross origin resource sharing to get around same origin policy */
/* access-control-allow-origin */ /* this means the server can allow cross origin requests 8?
/* the above is on the SERVER level so this is in assignment number 3 */
var map, infoWindowin, localLat, localLong;

/*
 * The following "get current location" code is from the
 * Google Maps tutorial on finding your location found here:
 * https://developers.google.com/maps/documentation/javascript/geolocation
 */
function initMap() {
  /* my current location is
   * (42.4092844, -71.1121079) lat long
   * so just center on this
   */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.4092844, lng: -71.1121079},
    zoom: 6
  });

  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      localLat = position.coords.latitude;
      localLong = position.coords.longitude;
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
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
  
  var sstatIcon = new google.maps.Marker({
    position: {lat: 42.352271, lng: 71.05524200000001 },
    map: map,
    title: 'South Station'
  });

  var andrwIcon = new google.maps.Marker({
    position: {lat: 42.330154, lng: -71.057655},
    map: map,
    title: 'Andrew'
  });

  var portrIcon = new google.maps.Marker({
    position: {lat: 42.3884, lng: -71.11914899999999},
    map: map,
    title: 'Porter Square'
  });

  var harsqIcon = new google.maps.Marker({
    position: {lat: 42.373362, lng:  -71.118956},
    map: map,
    title: 'Harvard Square'
  });


  var jfkIcon = new google.maps.Marker({
    position: {lat: 42.320685, lng: -71.052391},
    map: map,
    title: 'JFK/UMass'
  });


  var shmnlIcon = new google.maps.Marker({
    position: {lat:  42.31129, lng: -71.053331},
    map: map,
    title: 'Savin Hill'
  });

  var pktrmIcon = new google.maps.Marker({
    position: {lat: 42.35639457, lng: -71.0624242},
    map: map,
    title: 'Park Street'
  });

  var brdwyIcon = new google.maps.Marker({
    position: {lat: 42.342622, lng: -71.056967},
    map: map,
    title: 'Broadway'
  });

  var nqncyIcon = new google.maps.Marker({
    position: {lat: 42.275275, lng: -71.029583},
    map: map,
    title: 'North Quincy'
  });

  var smmnlIcon = new google.maps.Marker({
    position: {lat: 42.29312583, lng: -71.06573796000001},
    map: map,
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
    title: 'Alewife'
  });

  var knnclIcon = new google.maps.Marker({
    position: {lat: 42.36249079, lng:  -71.08617653},
    map: map,
    title: 'Kendall/MIT'
  });

  var chmnlIcon = new google.maps.Marker({
    position: {lat: 42.361166, lng: -71.070628},
    map: map,
    title: 'Charles/MGH'
  });

  var wnxgdIcon = new google.maps.Marker({
    position: {lat: 42.355518, lng: -71.060225},
    map: map,
    title: 'Downtown Crossing'
  });

  var qnctrIcon = new google.maps.Marker({
    position: {lat: 42.251809, lng:- 71.005409},
    map: map,
    title: 'Quincy Center'
  });

  var qamnlIcon = new google.maps.Marker({
    position: {lat: 42.233391, lng: -71.007153},
    map: map,
    title: 'Quincy Adams'
  });

  var asmnlIcon = new google.maps.Marker({
    position: {lat: 42.284652, lng: -71.06448899999999},
    map: map,
    title: 'Ashmont'
  });

  var wlstaIcon = new google.maps.Marker({
    position: {lat: 42.2665139, lng: -71.0203369},
    map: map,
    title: 'Wollaston'
  });

  var fldcrIcon = new google.maps.Marker({
    position: {lat: 42.300093, lng: -71.061667},
    map: map,
    title: 'Fields Corner'
  });

  var cntsqIcon = new google.maps.Marker({
    position: {lat: 42.365486, lng: -71.103802},
    map: map,
    title: 'Central Square '
  });

  var brntnIcon = new google.maps.Marker({
    position: {lat: 42.2078543, lng:  -71.0011385},
    map: map,
    title: 'Braintree'
  });

}
