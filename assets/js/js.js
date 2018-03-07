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

var modalTital = $('#modalTitle');

var displayEvents =$('#displayEvents');


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
		var eventArray = oData.events.event;
		console.log(oData);
		for (var i = 0; i < eventArray.length; i++){
var eventArr = eventArray[i];
			var tdO = "<td>";
			var tdC	= "</td>";
// create an image
			var image = eventArr.image.medium;
			console.log(image);
			// give it attributes of an src and width
			var tdImage = $('<img>');
			tdImage.attr("src", image.url).attr("width",image.width).attr("height", image.height).addClass('img-fluid');
			var imageTD = tdO + tdImage + tdC;

			var artist =(tdO + eventArr.performers.performer[0].name + tdC);
			var shortBio = (tdO + eventArr.performers.performer[0].short_bio+ tdC);
			var startTime = (tdO + eventArr.startTime+ tdC);
			var venue = (tdO + eventArr.venue_name+ tdC);

			var url = eventArr.url;
			var tdURL = tdO + '<a href = "'+ url + '>Buy Tickets Here</a>' + tdC;
			// hold as data attributes
			var longitude = eventArr.longitude;
			var latitude = evenetArr.latitude;
// make a new row
			var newRow = $('<tr>');
			// do stuff to the newRow
newRow
// append with TDs that we built 
.append(imageTD, artist, shortBio, startTime, venue, tdURL)
// add a class of i so we reference specific row
.addClass([i])
// give data attributes of lat and long to reference in the second API call later
.data("data-lat", latitude)
.data("data-long", longitude)
// append displayEvents with the new Row
			displayEvents.append(newRow);
			
		}
		;
	})

})

// end of the page function
});
