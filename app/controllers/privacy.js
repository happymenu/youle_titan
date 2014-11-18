function back(){
	//Alloy.createController('know_lib').getView().open();
		Ti.App.addEventListener('close_privacy',function(){
		$.privacy.close();
	});
	Ti.App.fireEvent('close_privacy');
}