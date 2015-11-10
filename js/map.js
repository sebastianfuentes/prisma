var map,
	markers = [],
	lat = 19.4844956,
	lng = -99.0916786,
	lngw = -99.086666,
	noPoi = [{
		featureType: "poi",
		elementType: "labels",
		stylers: [{
			visibility: "off"
		}]
	}];

function initialize() {
	if (window.innerWidth < 1012) {
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(lat, lng),
			disableDefaultUI: true,
			scrollwheel: false,
		    zoomControlOptions: {
		       position: google.maps.ControlPosition.LEFT_CENTER,
		       style:google.maps.ZoomControlStyle.DEFAULT
		    }
		}
	} else {
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(lat, lngw),
			scrollwheel: false,
			disableDefaultUI: true,
			zoomControl: true,
		    zoomControlOptions: {
		       position: google.maps.ControlPosition.LEFT_CENTER,
    		   style:google.maps.ZoomControlStyle.DEFAULT
		    }
		}
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var location = new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});

}

google.maps.event.addDomListener(window, 'load', initialize);