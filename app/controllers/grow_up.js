function back(){
	//Alloy.createController('know_lib').getView().open();
	Ti.App.addEventListener('close_grow',function(){
		$.grow_up.close();
	});
	Ti.App.fireEvent('close_grow');	
}