function yuezi_mom(){
	Alloy.createController('yuezi_mom').getView().open();
}
function dictionary(){
	Alloy.createController('dictionary').getView().open();
}
function yuezi_baby(){
	Alloy.createController('yuezi_baby').getView().open();
}
function grow_up(){
	Alloy.createController('grow_up').getView().open();
}
function privacy(){
	Alloy.createController('privacy').getView().open();
}
function make_love(){
	Alloy.createController('make_love').getView().open();
}
function cock_hen(){
	Alloy.createController('cock_hen').getView().open();
}
function back(){
	//Alloy.createController('search').getView().open();
		Ti.App.addEventListener('close_know',function(){
		$.know_lib.close();
	});
	Ti.App.fireEvent('close_know');
}
$.know_lib.open(); 

