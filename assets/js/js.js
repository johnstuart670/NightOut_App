////// ID's from html////////
// #startBox = row that hold The original input fields
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

// AutoComplete - Joe
var input = $('#location')[0];
var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
google.maps.event.addListener(autocomplete, 'place_changed', function(){
	 var place = autocomplete.getPlace();
})
// End AutoComplete ADD