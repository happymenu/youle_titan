function back(){
		Ti.App.addEventListener('close_check',function(){
		$.check.close();
	});
	Ti.App.fireEvent('close_check');
}