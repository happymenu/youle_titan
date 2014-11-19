function close_cam(){
	Ti.App.addEventListener('close_cam',function(){
		$.cam.close();
	});
	Ti.App.fireEvent('close_cam');
}
