!function(e,t){function i(){return new Date(Date.UTC.apply(Date,arguments))}function n(){var e=new Date;return i(e.getFullYear(),e.getMonth(),e.getDate())}function a(t,i){var n,a=e(t).data(),s={},r=new RegExp("^"+i.toLowerCase()+"([A-Z])"),i=new RegExp("^"+i.toLowerCase());for(var o in a)i.test(o)&&(n=o.replace(r,function(e,t){return t.toLowerCase()}),s[n]=a[o]);return s}function s(t){var i={};if(h[t]||(t=t.split("-")[0],h[t])){var n=h[t];return e.each(d,function(e,t){t in n&&(i[t]=n[t])}),i}}var r=e(window),o=function(i,a){this.date=t,this.viewDate=n(),this._process_options(a),this.element=e(i),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=e(p.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(e,t){return parseInt(t)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};o.prototype={constructor:o,_process_options:function(t){this._o=e.extend({},this._o,t);var i=this.o=e.extend({},this._o),n=i.language;switch(h[n]||(n=n.split("-")[0],h[n]||(n=c.language)),i.language=n,i.startView){case 2:case"decade":i.startView=2;break;case 1:case"year":i.startView=1;break;default:i.startView=0}switch(i.minViewMode){case 1:case"months":i.minViewMode=1;break;case 2:case"years":i.minViewMode=2;break;default:i.minViewMode=0}i.startView=Math.max(i.startView,i.minViewMode),i.weekStart%=7,i.weekEnd=(i.weekStart+6)%7;var a=p.parseFormat(i.format);i.startDate!==-1/0&&(i.startDate=i.startDate?i.startDate instanceof Date?this._local_to_utc(this._zero_time(i.startDate)):p.parseDate(i.startDate,a,i.language):-1/0),1/0!==i.endDate&&(i.endDate=i.endDate?i.endDate instanceof Date?this._local_to_utc(this._zero_time(i.endDate)):p.parseDate(i.endDate,a,i.language):1/0),i.daysOfWeekDisabled=i.daysOfWeekDisabled||[],e.isArray(i.daysOfWeekDisabled)||(i.daysOfWeekDisabled=i.daysOfWeekDisabled.split(/[,\s]*/)),i.daysOfWeekDisabled=e.map(i.daysOfWeekDisabled,function(e){return parseInt(e,10)});var s=String(i.orientation).toLowerCase().split(/\s+/g),r=i.orientation.toLowerCase();if(s=e.grep(s,function(e){return/^auto|left|right|top|bottom$/.test(e)}),i.orientation={x:"auto",y:"auto"},r&&"auto"!==r)if(1===s.length)switch(s[0]){case"top":case"bottom":i.orientation.y=s[0];break;case"left":case"right":i.orientation.x=s[0]}else r=e.grep(s,function(e){return/^left|right$/.test(e)}),i.orientation.x=r[0]||"auto",r=e.grep(s,function(e){return/^top|bottom$/.test(e)}),i.orientation.y=r[0]||"auto";else;},_events:[],_secondaryEvents:[],_applyEvents:function(e){for(var t,i,n=0;n<e.length;n++)t=e[n][0],i=e[n][1],t.on(i)},_unapplyEvents:function(e){for(var t,i,n=0;n<e.length;n++)t=e[n][0],i=e[n][1],t.off(i)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(function(){this.update()},this),keydown:e.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(function(){this.update()},this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:e.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:e.proxy(this.click,this)}],[e(window),{resize:e.proxy(this.place,this)}],[e(document),{"mousedown touchstart":e.proxy(function(e){this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,i){var n=i||this.date,a=this._utc_to_local(n);this.element.trigger({type:t,date:a,format:e.proxy(function(e){var t=e||this.o.format;return p.formatDate(n,t,this.o.language)},this)})},show:function(e){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),e&&e.preventDefault(),this._trigger("show")},hide:function(){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},_utc_to_local:function(e){return e&&new Date(e.getTime()+6e4*e.getTimezoneOffset())},_local_to_utc:function(e){return e&&new Date(e.getTime()-6e4*e.getTimezoneOffset())},_zero_time:function(e){return e&&new Date(e.getFullYear(),e.getMonth(),e.getDate())},_zero_utc_time:function(e){return e&&new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()))},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return this.date},setDate:function(e){this.setUTCDate(this._local_to_utc(e))},setUTCDate:function(e){this.date=e,this.setValue()},setValue:function(){var e=this.getFormattedDate();this.isInput?this.element.val(e).change():this.component&&this.element.find("input").val(e).change()},getFormattedDate:function(e){return e===t&&(e=this.o.format),p.formatDate(this.date,e,this.o.language)},setStartDate:function(e){this._process_options({startDate:e}),this.update(),this.updateNavArrows()},setEndDate:function(e){this._process_options({endDate:e}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this._process_options({daysOfWeekDisabled:e}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var t=this.picker.outerWidth(),i=this.picker.outerHeight(),n=10,a=r.width(),s=r.height(),o=r.scrollTop(),l=parseInt(this.element.parents().filter(function(){return"auto"!=e(this).css("z-index")}).first().css("z-index"))+10,u=this.component?this.component.parent().offset():this.element.offset(),c=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),d=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),h=u.left,p=u.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(h-=t-d)):(this.picker.addClass("datepicker-orient-left"),u.left<0?h-=u.left-n:u.left+t>a&&(h=a-t-n));var f,m,g=this.o.orientation.y;"auto"===g&&(f=-o+u.top-i,m=o+s-(u.top+c+i),g=Math.max(f,m)===m?"top":"bottom"),this.picker.addClass("datepicker-orient-"+g),"top"===g?p+=c:p-=i+parseInt(this.picker.css("padding-top")),this.picker.css({top:p,left:h,zIndex:l})}},_allow_update:!0,update:function(){if(this._allow_update){var e,i=this.date&&new Date(this.date),n=!1;arguments.length?(e=arguments[0],e instanceof Date&&(e=this._local_to_utc(e)),n=!0):(e=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),delete this.element.data().date),this.date=p.parseDate(e,this.o.format,this.o.language),this.date<this.o.startDate?(this.viewDate=new Date(this.o.startDate),this.date=new Date(this.o.startDate)):this.date>this.o.endDate?(this.viewDate=new Date(this.o.endDate),this.date=new Date(this.o.endDate)):this.date?(this.viewDate=new Date(this.date),this.date=new Date(this.date)):this.date=t,n?this.setValue():e&&i&&this.date&&i.getTime()!==this.date.getTime()&&this._trigger("changeDate"),!this.date&&i&&this._trigger("clearDate"),this.fill()}},fillDow:function(){var e=this.o.weekStart,t="<tr>";if(this.o.calendarWeeks){var i='<th class="cw">&nbsp;</th>';t+=i,this.picker.find(".datepicker-days thead tr:first-child").prepend(i)}for(;e<this.o.weekStart+7;)t+='<th class="dow">'+h[this.o.language].daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;12>t;)e+='<span class="month">'+h[this.o.language].monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").html(e)},setRange:function(t){t&&t.length?this.range=e.map(t,function(e){return e.valueOf()}):delete this.range,this.fill()},getClassNames:function(t){var i=[],n=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),s=this.date&&this.date.valueOf(),r=new Date;return t.getUTCFullYear()<n||t.getUTCFullYear()==n&&t.getUTCMonth()<a?i.push("old"):(t.getUTCFullYear()>n||t.getUTCFullYear()==n&&t.getUTCMonth()>a)&&i.push("new"),this.o.todayHighlight&&t.getUTCFullYear()==r.getFullYear()&&t.getUTCMonth()==r.getMonth()&&t.getUTCDate()==r.getDate()&&i.push("today"),t.valueOf()==s&&i.push("active"),(t.valueOf()<this.o.startDate||t.valueOf()>this.o.endDate||-1!==e.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled))&&i.push("disabled"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&i.push("range"),-1!=e.inArray(t.valueOf(),this.range)&&i.push("selected")),i},fill:function(){var n,a=new Date(this.viewDate),s=a.getUTCFullYear(),r=a.getUTCMonth(),o=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,l=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,u=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,c=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0;this.picker.find(".datepicker-days thead th.datepicker-switch").text(h[this.o.language].months[r]+" "+s),this.picker.find("tfoot th.today").text(h[this.o.language].today).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot th.clear").text(h[this.o.language].clear).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var d=i(s,r-1,28),f=p.getDaysInMonth(d.getUTCFullYear(),d.getUTCMonth());d.setUTCDate(f),d.setUTCDate(f-(d.getUTCDay()-this.o.weekStart+7)%7);var m=new Date(d);m.setUTCDate(m.getUTCDate()+42),m=m.valueOf();for(var g,v=[];d.valueOf()<m;){if(d.getUTCDay()==this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var y=new Date(+d+(this.o.weekStart-d.getUTCDay()-7)%7*864e5),b=new Date(+y+(11-y.getUTCDay())%7*864e5),_=new Date(+(_=i(b.getUTCFullYear(),0,1))+(11-_.getUTCDay())%7*864e5),w=(b-_)/864e5/7+1;v.push('<td class="cw">'+w+"</td>")}if(g=this.getClassNames(d),g.push("day"),this.o.beforeShowDay!==e.noop){var k=this.o.beforeShowDay(this._utc_to_local(d));k===t?k={}:"boolean"==typeof k?k={enabled:k}:"string"==typeof k&&(k={classes:k}),k.enabled===!1&&g.push("disabled"),k.classes&&(g=g.concat(k.classes.split(/\s+/))),k.tooltip&&(n=k.tooltip)}g=e.unique(g),v.push('<td class="'+g.join(" ")+'"'+(n?' title="'+n+'"':"")+">"+d.getUTCDate()+"</td>"),d.getUTCDay()==this.o.weekEnd&&v.push("</tr>"),d.setUTCDate(d.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var x=this.date&&this.date.getUTCFullYear(),C=this.picker.find(".datepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");x&&x==s&&C.eq(this.date&&this.date.getUTCMonth()).addClass("active"),(o>s||s>u)&&C.addClass("disabled"),s==o&&C.slice(0,l).addClass("disabled"),s==u&&C.slice(c+1).addClass("disabled"),v="",s=10*parseInt(s/10,10);var M=this.picker.find(".datepicker-years").find("th:eq(1)").text(s+"-"+(s+9)).end().find("td");s-=1;for(var D=-1;11>D;D++)v+='<span class="year'+(-1==D?" old":10==D?" new":"")+(x==s?" active":"")+(o>s||s>u?" disabled":"")+'">'+s+"</span>",s+=1;M.html(v)},updateNavArrows:function(){if(this._allow_update){var e=new Date(this.viewDate),t=e.getUTCFullYear(),i=e.getUTCMonth();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.o.startDate!==-1/0&&t<=this.o.startDate.getUTCFullYear()&&i<=this.o.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&t>=this.o.endDate.getUTCFullYear()&&i>=this.o.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:case 2:this.picker.find(".prev").css(this.o.startDate!==-1/0&&t<=this.o.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&t>=this.o.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}}},click:function(t){t.preventDefault();var n,a,s,r=e(t.target).closest("span, td, th");if(1==r.length)switch(r[0].nodeName.toLowerCase()){case"th":switch(r[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var o=p.modes[this.viewMode].navStep*("prev"==r[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,o),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,o),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var l=new Date;l=i(l.getFullYear(),l.getMonth(),l.getDate(),0,0,0),this.showMode(-2);var u="linked"==this.o.todayBtn?null:"view";this._setDate(l,u);break;case"clear":var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()}break;case"span":r.is(".disabled")||(this.viewDate.setUTCDate(1),r.is(".month")?(s=1,a=r.parent().find("span").index(r),n=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(a),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(i(n,a,s))):(s=1,a=0,n=parseInt(r.text(),10)||0,this.viewDate.setUTCFullYear(n),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(i(n,a,s))),this.showMode(-1),this.fill());break;case"td":r.is(".day")&&!r.is(".disabled")&&(s=parseInt(r.text(),10)||1,n=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),r.is(".old")?0===a?(a=11,n-=1):a-=1:r.is(".new")&&(11==a?(a=0,n+=1):a+=1),this._setDate(i(n,a,s)))}},_setDate:function(e,t){t&&"date"!=t||(this.date=e&&new Date(e)),t&&"view"!=t||(this.viewDate=e&&new Date(e)),this.fill(),this.setValue(),this._trigger("changeDate");var i;this.isInput?i=this.element:this.component&&(i=this.element.find("input")),i&&i.change(),!this.o.autoclose||t&&"date"!=t||this.hide()},moveMonth:function(e,i){if(!e)return t;if(!i)return e;var n,a,s=new Date(e.valueOf()),r=s.getUTCDate(),o=s.getUTCMonth(),l=Math.abs(i);if(i=i>0?1:-1,1==l)a=-1==i?function(){return s.getUTCMonth()==o}:function(){return s.getUTCMonth()!=n},n=o+i,s.setUTCMonth(n),(0>n||n>11)&&(n=(n+12)%12);else{for(var u=0;l>u;u++)s=this.moveMonth(s,i);n=s.getUTCMonth(),s.setUTCDate(r),a=function(){return n!=s.getUTCMonth()}}for(;a();)s.setUTCDate(--r),s.setUTCMonth(n);return s},moveYear:function(e,t){return this.moveMonth(e,12*t)},dateWithinRange:function(e){return e>=this.o.startDate&&e<=this.o.endDate},keydown:function(e){if(this.picker.is(":not(:visible)"))return void(27==e.keyCode&&this.show());var t,i,a,s=!1;switch(e.keyCode){case 27:this.hide(),e.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;t=37==e.keyCode?-1:1,e.ctrlKey?(i=this.moveYear(this.date||n(),t),a=this.moveYear(this.viewDate,t),this._trigger("changeYear",this.viewDate)):e.shiftKey?(i=this.moveMonth(this.date||n(),t),a=this.moveMonth(this.viewDate,t),this._trigger("changeMonth",this.viewDate)):(i=new Date(this.date||n()),i.setUTCDate(i.getUTCDate()+t),a=new Date(this.viewDate),a.setUTCDate(this.viewDate.getUTCDate()+t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=a,this.setValue(),this.update(),e.preventDefault(),s=!0);break;case 38:case 40:if(!this.o.keyboardNavigation)break;t=38==e.keyCode?-1:1,e.ctrlKey?(i=this.moveYear(this.date||n(),t),a=this.moveYear(this.viewDate,t),this._trigger("changeYear",this.viewDate)):e.shiftKey?(i=this.moveMonth(this.date||n(),t),a=this.moveMonth(this.viewDate,t),this._trigger("changeMonth",this.viewDate)):(i=new Date(this.date||n()),i.setUTCDate(this.date.getUTCDate()+7*t),a=new Date(this.viewDate),a.setUTCDate(this.viewDate.getUTCDate()+7*t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=a,this.setValue(),this.update(),e.preventDefault(),s=!0);break;case 13:this.hide(),e.preventDefault();break;case 9:this.hide()}if(s){this._trigger("changeDate");var r;this.isInput?r=this.element:this.component&&(r=this.element.find("input")),r&&r.change()}},showMode:function(e){e&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+e))),this.picker.find(">div").hide().filter(".datepicker-"+p.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var l=function(t,i){this.element=e(t),this.inputs=e.map(i.inputs,function(e){return e.jquery?e[0]:e}),delete i.inputs,e(this.inputs).datepicker(i).bind("changeDate",e.proxy(this.dateUpdated,this)),this.pickers=e.map(this.inputs,function(t){return e(t).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=e.map(this.pickers,function(e){return e.date}),this.updateRanges()},updateRanges:function(){var t=e.map(this.dates,function(e){return e.valueOf()});e.each(this.pickers,function(e,i){i.setRange(t)})},dateUpdated:function(t){var i=e(t.target).data("datepicker"),n=i.getUTCDate(),a=e.inArray(t.target,this.inputs),s=this.inputs.length;if(-1!=a){if(n<this.dates[a])for(;a>=0&&n<this.dates[a];)this.pickers[a--].setUTCDate(n);else if(n>this.dates[a])for(;s>a&&n>this.dates[a];)this.pickers[a++].setUTCDate(n);this.updateDates()}},remove:function(){e.map(this.pickers,function(e){e.remove()}),delete this.element.data().datepicker}};var u=e.fn.datepicker;e.fn.datepicker=function(i){var n=Array.apply(null,arguments);n.shift();var r;return this.each(function(){var u=e(this),d=u.data("datepicker"),h="object"==typeof i&&i;if(!d){var p=a(this,"date"),f=e.extend({},c,p,h),m=s(f.language),g=e.extend({},c,m,p,h);if(u.is(".input-daterange")||g.inputs){var v={inputs:g.inputs||u.find("input").toArray()};u.data("datepicker",d=new l(this,e.extend(g,v)))}else u.data("datepicker",d=new o(this,g))}return"string"==typeof i&&"function"==typeof d[i]&&(r=d[i].apply(d,n),r!==t)?!1:void 0}),r!==t?r:this};var c=e.fn.datepicker.defaults={autoclose:!1,beforeShowDay:e.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},d=e.fn.datepicker.locale_opts=["format","rtl","weekStart"];e.fn.datepicker.Constructor=o;var h=e.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},p={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,p.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(e){var t=e.replace(this.validParts,"\x00").split("\x00"),i=e.match(this.validParts);if(!t||!t.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:t,parts:i}},parseDate:function(n,a,s){if(!n)return t;if(n instanceof Date)return n;if("string"==typeof a&&(a=p.parseFormat(a)),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)){var r,l,u=/([\-+]\d+)([dmwy])/,c=n.match(/([\-+]\d+)([dmwy])/g);n=new Date;for(var d=0;d<c.length;d++)switch(r=u.exec(c[d]),l=parseInt(r[1]),r[2]){case"d":n.setUTCDate(n.getUTCDate()+l);break;case"m":n=o.prototype.moveMonth.call(o.prototype,n,l);break;case"w":n.setUTCDate(n.getUTCDate()+7*l);break;case"y":n=o.prototype.moveYear.call(o.prototype,n,l)}return i(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0)}var f,m,r,c=n&&n.match(this.nonpunctuation)||[],n=new Date,g={},v=["yyyy","yy","M","MM","m","mm","d","dd"],y={yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){if(isNaN(e))return e;for(t-=1;0>t;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!=t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}};y.M=y.MM=y.mm=y.m,y.dd=y.d,n=i(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0);var b=a.parts.slice();if(c.length!=b.length&&(b=e(b).filter(function(t,i){return-1!==e.inArray(i,v)}).toArray()),c.length==b.length){for(var d=0,_=b.length;_>d;d++){if(f=parseInt(c[d],10),r=b[d],isNaN(f))switch(r){case"MM":m=e(h[s].months).filter(function(){var e=this.slice(0,c[d].length),t=c[d].slice(0,e.length);return e==t}),f=e.inArray(m[0],h[s].months)+1;break;case"M":m=e(h[s].monthsShort).filter(function(){var e=this.slice(0,c[d].length),t=c[d].slice(0,e.length);return e==t}),f=e.inArray(m[0],h[s].monthsShort)+1}g[r]=f}for(var w,k,d=0;d<v.length;d++)k=v[d],k in g&&!isNaN(g[k])&&(w=new Date(n),y[k](w,g[k]),isNaN(w)||(n=w))}return n},formatDate:function(t,i,n){if(!t)return"";"string"==typeof i&&(i=p.parseFormat(i));var a={d:t.getUTCDate(),D:h[n].daysShort[t.getUTCDay()],DD:h[n].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:h[n].monthsShort[t.getUTCMonth()],MM:h[n].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m;for(var t=[],s=e.extend([],i.separators),r=0,o=i.parts.length;o>=r;r++)s.length&&t.push(s.shift()),t.push(a[i.parts[r]]);return t.join("")},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};p.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+p.headTemplate+"<tbody></tbody>"+p.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+p.headTemplate+p.contTemplate+p.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+p.headTemplate+p.contTemplate+p.footTemplate+"</table></div></div>",e.fn.datepicker.DPGlobal=p,e.fn.datepicker.noConflict=function(){return e.fn.datepicker=u,this},e(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var i=e(this);i.data("datepicker")||(t.preventDefault(),i.datepicker("show"))}),e(function(){e('[data-provide="datepicker-inline"]').datepicker()})}(window.jQuery);