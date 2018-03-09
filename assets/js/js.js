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

var displayEvents = $('#eventDump');

// variables to add to our card
 var card =  $('div').addClass('card');
 var cardBody = $('div').addClass("card-body");
 var cardTitle = $('<h5>').addClass('card-title');


// on load of the document
$(document).ready(function () {
	// add event listener to the btnStart
	  $('#btnStart').on("click", function () {
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
		EVDB.API.call("/events/search", oArgs, function (oData) {
			var eventArray = oData.events.event;
			console.log(oData);
			for (var i = 0; i < eventArray.length; i++) {
				var eventArr = eventArray[i];
				// create an image
				var image;
				var tdImage = $('<p>').text("No Image Available");
				// if the image exists
				if (eventArr.image) {
					image = eventArr.image.medium;
					console.log(image);
					// give it attributes of an src and width
					var tdImage = $('<img>')
						.attr("src", image.url)
						.attr("width", image.width)
						.attr("height", image.height)
						.addClass('img-fluid');
				};
				// shortcut variable
				var performers = eventArr.performers;
				var artist;
				// if there are performers
				if (performers) {
					if (Array.isArray(performers.performer)) {
						artist = cardTitle.text(performers.performer[0].name);
					} else {
						artist = cardTitle.text(performers.performer.name)
						;
					}
				} else {
					artist = cardTitle.text(eventArr.title);
				}
				var startTime = $("<div>").text(eventArr.startTime);
				// console.log(startTime);
				var venue = $("<div>").text(eventArr.venue_name);
				var url = eventArr.url;
				var aLink = $('<a>').attr("href", url).text("Learn More Here!");
				var tdURL = $("<div>").addClass("card-footer").html(aLink);
				// hold as data attributes
				var longitude = eventArr.longitude;
				var latitude = eventArr.latitude;
				// make a new row
				var newRow = $('<div>').addClass("row")
				// do stuff to the newRow
					// append with TDs that we built 
					.append(imageTD, artist, shortBio, startTime, venue, tdURL)
					// add a class of i so we reference specific row
					.attr("data-number", [i])
					// give data attributes of lat and long to reference in the second API call later
					.data("data-lat", latitude)
					.data("data-long", longitude)
				// append displayEvents with the new Row
				displayEvents.append(newRow);
			}
		})

	});

	// end of the page function
});
