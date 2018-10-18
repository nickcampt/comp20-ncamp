/* Here be javascript */
/* access contol allow origin */
/* check cross origin resource sharing to get around same origin policy */
/* access-control-allow-origin */ /* this means the server can allow cross origin requests 8?
/* the above is on the SERVER level so this is in assignment number 3 */
var testDiv = document.getElementById('testID')


function loadFunc(){
  testDiv.innerHTML = "<h1>This is being created by javascript load function</h1>";
}
