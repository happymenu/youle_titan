function house(e){
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
  font: { fontSize:12 },
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
house_win.add(label_time);
//显示时间结束
}
function camera(e){
	var camera_win = Alloy.createController('camera').getView();
	camera_win.open();
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
  right:'2%',
  zIndex:5
});
camera_win.add(label_time);
//显示时间结束
}
function check(e){
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
  font: { fontSize:12 },
  text:getDateTime(),
  top:'6%',
  right:'2%',
  zIndex:5
});
check_win.add(label_time);
//显示时间结束
}
function search(e){
	var search_win = Alloy.createController('search').getView();
	search_win.open();
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
  right:'2%',
  zIndex:5
});
search_win.add(label_time);
//显示时间结束
}
function shopping(e){
	var shopping_win = Alloy.createController('shopping').getView();
	shopping_win.open();
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
  right:'2%',
  zIndex:5
});
shopping_win.add(label_time);
//显示时间结束
}




$.main.open();

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
Ti.UI.currentWindow.add(label_time);
//显示时间结束