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

// globally scoped variables
var eventLoc;
var datePicker;

var modalTital = $('#modalTitle')


// on load of the document
$(document).ready(function(){
	// add event listener to the btnStart
  $('#btnStart').on("click",function(){
	// keep it from submitting blank
event.preventDefault();
// save the information in future variables
     eventLoc = $('#location').val();
     datePicker = $('#datePicker').val();
     console.log(eventLoc);
     console.log(datePicker);
// end function
	var oArgs = {
		app_key: "dvq7JdvxVKZGZhLq",
		where: eventLoc,
		"date": datePicker,
		page_size: 10,
		sort_order: "popularity",
}
	EVDB.API.call("/events/search", oArgs, function(oData){
		var eventArr = oData.events.event;
		for (var i = 0; i < eventArr.length; i++){
			var image = eventArr.image.medium;
			var artist = eventArr.performers.performer[0].name;
			var shortBio = eventArr.performers.performer[0].short_bio;
			var startTime = eventArr.startTime;
			var url = eventArr.url;
			var venue = eventArr.venue_name;
			// hold as data attributes
			var longitude = eventArr.longitude;
			var latitude = evenetArr.latitude;

			var newRow = $('<tr>');

newRow.addClass([i]).data("data-lat", latitude).data("data-long", longitude).append()
			displayEvents.append(newRow);
			
		}
		;
	})

})

// end of the page function
});
