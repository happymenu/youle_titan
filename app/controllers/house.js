function touch_start_back(){
	$.back.opacity=0.5;
}
function touch_end_back(){
	$.back.opacity=1;
}
function back(){
	//var main_win = Alloy.createController('main').getView();
	//main_win.open();
	Ti.App.addEventListener('close_house',function(){
		$.house.close();
	});
	Ti.App.fireEvent('close_house');
}
function show_cam(){
	var cam_win = Alloy.createController('cam').getView();
	cam_win.open();
	
}
