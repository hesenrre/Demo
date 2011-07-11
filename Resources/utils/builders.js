var buildTab = function(p) {
	var win = Titanium.UI.createWindow({
		title: p.win.title,
		url: p.win.script
	});
	var tab = Titanium.UI.createTab({
		icon: p.tab.icon,
		title: p.tab.title,
		window:win
	});
	if(p.hideNavBar){
		win.hideNavBar();
	}
	if(p.container){
		p.container.addTab(tab);
	}
	win.backgroundColor = p.win.bgColor ? p.win.bgColor : "#fff";
	return tab;
}

