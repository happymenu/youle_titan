function back() {
	//var main_win = Alloy.createController('main').getView();
	//main_win.open();
		Ti.App.addEventListener('close_stay',function(){
		$.shopping_stay.close();
	});
	Ti.App.fireEvent('close_stay');
}

function shopping_sleep() {
	var sleep_win = Alloy.createController('shopping_sleep').getView();
	sleep_win.open();
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
  font: { fontSize:12 },
  text:getDateTime(),
  top:'6%',
  right:'2%'
});
sleep_win.add(label_time);
//显示时间结束
}

