var w = Titanium.UI.currentWindow;
w.orientationModes = [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT];

var add = Titanium.UI.createButton({
	title: "<",
	height:20,
	width:"auto"
});

add.addEventListener("click",function(e){
	w.close();
});

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var toolbar1 = Titanium.UI.createToolbar({
	items:[add,flexSpace],
	top:0,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#f9c6c5'
});

w.add(toolbar1);
var scroll = Titanium.UI.createScrollView({
	contentHeight: "auto",
	showVerticalScrollIndicator: true,
	top: 45
});

w.add(scroll);

var image = Titanium.UI.createImageView({
	image: "../../images/menu_hot.jpg",
	height: 700,
}); 

if(Titanium.Platform.osname === "ipad"){
	image.height = 1500
}

Titanium.Gesture.addEventListener('orientationchange', function(e){
	if((e.orientation === 3 || e.orientation === 4) && Ti.Platform.osname === "ipad"){
		image.height = 2000;
		image.width = 800;
	}else if((e.orientation === 1 || e.orientation === 2) && Ti.Platform.osname === "ipad"){
		image.height = 1800;
		image.width = 600;
	}else if((e.orientation === 3 || e.orientation === 4) && Ti.Platform.osname === "iphone"){
		image.height = 1000;
		image.width = 400;
	}else if((e.orientation === 1 || e.orientation === 2) && Ti.Platform.osname === "iphone"){
		image.height = 800;
		image.width = 280;
	}
});

scroll.add(image);
