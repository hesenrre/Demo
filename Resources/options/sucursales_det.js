var win = Titanium.UI.currentWindow;

Ti.Geolocation.preferredProvider = "gps";
Ti.Geolocation.purpose = "GPS demo";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HUNDRED_METERS;
Titanium.Geolocation.distanceFilter = 10;

Titanium.Geolocation.getCurrentPosition( function(e) {
	var clon = e.coords.longitude;
	var clat = e.coords.latitude;
	var dlat = win.lat - clat;
	var dlon = win.lon - clon;
	var cenla = win.lat >= clat ?  clat + ((win.lat - clat) / 2) : win.lat + ((clat - win.lat)/2);
	var cenlo = win.lon >= clon ?  clon + ((win.lon - clon) / 2) : win.lon + ((clon - win.lon)/2);
	
	
	var anot = Titanium.Map.createAnnotation({
		latitude:win.lat,
		longitude:win.lon,
		title:"Cielito Querido Cafe",
		subtitle:win.title,
		animate:true,
	});

	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region: {
			latitude:cenla,
			longitude:cenlo,
			latitudeDelta:dlat,
			longitudeDelta:dlon
		},
		animate:true,
		regionFit:true,
		userLocation:true,
		annotations: [anot]
	});

	win.add(mapview);

});