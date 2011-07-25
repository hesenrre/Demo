Titanium.include("../db/staticdb.js");
var w = Ti.UI.currentWindow;

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'100%',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true
});

var currentBranch = searchById(w.id);

var image = Ti.UI.createImageView({
	image: currentBranch.image,
	height: 150,
	top: 10
});
scrollView.add(image);

var labAddrs = Titanium.UI.createLabel({
	text: "Direccion:",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 170,
	width: "85%",
	textAlign: "left",
	height:16
});

var addrs = Titanium.UI.createTextArea({
    value:currentBranch.address,
    height:60,
    width:"85%",
    top:190,
    editable: false,
    font:{fontSize:12},
    color:'#888',
    textAlign:'left',
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});

var labMap = Titanium.UI.createLabel({
	text: "Ubicacion:",
	font: {
		fontSize: 14,
		fontWeight: "bold"
	},
	top: 260,
	width: "85%",
	textAlign: "left",
	height:16
});

var map = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {
		latitude:currentBranch.latitude,
		longitude:currentBranch.longitude,
		latitudeDelta:0.003,
		longitudeDelta:0.003
	},
	animate:true,
	regionFit:true,
	userLocation:true,
	height: 100,
	width: "85%",
	top: 280,
	borderWidth: 2,
	borderColor:'#bbb',
	borderRadius:5
});

var mapDet = Titanium.UI.createButton({
	backgroundImage: "/images/trans_bg.png",
	height:100,
	width: "85%",
	top:280
});
scrollView.add(labMap);
scrollView.add(map);
scrollView.add(mapDet);
var annot = Titanium.Map.createAnnotation({
	latitude:currentBranch.latitude,
	longitude:currentBranch.longitude,
	title:currentBranch.name,
	subtitle: currentBranch.address,
	pincolor:Titanium.Map.ANNOTATION_RED,
	animate:true,
});

map.addAnnotation(annot);
mapDet.addEventListener("click", function(e) {

	var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
	var w = Ti.UI.createWindow({
		url: "map_detail.js",
		currentPin: {
			id: currentBranch.id,
			lat: currentBranch.latitude,
			lon: currentBranch.longitude,
			name: currentBranch.name,
			addrs: currentBranch.address
		}
	});

	w.open({
		modal:true,
		modalTransitionStyle:style,
		modalStyle:presentation,
		navBarHidden:true
	});
});

var spacer = Titanium.UI.createLabel({
	text: "",
	font:{fontSize: 14, fontWeight: "bold"},
	top: 400,
	width: "85%",
	textAlign: "left",
	height:16
});

scrollView.add(labAddrs);
scrollView.add(addrs);
scrollView.add(spacer);
w.add(scrollView);
