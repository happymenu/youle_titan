//-------------定义touch_start和touch_end方法----------------------------------
//var touch_start = e.addEventListener('touch_start',function(e){
//	e.backgroundColor='#efca89';
//});
//var touch_end = function(e){
//	e.backgroundColor='lightgray';
//};
//---------------------定义touch结束---------------------------------------------------

//-------------------月子妈妈-------------------------------------------------------------
function touch_start_mom(){
	$.yuezi_mom.backgroundColor="#efca89";
}    
function touch_end_mom(){
	$.yuezi_mom.backgroundColor="lightgray";
}
function yuezi_mom(){
	Alloy.createController('yuezi_mom').getView().open();
}
//-----------------孕产婴词典-------------------------------------------------------------
function touch_start_dic(){
	$.dictionary.backgroundColor="#efca89";
}    
function touch_end_dic(){
	$.dictionary.backgroundColor="lightgray";
}
function dictionary(){
	
	Alloy.createController('dictionary').getView().open();
}
//---------------月子宝宝-----------------------------------------------------------------
function touch_start_baby(){
	$.yuezi_baby.backgroundColor="#efca89";
}    
function touch_end_baby(){
	$.yuezi_baby.backgroundColor="lightgray";
}
function yuezi_baby(){
	Alloy.createController('yuezi_baby').getView().open();
}
//----------生长发育--------------------------------------------------------------------------------
function touch_start_grow(){
	$.grow_up.backgroundColor="#efca89";
}    
function touch_end_grow(){
	$.grow_up.backgroundColor="lightgray";
}
function grow_up(){
	
	Alloy.createController('grow_up').getView().open();
}
//----------政策法规----------------------------------------------------------
function touch_start_pri(){
	$.privacy.backgroundColor="#efca89";
}    
function touch_end_pri(){
	$.privacy.backgroundColor="lightgray";
}
function privacy(){
	
	Alloy.createController('privacy').getView().open();
}
//-----------------------make love-------------------------------------------
function touch_start_love(){
	$.make_love.backgroundColor="#efca89";
}    
function touch_end_love(){
	$.make_love.backgroundColor="lightgray";
}
function make_love(){
	Alloy.createController('make_love').getView().open();
}
//-------------------公鸡母鸡------------------------------------------------------
function touch_start_cock(){
	$.cock_hen.backgroundColor="#efca89";
}    
function touch_end_cock(){
	$.cock_hen.backgroundColor="lightgray";
}
function cock_hen(){
	Alloy.createController('cock_hen').getView().open();
}
//-------------------------------back返回按钮--------------------------------------
function back(){
	//Alloy.createController('search').getView().open();
		Ti.App.addEventListener('close_know',function(){
		$.know_lib.close();
	});
	Ti.App.fireEvent('close_know');
}
$.know_lib.open(); 

