Titanium.include("db/staticdb.js");
var w = Titanium.UI.currentWindow;
var imageView = Titanium.UI.createImageView({
	image: "../images/sucursales.png",
	width:120,
	height: "auto",
	top:0
});
w.add(imageView);

var scroll = Titanium.UI.createScrollView({
	contentHeight: "auto",
	showVerticalScrollIndicator: true,
	top: 95
});
w.add(scroll);

var getData = function(branch){
	var branchData = {
		id: branch.id,
		branchname: branch.name,
		hasChild:true,
		height: "auto",
	};

	if(branch.header) {
		branchData.header=branch.header
	}
	return branchData;
}


var data = [];
for (var i=0; i < branch.length; i++) {
	
	var branchRow = Titanium.UI.createTableViewRow(getData(branch[i]));
	Ti.API.info(branch[i].thumbnail);
	var thumb = Ti.UI.createImageView({
		image: branch[i].thumbnail,
		height: 60,
		width: 60,
		top: 0,
		left: 0
	});
	var name = Ti.UI.createLabel({
		text:branch[i].name,		
		font: {
			fontSize:16,
			fontWeight:'bold'
		},
		textAlign:'left',
		height:16,
		width: 'auto',
		left: 65,
		top: 2
	});
	var addrs = Ti.UI.createLabel({
		text:branch[i].address,
		width:'auto',
		color:'#666666',
		font: {
			fontSize:12
		},
		height: "auto",
		left:65,
		top:20
	});
	branchRow.add(thumb);
	branchRow.add(name);
	branchRow.add(addrs);
	data.push(branchRow);
}

var search = Titanium.UI.createSearchBar({
	showCancel:false,
	hintText: "Search hotel by name"
});

var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute: 'branchname',
});
scroll.add(tableview);

tableview.addEventListener("click", function(e) {
	var win = Titanium.UI.createWindow({
		url:"sucursales/detail.js",
		title: e.rowData.branchname,
		backgroundColor: "stripped",
		id:e.rowData.id
	});
	win.showNavBar();
	Titanium.UI.currentTab.open(win, {animated:true});
});
