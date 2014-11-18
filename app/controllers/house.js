function back(){
	//var main_win = Alloy.createController('main').getView();
	//main_win.open();
	Ti.App.addEventListener('close_house',function(){
		$.house.close();
	});
	Ti.App.fireEvent('close_house');
}
