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
}



/*   TODO DELETE
var Icon = new google.maps.Marker({
  position: {lat: , lng: },
  map: map,
  title: ''
});
*/
function makeIcons() {

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

}
