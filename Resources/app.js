// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
Titanium.include("utils/builders.js");
// create tab group
var tabGroup = Titanium.UI.createTabGroup();




buildTab({
	win: {
		title:"Menu",
		script: "options/menu.js"
	},
	tab: {
		icon: "KS_nav_views.png",
		title: "Menu"
	},
	hideNavBar: true,
	container: tabGroup
});

buildTab({
	win: {
		title:"Favoritos",
		script: "options/favorites.js"
	},
	tab: {
		icon: "KS_nav_ui.png",
		title: "Favoritos"
	},
	hideNavBar: true,
	container: tabGroup
});

buildTab({
	win: {
		title:"Favoritos",
		script: "options/sucursales.js"
	},
	tab: {
		icon: "KS_nav_ui.png",
		title: "Sucursales"
	},
	hideNavBar: true,
	container: tabGroup
});

buildTab({
	win: {
		title:"Favoritos",
		script: "options/novedades.js"
	},
	tab: {
		icon: "KS_nav_ui.png",
		title: "Novedades"
	},
	hideNavBar: true,
	container: tabGroup
});  
// open tab group
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
});
