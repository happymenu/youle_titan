function back(){
	//Alloy.createController('know_lib').getView().open();
		Ti.App.addEventListener('close_baby',function(){
		$.yuezi_baby.close();
	});
	Ti.App.fireEvent('close_baby');
}