/*
* @Author: Administrator
* @Date:   2018-03-31 09:07:13
* @Last Modified by:   erzhuang
* @Last Modified time: 2018-04-12 13:33:15
*/
//  var weather;
// $.ajax({
// 	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
// 	dataType:"jsonp",
// 	type:"get",
// 	success:function(obj){
// 		 weather=obj.data.weather;
// 		console.log(weather.city_name);
//        console.log(obj);
// 		}
// 	})
var city;
$.ajax({
  url:"https://www.toutiao.com/stream/widget/local_weather/city/",
  dataType:"jsonp",
  type:"get",
  success:function(obj){ 
  city=obj.data;  
      // renderCity(city);
   }  
})


function updata(){
	// 城市
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;
	// 当前温度
	var current_temperature=document.querySelector(".tempature");
	current_temperature.innerHTML=weather.current_temperature+"°";
	// 今日最高温
    var dat_high_temperature=document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
    // 今日最低温
    var dat_low_temperature=document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
    // 今天天气情况
    var dat_condition=document.querySelector(".wenzi1");
    dat_condition.innerHTML=weather.dat_condition;
    // 今天天气图
    var dat_weather_icon_id=document.querySelector(".taiyang");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    // 明天天气情况
    var tomorrow_condition=document.querySelector("#tomorrow_condition");
    tomorrow_condition.innerHTML=weather.tomorrow_condition;
    // 明天最高温
    var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    // 明天最低温
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
    // 明天天气图
    var tomorrow_weather_icon_id=document.querySelector(".duoyun");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
    // 数组类型的对象
    // i代表数组下标
    // weather.hourly_forecast[i]代表数组中的每一个元素
    
    var str="";
    weather.hourly_forecast.forEach((item,index)=>{
        str=str+`
        <div class="now">
        <h1 class="now-time">${item.hour}:00</h1>
        <div class="now-icon" style="background-image:url(img/${item.weather_icon_id}.png)"> </div>
        <h1 class="now-temp">${item.temperature}° </h1>
        </div>
        `
    })
    $(".wrap").html(str);

    var str2="";
    weather.forecast_list.forEach((item,index)=>{
        str2=str2+`
             <div class="con">
                <div class="con-date">
                    ${item.date.slice(5,7)}/${item.date.slice(8)}
                </div>
                <div class="con-weaH">${item.condition}</div>
                <div class="con-picH" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <div class="con-high">${item.high_temperature}°</div>
                <div class="con-low">${item.low_temperature}°</div>
                <div class="con-picL" style="background-image:url(img/${item.weather_icon_id}.png)" ></div>
                <div class="con-weaL">${item.wind_direction}</div>
                <div class="con-wind">${item.wind_direction}</div>
                <div class="con-level">${item.wind_level}级</div>
            </div>
            `
    })
    $(".wrap1").html(str2);
    // for(var i in weather.hourly_forecast){
    // 	// 1 创建元素
    // 	var now=document.createElement("div");
    // 	// 2 添加类名
    // 	now.className="now";
    // 	// 3 插入到页面中
    // 	// 获取父元素
    // 	var wrap=document.querySelector(".wrap");
    // 	wrap.appendChild(now);
    //     // 创建时间元素
    //     var h1=document.createElement("h1");
    //     h1.className="now-time";
    //     h1.innerHTML=weather.hourly_forecast[i].hour+":00";
    //     now.appendChild(h1);
    //     // 创建图片元素
    //     var div=document.createElement("div");
    //     div.className="now-icon";
    //     div.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
    //     now.appendChild(div);
    //     // 创建温度元素
    //     var h2=document.createElement("h1");
    //     h2.className="now-temp";
    //     h2.innerHTML=weather.hourly_forecast[i].temperature+"°";
    //     now.appendChild(h2);
    // }
    // for(var i in weather.forecast_list){
    //     var con=document.createElement("div");
    //     con.className="con";
    //     var wrap1=document.querySelector(".wrap1");
    //     wrap1.appendChild(con);
    //     // 创建日期元素
    //     // var a="2018-04-01";
    //     // var b=a.slice(5,7);
    //     // console.log(b);
    //     // var c=a.slice(8);
    //     // console.log(c);
    //     // var d=b+'/'+c;
    //     // console.log(d);

    //       var h3=document.createElement("div");
    //       h3.className="con-date";
    //       h3.innerHTML=weather.forecast_list[i].date.slice(5,7)+"/"+weather.forecast_list[i].date.slice(8);
    //      con.appendChild(h3);
    //      // 创建天气
    //     var h4=document.createElement("div");
    //     h4.className="con-weaH";
    //     h4.innerHTML=weather.forecast_list[i].condition;
    //     con.appendChild(h4);
    //     // 创建高温图片
    //     var h5=document.createElement("div");
    //     h5.className="con-picH";
    //     h5.style=`background-image:url(img/${weather.forecast_list[i].weather_icon_id}.png)`;
    //     con.appendChild(h5);
    //     // 创建高温
    //     var h6=document.createElement("div");
    //     h6.className="con-high";
    //     h6.innerHTML=weather.forecast_list[i].high_temperature+'°';
    //     con.appendChild(h6);
    //     // 创建低温
    //     var h7=document.createElement("div");
    //     h7.className="con-low";
    //     h7.innerHTML=weather.forecast_list[i].low_temperature+'°';
    //     con.appendChild(h7);
    //     // 创建低温图片
    //     var h8=document.createElement("div");
    //     h8.className="con-picL";
    //     h8.style=`background-image:url(img/${weather.forecast_list[i].weather_icon_id}.png)`;
    //     con.appendChild(h8);

    //     var h9=document.createElement("div");
    //     h9.className="con-weaL";
    //     h9.innerHTML=weather.forecast_list[i].condition;
    //     con.appendChild(h9);
    //     // 创建风向
    //     var h10=document.createElement("div");
    //     h10.className="con-wind";
    //     h10.innerHTML=weather.forecast_list[i].wind_direction;
    //     con.appendChild(h10);
    //     var h11=document.createElement("div");
    //     h11.className="con-level";
    //     h11.innerHTML=weather.forecast_list[i].wind_level+"级";
    //     con.appendChild(h11);
    // }
    // function renderCity(city){
      for(var a in city){
     var h12=document.createElement("h1");
     h12.className="title1";
     h12.innerHTML=a;
     var city1=document.querySelector(".city-box");
    city1.appendChild(h12);
    var con1=document.createElement("div");
    con1.className="con1";
    city1.appendChild(con1);
    for(var b in city[a]){
    var son=document.createElement("div");
    son.className="son";
    son.innerHTML=b;
   con1.appendChild(son);
        }
        }
}	
function AJAX(str){
    var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`
    $.ajax({
        url:url1,
        dataType:"jsonp",
        type:"get",
        success:function(obj){
            // 获取数据
              weather=obj.data.weather;
             console.log(weather);
            // 渲染数据
            updata();
            $(".loaction").css({"display":"none"});
            // $(".hide").addClss('block');
        }
    })
}
window.onload=function(){
	// updata();
    $(".son").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })
    $(".city").on("click",function(){
        $(".loaction").css({"display":"block"});
    })
    $("input").on("focus",function(){
        $(".search-box-right").html("搜索");
    })
    var button=document.querySelector(".search-box-right");
    button.onclick=function(){
        var text=button.innerText;
        if(text=="取消"){
            $(".loaction").css({"display":"none"});
        }
        else{
            var str1=document.querySelector("input").value;
            for(var a in city){
                for(var b in city[a]){
                    if(str1==b){
                        AJAX(str1);
                        return;
                    }
                }
            }
        
        alert("没有该城市");
    }
}
}