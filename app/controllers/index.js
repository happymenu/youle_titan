function touch_start_login(){
	$.img_login.opacity=0.5;
}
function touch_end_login(){
	$.img_login.opacity=1;
}
function do_login(){
	//$.btn_login.setBorderColor('orange');
	//$.btn_login.setBorderWidth(2);
	var main_win = Alloy.createController('main').getView();
	main_win.open();
	main_win.addEventListener('open', function() {
        main_win.activity.actionBar.hide();
    });
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
  font: { fontSize:"15%" },
  text:getDateTime(),
  top:'6%',
  right:'2%'
});
main_win.add(label_time);
//显示时间结束
}
/*
function u_border(){
	$.username.borderColor='#66aac6';
	$.username.borderWidth="2";
}
function p_border(){
	$.userpwd.borderColor="#66aac6";
	$.userpwd.borderWidth="2";
}*/
$.index.open();


