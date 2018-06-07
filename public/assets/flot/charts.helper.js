(function(){this.charts={initFinances:function(){return this.chart_simple.init()},initCharts:function(){return this.chart_simple.init(),this.chart_lines_fill_nopoints.init(),this.chart_ordered_bars.init(),this.chart_donut.init(),this.chart_stacked_bars.init(),this.chart_pie.init(),this.chart_horizontal_bars.init(),this.chart_live.init()},initIndex:function(){return this.chart_lines_fill_nopoints.init()},utility:{chartColors:[themerPrimaryColor,"#444","#777","#999","#DDD","#EEE"],chartBackgroundColors:["#fff","#fff"],applyStyle:function(e){return e.options.colors=charts.utility.chartColors,e.options.grid.backgroundColor={colors:charts.utility.chartBackgroundColors},e.options.grid.borderColor=charts.utility.chartColors[0],e.options.grid.color=charts.utility.chartColors[0]},randNum:function(){return Math.floor(21*Math.random())+20}},traffic_sources_pie:{data:[{label:"organic",data:60},{label:"direct",data:22.1},{label:"referral",data:16.9},{label:"cpc",data:1}],plot:null,options:{series:{pie:{show:!0,redraw:!0,radius:1,tilt:.6,label:{show:!0,radius:1,formatter:function(e,t){return'<div style="font-size:8pt;text-align:center;padding:5px;color:#fff;">'+Math.round(t.percent)+"%</div>"},background:{opacity:.8}}}},legend:{show:!0},colors:[],grid:{hoverable:!0},tooltip:!0,tooltipOpts:{content:"<strong>%y% %s</strong>",dateFormat:"%y-%0m-%0d",shifts:{x:10,y:20},defaultTheme:!1}},init:function(){return charts.utility.applyStyle(this),this.plot=$.plot($("#pie"),this.data,this.options)}},traffic_sources_dataTables:{data:{tableSources:{data:null,init:function(){var e;return e=new google.visualization.DataTable,e.addColumn("string","source"),e.addColumn("string","medium"),e.addColumn("number","visits"),e.addColumn("number","pg_views"),e.addColumn("string","avg_time"),e.addRows(7),e.setCell(0,0,"google",null,{style:"text-align: center;"}),e.setCell(0,1,"organic",null,{style:"text-align: center;"}),e.setCell(0,2,89,null,{style:"text-align: center;"}),e.setCell(0,3,299,null,{style:"text-align: center;"}),e.setCell(0,4,"00:01:48",null,{style:"text-align: center;"}),e.setCell(1,0,"(direct)",null,{style:"text-align: center;"}),e.setCell(1,1,"(none)",null,{style:"text-align: center;"}),e.setCell(1,2,14,null,{style:"text-align: center;"}),e.setCell(1,3,34,null,{style:"text-align: center;"}),e.setCell(1,4,"00:03:15",null,{style:"text-align: center;"}),e.setCell(2,0,"yahoo",null,{style:"text-align: center;"}),e.setCell(2,1,"organic",null,{style:"text-align: center;"}),e.setCell(2,2,3,null,{style:"text-align: center;"}),e.setCell(2,3,3,null,{style:"text-align: center;"}),e.setCell(2,4,"00:00:00",null,{style:"text-align: center;"}),e.setCell(3,0,"ask",null,{style:"text-align: center;"}),e.setCell(3,1,"organic",null,{style:"text-align: center;"}),e.setCell(3,2,1,null,{style:"text-align: center;"}),e.setCell(3,3,3,null,{style:"text-align: center;"}),e.setCell(3,4,"00:01:34",null,{style:"text-align: center;"}),e.setCell(4,0,"bing",null,{style:"text-align: center;"}),e.setCell(4,1,"organic",null,{style:"text-align: center;"}),e.setCell(4,2,1,null,{style:"text-align: center;"}),e.setCell(4,3,1,null,{style:"text-align: center;"}),e.setCell(4,4,"00:00:00",null,{style:"text-align: center;"}),e.setCell(5,0,"conduit",null,{style:"text-align: center;"}),e.setCell(5,1,"organic",null,{style:"text-align: center;"}),e.setCell(5,2,1,null,{style:"text-align: center;"}),e.setCell(5,3,1,null,{style:"text-align: center;"}),e.setCell(5,4,"00:00:00",null,{style:"text-align: center;"}),e.setCell(6,0,"google",null,{style:"text-align: center;"}),e.setCell(6,1,"cpc",null,{style:"text-align: center;"}),e.setCell(6,2,1,null,{style:"text-align: center;"}),e.setCell(6,3,1,null,{style:"text-align: center;"}),e.setCell(6,4,"00:00:00",null,{style:"text-align: center;"}),this.data=e,e}},tableReffering:{data:null,init:function(){var e;return e=new google.visualization.DataTable,e.addColumn("string","source"),e.addColumn("number","pg_views"),e.addColumn("string","avg_time"),e.addColumn("string","exits"),e.addRows(6),e.setCell(0,0,"google.ro"),e.setCell(0,1,14,null,{style:"text-align: center;"}),e.setCell(0,2,"00:05:51",null,{style:"text-align: center;"}),e.setCell(0,3,"3",null,{style:"text-align: center;"}),e.setCell(1,0,"search.sweetim.com"),e.setCell(1,1,5,null,{style:"text-align: center;"}),e.setCell(1,2,"00:03:29",null,{style:"text-align: center;"}),e.setCell(1,3,"1",null,{style:"text-align: center;"}),e.setCell(2,0,"start.funmoods.com"),e.setCell(2,1,5,null,{style:"text-align: center;"}),e.setCell(2,2,"00:01:02",null,{style:"text-align: center;"}),e.setCell(2,3,"1",null,{style:"text-align: center;"}),e.setCell(3,0,"google.md"),e.setCell(3,1,2,null,{style:"text-align: center;"}),e.setCell(3,2,"00:03:56",null,{style:"text-align: center;"}),e.setCell(3,3,"1",null,{style:"text-align: center;"}),e.setCell(4,0,"searchmobileonline.com"),e.setCell(4,1,2,null,{style:"text-align: center;"}),e.setCell(4,2,"00:02:21",null,{style:"text-align: center;"}),e.setCell(4,3,"1",null,{style:"text-align: center;"}),e.setCell(5,0,"google.com"),e.setCell(5,1,1,null,{style:"text-align: center;"}),e.setCell(5,2,"00:00:00",null,{style:"text-align: center;"}),e.setCell(5,3,"1",null,{style:"text-align: center;"}),this.data=e,e}}},chart:{tableSources:null,tableReffering:null},options:{tableSources:{page:"enable",pageSize:6,allowHtml:!0,cssClassNames:{headerRow:"tableHeaderRow",tableRow:"tableRow",selectedTableRow:"selectedTableRow",hoverTableRow:"hoverTableRow"},width:"100%",alternatingRowStyle:!1,pagingSymbols:{prev:'<span class="btn btn-inverse">prev</btn>',next:'<span class="btn btn-inverse">next</span>'}},tableReffering:{page:"enable",pageSize:6,allowHtml:!0,cssClassNames:{headerRow:"tableHeaderRow",tableRow:"tableRow",selectedTableRow:"selectedTableRow",hoverTableRow:"hoverTableRow"},width:"100%",alternatingRowStyle:!1,pagingSymbols:{prev:'<span class="btn btn-inverse">prev</btn>',next:'<span class="btn btn-inverse">next</span>'}}},init:function(){return charts.traffic_sources_dataTables.data.tableSources.init(),charts.traffic_sources_dataTables.data.tableReffering.init(),charts.traffic_sources_dataTables.drawTableSources(),charts.traffic_sources_dataTables.drawTableReffering()},drawTableSources:function(){return this.chart.tableSources=new google.visualization.Table(document.getElementById("dataTableSources")),this.chart.tableSources.draw(this.data.tableSources.data,this.options.tableSources)},drawTableReffering:function(){return this.chart.tableReffering=new google.visualization.Table(document.getElementById("dataTableReffering")),this.chart.tableReffering.draw(this.data.tableReffering.data,this.options.tableReffering)}},chart_simple:{data:{sin:[],cos:[]},plot:null,options:{grid:{show:!0,aboveData:!0,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!0,mouseActiveRadius:20,backgroundColor:{}},series:{grow:{active:!1},lines:{show:!0,fill:!1,lineWidth:4,steps:!1},points:{show:!0,radius:5,symbol:"circle",fill:!0,borderColor:"#fff"}},legend:{position:"se"},colors:[],shadowSize:1,tooltip:!0,tooltipOpts:{content:"%s : %y.3",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){var e;if(charts.utility.applyStyle(this),null==this.plot)for(e=0;14>e;)this.data.sin.push([e,Math.sin(e)]),this.data.cos.push([e,Math.cos(e)]),e+=.5;return this.plot=$.plot($("#chart_simple"),[{label:"Sin",data:this.data.sin,lines:{fillColor:"#DA4C4C"},points:{fillColor:"#fff"}},{label:"Cos",data:this.data.cos,lines:{fillColor:"#444"},points:{fillColor:"#fff"}}],this.options)}},chart_lines_fill_nopoints:{data:{d1:[],d2:[]},plot:null,options:{grid:{show:!0,aboveData:!0,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!0,mouseActiveRadius:20,backgroundColor:{}},series:{grow:{active:!1},lines:{show:!0,fill:!0,lineWidth:2,steps:!1},points:{show:!1}},legend:{position:"nw"},yaxis:{min:0},xaxis:{ticks:11,tickDecimals:0},colors:[],shadowSize:1,tooltip:!0,tooltipOpts:{content:"%s : %y.0",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){return charts.utility.applyStyle(this),this.data.d1=gon.line_chart,this.plot=$.plot("#chart_lines_fill_nopoints",[{label:I18n.t("js.charts.revenue"),data:this.data.d1,lines:{fillColor:"#fff8f2"},points:{fillColor:"#88bbc8"}}],this.options)}},chart_ordered_bars:{data:null,plot:null,options:{bars:{show:!0,barWidth:.2,fill:1},grid:{show:!0,aboveData:!1,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!1,mouseActiveRadius:20,backgroundColor:{}},series:{grow:{active:!1}},legend:{position:"ne"},colors:[],tooltip:!0,tooltipOpts:{content:"%s : %y.0",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){return charts.utility.applyStyle(this),this.data=[{label:"Product 1",data:[50,100]},{label:"Product 2",data:[30,90]}],this.plot=$.plot($("#chart_ordered_bars"),this.data,this.options)}},chart_donut:{data:[{label:"USA",data:38},{label:"Brazil",data:23},{label:"India",data:15},{label:"Turkey",data:9},{label:"France",data:7},{label:"China",data:5},{label:"Germany",data:3}],plot:null,options:{series:{pie:{show:!0,innerRadius:.4,highlight:{opacity:.1},radius:1,stroke:{color:"#fff",width:8},startAngle:2,combine:{color:"#EEE",threshold:.05},label:{show:!0,radius:1,formatter:function(e,t){return'<div class="label label-inverse">'+e+"&nbsp;"+Math.round(t.percent)+"%</div>"}}},grow:{active:!1}},legend:{show:!1},grid:{hoverable:!0,clickable:!0,backgroundColor:{}},colors:[],tooltip:!0,tooltipOpts:{content:"%s : %y.1%",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){return charts.utility.applyStyle(this),this.plot=$.plot($("#chart_donut"),this.data,this.options)}},chart_horizontal_bars:{data:null,plot:null,options:{grid:{show:!0,aboveData:!1,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!1,mouseActiveRadius:20,backgroundColor:{}},series:{grow:{active:!1},bars:{show:!0,horizontal:!0,barWidth:.2,fill:1}},legend:{position:"ne"},colors:[],tooltip:!0,tooltipOpts:{content:"%s : %y.0",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){var e,t,i,n;for(charts.utility.applyStyle(this),e=[],n=0;5>=n;)e.push([parseInt(30*Math.random()),n]),n+=1;for(t=[],n=0;5>=n;)t.push([parseInt(30*Math.random()),n]),n+=1;for(i=[],n=0;5>=n;)i.push([parseInt(30*Math.random()),n]),n+=1;return this.data=new Array,this.data.push({data:e,bars:{horizontal:!0,show:!0,barWidth:.2,order:1}}),this.data.push({data:t,bars:{horizontal:!0,show:!0,barWidth:.2,order:2}}),this.data.push({data:i,bars:{horizontal:!0,show:!0,barWidth:.2,order:3}}),this.plot=$.plot($("#chart_horizontal_bars"),this.data,this.options)}},chart_pie:{data:[{label:"USA",data:38},{label:"Brazil",data:23},{label:"India",data:15},{label:"Turkey",data:9},{label:"France",data:7},{label:"China",data:5},{label:"Germany",data:3}],plot:null,options:{series:{pie:{show:!0,highlight:{opacity:.1},radius:1,stroke:{color:"#fff",width:2},startAngle:2,combine:{color:"#353535",threshold:.05},label:{show:!0,radius:1,formatter:function(e,t){return'<div class="label label-inverse">'+e+"&nbsp;"+Math.round(t.percent)+"%</div>"}}},grow:{active:!1}},colors:[],legend:{show:!1},grid:{hoverable:!0,clickable:!0,backgroundColor:{}},tooltip:!0,tooltipOpts:{content:"%s : %y.1%",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){return charts.utility.applyStyle(this),this.plot=$.plot($("#chart_pie"),this.data,this.options)}},chart_stacked_bars:{data:null,plot:null,options:{grid:{show:!0,aboveData:!1,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!0,mouseActiveRadius:20,backgroundColor:{}},series:{grow:{active:!1},stack:0,lines:{show:!1,fill:!0,steps:!1},bars:{show:!0,barWidth:.5,fill:1}},xaxis:{ticks:11,tickDecimals:0},legend:{position:"ne"},colors:[],shadowSize:1,tooltip:!0,tooltipOpts:{content:"%s : %y.0",shifts:{x:-30,y:-50},defaultTheme:!1}},init:function(){var e,t,i,n;for(charts.utility.applyStyle(this),e=[],n=0;10>=n;)e.push([n,parseInt(30*Math.random())]),n+=1;for(t=[],n=0;10>=n;)t.push([n,parseInt(20*Math.random())]),n+=1;for(i=[],n=0;10>=n;)i.push([n,parseInt(20*Math.random())]),n+=1;return this.data=new Array,this.data.push({label:"Data One",data:e}),this.data.push({label:"Data Two",data:t}),this.data.push({label:"Data Tree",data:i}),this.plot=$.plot($("#chart_stacked_bars"),this.data,this.options)}},chart_live:{data:[],totalPoints:300,updateInterval:200,getRandomData:function(){var e,t,i,n;for(this.data.length>0&&(this.data=this.data.slice(1));this.data.length<this.totalPoints;)t=this.data.length>0?this.data[this.data.length-1]:50,n=t+10*Math.random()-5,0>n&&(n=0),n>100&&(n=100),this.data.push(n);for(i=[],e=0;e<this.data.length;)i.push([e,this.data[e]]),++e;return i},plot:null,options:{series:{grow:{active:!1},shadowSize:0,lines:{show:!0,fill:!0,lineWidth:2,steps:!1}},grid:{show:!0,aboveData:!1,color:"#3f3f3f",labelMargin:5,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!1,mouseActiveRadius:20,backgroundColor:{}},colors:[],tooltip:!0,tooltipOpts:{content:"Value is : %y.0",shifts:{x:-30,y:-50},defaultTheme:!1},yaxis:{min:0,max:100},xaxis:{show:!0}},init:function(){return charts.utility.applyStyle(this),this.plot=$.plot($("#chart_live"),[this.getRandomData()],this.options),setTimeout(this.update,charts.chart_live.updateInterval)},update:function(){return charts.chart_live.plot.setData([charts.chart_live.getRandomData()]),charts.chart_live.plot.draw(),setTimeout(charts.chart_live.update,charts.chart_live.updateInterval)}}}}).call(this);