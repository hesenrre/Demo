var w = Titanium.UI.currentWindow;

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

scroll.add(image);
