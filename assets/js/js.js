////// ID's from html////////
// #modalTital = tital for initial modal window
// #location = location input search bar
// #bar = checkbox for bars
// #restaurant = checkbox for restaurants
// #datePicker = pickDate
// #eventDump = data from eventify api
// #mapDump = data from google places

//-------------------------------------//
//Bootstrap Calender Picker -- https://github.com/uxsolutions/bootstrap-datepicker//
$('#sandbox-container .input-group.date').datepicker({
});
// end calender

// google api key AIzaSyCo1RTMVe5ajgFclRK2kCqc99xyBZ9gOLg

// $(document).on('click', ".btn-primary", placesAutocomplete)
// function placesAutocomplete () {
var input = document.getElementById('test');
var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
google.maps.event.addListener(autocomplete, 'place_changed', function(){
	 var place = autocomplete.getPlace();
})

function getMap () {
	var options = {
		zoom: 8,
		center: place
	}
	var map = new google.maps.Map(document.getElementById('location'), options);
}

function addMarker (place){
	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	})
}

// }

