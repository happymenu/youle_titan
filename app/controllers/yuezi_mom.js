function back(){
	//Alloy.createController('know_lib').getView().open();
		Ti.App.addEventListener('close_mom',function(){
		$.yuezi_mom.close();
	});
	Ti.App.fireEvent('close_mom');
}
