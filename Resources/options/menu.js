var w = Titanium.UI.currentWindow;
var imageView = Titanium.UI.createImageView({
	image: "../images/nuestro_menu.png",
	width:70,
	height: "auto",
	top:0
});
w.add(imageView);

var scroll = Titanium.UI.createScrollView({contentHeight:'auto'});

var div = Titanium.UI.createImageView({
	image: "../images/menu_divider.png",
	top: 120,
	height: 50,
	width: "80%"
});
var div2 = Titanium.UI.createImageView({
	image: "../images/menu_divider.png",
	top: 330,
	height: 50,
	width: "80%"
});
var tf = Titanium.UI.createButton({
	backgroundImage: "../images/menu_index_cold.png",
	top: 160,
	height: 50,
	width: 300
});
var tc = Titanium.UI.createButton({
	backgroundImage: "../images/menu_index_hot.png",
	top: 220,
	height: 50,
	width: 300
});
var ac = Titanium.UI.createButton({
	backgroundImage: "../images/menu_index_eat.png",
	top: 290,
	height: 50,
	width: 300
});

tf.addEventListener("click", function(e){
	var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
		var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
		var w = Ti.UI.createWindow({
			url: "menu/tf.js",
			backgroundColor: "#fff"
		});

		w.open({
			modal:true,
			modalTransitionStyle:style,
			modalStyle:presentation,
			navBarHidden:true
		});
});

tc.addEventListener("click", function(e){
	var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
		var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
		var w = Ti.UI.createWindow({
			url: "menu/tc.js",
			backgroundColor: "#fff"
		});

		w.open({
			modal:true,
			modalTransitionStyle:style,
			modalStyle:presentation,
			navBarHidden:true
		});
});

ac.addEventListener("click", function(e){
	var style = Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
		var presentation = Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
		var w = Ti.UI.createWindow({
			url: "menu/ac.js",
			backgroundColor: "#fff"
		});

		w.open({
			modal:true,
			modalTransitionStyle:style,
			modalStyle:presentation,
			navBarHidden:true
		});
});

scroll.add(div);
scroll.add(tf);
scroll.add(tc);
scroll.add(ac);
scroll.add(div2);
w.add(scroll);
