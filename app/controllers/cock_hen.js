function back(){
	//Alloy.createController('know_lib').getView().open();
		Ti.App.addEventListener('close_cock',function(){
		$.cock_hen.close();
	});
	Ti.App.fireEvent('close_cock');
}