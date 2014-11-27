function house(){
	//$.main_house.setBackgroundSelectedColor('red');
	//$.main_house.setBackgroundSelectedImage('/lib/main_page/selected_house.png');
	//$.btn_house.setBorderColor('red');	
	var house_win = Alloy.createController('house').getView();
	house_win.open();
	//显示时间
    function getDateTime() {
    var now     = new Date(); 
 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    //var hour    = now.getHours();
    //var minute  = now.getMinutes();
    //var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    /*   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }*/   
    var dateTime = year+'年'+month+'月'+day+'日';//+hour+':'+minute+':'+second;   
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%'},
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
house_win.add(label_time);
//显示时间结束
}
//------------------------------camera点击事件--------开始------------------------------------------------------------ 
function touch_start_cam(e){
	$.main_camera.opacity=0.5;
}
function touch_end_cam(e){
	$.main_camera.opacity=1;
}
function camera(){
	var camera_win = Alloy.createController('camera').getView();
	camera_win.open();
	//显示时间
    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    var dateTime = year+'年'+month+'月'+day+'日';
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%'},
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
camera_win.add(label_time);
//显示时间结束
}
//-----------------------------camera点击事件-----结束--------------------------------------------

//-----------------------------check点击事件------开始-----------------------------------------------
function touch_start_check(e){
	$.main_check.opacity=0.5;
}
function touch_end_check(e){
	$.main_check.opacity=1;
}
function check(){
	var check_win = Alloy.createController('check').getView();
	check_win.open();
	//显示时间
    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    //var hour    = now.getHours();
    //var minute  = now.getMinutes();
    //var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    /*   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }*/   
    var dateTime = year+'年'+month+'月'+day+'日';//+hour+':'+minute+':'+second;   
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%' },
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
check_win.add(label_time);
//显示时间结束
}
//-----------------------------check点击事件--结束--------------------------------------------------------------------------------------------


//---------------------------点击search按钮--开始----------------------------------------------------------------------------------------------
function touch_start_search(e){
	$.main_search.opacity=0.5;
}
function touch_end_search(e){
	$.main_search.opacity=1;
}
function search(){
	var search_win = Alloy.createController('search').getView();
	search_win.open();
//--------------------------显示时间开始
    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    //var hour    = now.getHours();
    //var minute  = now.getMinutes();
    //var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    /*   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }*/   
    var dateTime = year+'年'+month+'月'+day+'日';//+hour+':'+minute+':'+second;   
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%'},
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
search_win.add(label_time);
//--------------------------显示时间结束
}
//---------------------------点击search按钮--结束----------------------------------------------------------------------------------------------


//---------------------------点击shopping按钮--开始----------------------------------------------------------------------------------------------
function touch_start_shop(e){
	$.main_shopping.opacity=0.5;
}
function touch_end_shop(e){
	$.main_shopping.opacity=1;
}
function shopping(){
	var shopping_win = Alloy.createController('shopping').getView();
	shopping_win.open();
//---------------------显示时间
    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    var dateTime = year+'年'+month+'月'+day+'日';//+hour+':'+minute+':'+second;   
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%' },
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
shopping_win.add(label_time);
//--------------------显示时间结束
}
//---------------------------点击shopping按钮--开始----------------------------------------------------------------------------------------------


//----------main界面----------------显示时间开始
    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    //var hour    = now.getHours();
    //var minute  = now.getMinutes();
    //var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    /*   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }*/   
    var dateTime = year+'年'+month+'月'+day+'日';//+hour+':'+minute+':'+second;   
     return dateTime;
}
var label_time = Titanium.UI.createLabel({
	 color: 'white',
  font: { fontSize:'15%' },
  text:getDateTime(),
  top:'6%',
  right:'2%'
});
Ti.UI.currentWindow.add(label_time);
//----------main界面----------------显示时间结束