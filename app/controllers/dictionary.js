function back(){
	//Alloy.createController('know_lib').getView().open();
		Ti.App.addEventListener('close_dic',function(){
		$.dictionary.close();
	});
	Ti.App.fireEvent('close_dic');
}