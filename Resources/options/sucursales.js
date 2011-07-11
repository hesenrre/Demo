var w = Titanium.UI.currentWindow;
var imageView = Titanium.UI.createImageView({
	image: "../images/sucursales.png",
	width:120,
	height: "auto",
	top:0
});
w.add(imageView);

var data = [
	{title:'Mundo E', hasChild:true, lat:19.525575, lon:-99.228258},
	{title:'WTC', hasChild:true, lat:19.394068, lon:-99.173337},
	{title:'Prado Norte', hasChild:true, lat:19.427946, lon:-99.208152},
	{title: 'Lomas Verdes', hasChild:true, lat:19.514331, lon:-99.266388},
	{title: 'Parque Delta', hasChild:true, lat:19.402528, lon:-99.154122}
];


var tableview = Titanium.UI.createTableView({
	data:data,
	top: 120
});

tableview.addEventListener('click', function(e) {

	var win = Titanium.UI.createWindow({
		url:"sucursales_det.js",
		title:e.rowData.title,
		lat:e.rowData.lat,
		lon:e.rowData.lon
	});
	win.hideTabBar();
	win.showNavBar();
	Titanium.UI.currentTab.open(win, {
		animated:true
	});

});

w.add(tableview);
