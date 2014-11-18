function back(){
		Ti.App.addEventListener('close_camera',function(){
		$.camera.close();
	});
	Ti.App.fireEvent('close_camera');
}