function back() {
	//var main_win = Alloy.createController('main').getView();
	//main_win.open();
		Ti.App.addEventListener('close_stay',function(){
		$.shopping_stay.close();
	});
	Ti.App.fireEvent('close_stay');
}

function shopping_sleep() {
	var sleep_win = Alloy.createController('shopping_sleep').getView();
	sleep_win.open();
}

