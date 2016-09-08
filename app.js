//1. Create XHR object
var xhr = new XMLHttpRequest();

//2. Create call back function to process server response
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {

		// Process response and create HTML out for JSON data
		var responseText = JSON.parse(xhr.responseText);
		var htmlList = "<ul>";

		for(var i = 0; i < responseText.length; i++) {
			console.log(responseText[i]);
			if (responseText[i].inoffice === false) {
				htmlList = htmlList + "<li class='out'> OUT - ";
			} else {
				htmlList = htmlList + "<li class='in'> IN - ";
			}
			htmlList = htmlList + responseText[i].name + "</li>"
		}
		htmlList = htmlList + "</ul>";

		document.getElementById('employee').innerHTML = htmlList;
	}
}

//3. Open the request
xhr.open('GET', 'data.json');

//4. Send request
function getEmployeeData() {
	xhr.send();
}