//1. Create XHR object
var xhr_room = new XMLHttpRequest();

//2. Create call back function to process server response
xhr_room.onreadystatechange = function() {
	if(xhr_room.readyState === 4) {

		// Process response and create HTML out for JSON data
		var rooms = JSON.parse(xhr_room.responseText);
		var htmlList = "<ul class='rooms'>";

		for(var i = 0; i < rooms.length; i++) {
			
			if (rooms[i].available === false) {
				htmlList = htmlList + "<li class='out'> OUT - ";
			} else {
				htmlList = htmlList + "<li class='in'> IN - ";
			}
			htmlList = htmlList + rooms[i].room + "</li>"
		}
		htmlList = htmlList + "</ul>";

		document.getElementById('roomlist').innerHTML = htmlList;
	}
}

//3. Open the request
xhr_room.open('GET', './data/room.json');

//4. Send request
	xhr_room.send();
