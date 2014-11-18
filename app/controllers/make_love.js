function back(){
	//Alloy.createController('know_lib').getView().open();
	Ti.App.addEventListener('close_make_love',function(){
		$.make_love.close();
	});
	Ti.App.fireEvent('close_make_love');	
}