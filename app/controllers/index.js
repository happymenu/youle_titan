function doClick(e) {
    alert($.label.text);
}
function do_login(e){
	var main_win = Alloy.createController('main').getView();
	main_win.open();
}
$.index.open();




