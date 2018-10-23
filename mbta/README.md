Nick Camp
Assignment 2
Time Spent: about 10 hours

What has been completed:
The map shall take up the entire page. DONE

Each station on the map shall be a marker with an icon: use the same icon image for each marker. The Google Maps default red marker pin is not good enough. DONE

Initially, the map shall be centered on South Station. DONE

Render a red polyline connecting each station, thus showing the complete Red Line on the map. Please note that the Red Line forks at JFK/UMass Station: see https://www.mbta.com/schedules/Red/line TODO

A CSS file is required in order for the Google Map to even work. DONE

Each subway station and it's corresponding location can be hard-coded in JavaScript. DONE

Use a separate file for the JavaScript. Do not mix JavaScript in the HTML file with the exception of the script tag to include the JavaScript file. DONE

Determine your geolocation (geographic latitude and longitude) using the JavaScript navigator.geolocation object. Upon determining your geolocation, place a marker of where you are on the map. The icon of the marker must be different than icon used for each MBTA subway station (it can be the default red pin Google uses). DONE

The map shall be centered on your location automatically when your geolocation is determined. DONE

Upon clicking on your marker on the map, display an information window (a.k.a., infowindow) noting the closest MBTA Red Line subway station from where you are including the distance away in miles.

Render a polyline (any color) that connects "your" marker to the marker of the closest MBTA Red Line subway station.

Upon clicking on a MBTA Red Line subway station marker, display an infowindow of the schedule of upcoming trains for that station. Use JSON API of Red Line trains that I provide (see more details below).

Who I worked with: Tent Turner and I bounced ideas off one another throughout the whole project. I showed him the google tutorial on finding your current location.
