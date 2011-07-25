Titanium.include("../db/staticdb.js");
var win = Titanium.UI.currentWindow;

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var close = Titanium.UI.createButton({
	title: "close",
	height:33,
	width:"auto"
});

var toolbar1 = Titanium.UI.createToolbar({
	items:[flexSpace, close],
	bottom:0,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#999'
});	


var map = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:win.currentPin.lat, longitude:win.currentPin.lon, 
            latitudeDelta:0.005, longitudeDelta:0.005},
	animate:true,
	regionFit:true,
	userLocation:true,
	top: 0
});
win.add(map);
win.add(toolbar1);

var annot = Titanium.Map.createAnnotation({
	latitude:win.currentPin.lat,
	longitude:win.currentPin.lon,
	title:win.currentPin.name,
	subtitle: win.currentPin.addrs,
	pincolor:Titanium.Map.ANNOTATION_RED,
	animate:true,
});
map.addAnnotation(annot);

Ti.Geolocation.preferredProvider = "gps";
Ti.Geolocation.purpose = "GPS demo";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HUNDRED_METERS;
Titanium.Geolocation.distanceFilter = 10;


Titanium.Geolocation.getCurrentPosition( function(e) {
	var clon = e.coords.longitude;
	var clat = e.coords.latitude;
	Ti.API.log("distance>"+getDistance({latitude: clat, longitude:clon},win.currentPin.id));
	Ti.API.log("currentLongitud>"+clon);
	Ti.API.log("currentLatitude>"+clat);
	Ti.API.log("win.currentPin.lat>"+win.currentPin.lat);
	Ti.API.log("win.currentPin.lon>"+win.currentPin.lon);
	
	var dlat = (Math.abs(win.currentPin.lat >= clat ? win.currentPin.lat - clat : clat - win.currentPin.lat) * 1.5).toFixed(5);
	var dlon = (Math.abs(win.currentPin.lon >= clon ? clat - win.currentPin.lat : clon - win.currentPin.lon) * 1.5).toFixed(5);
	var cenla = win.currentPin.lat >= clat ?  clat + ((win.currentPin.lat - clat) / 2) : win.currentPin.lat + ((clat - win.currentPin.lat)/2);
	var cenlo = win.currentPin.lon >= clon ?  clon + ((win.currentPin.lon - clon) / 2) : win.currentPin.lon + ((clon - win.currentPin.lon)/2);
	Ti.API.log("dlon>"+dlon);
	Ti.API.log("dlat>"+dlat);
	Ti.API.log("cenlo>"+cenlo);
	Ti.API.log("cenla>"+cenla);
	map.setLocation({latitude:cenla, longitude:cenlo, 
            latitudeDelta:dlat, longitudeDelta:dlon});
    annot.subtitle = "Esta a "+getDistance({latitude: clat, longitude:clon},win.currentPin.id)+" kms";
});


close.addEventListener("click", function(e){
	win.close();
});
