function back(){
	//var shopping_stay_win = Alloy.createController('shopping_stay').getView();
	//shopping_stay_win.open();
		Ti.App.addEventListener('close_sleep',function(){
		$.shopping_sleep.close();
	});
	Ti.App.fireEvent('close_sleep');
}

