var jscolor={dir:"",bindClass:"color",binding:!0,preloading:!0,install:function(){jscolor.addEvent(window,"load",jscolor.init)},init:function(){jscolor.binding&&jscolor.bind(),jscolor.preloading&&jscolor.preload()},getDir:function(){if(!jscolor.dir){var e=jscolor.detectDir();jscolor.dir=e!==!1?e:"jscolor/"}return jscolor.dir},detectDir:function(){for(var e=location.href,t=document.getElementsByTagName("base"),i=0;i<t.length;i+=1)t[i].href&&(e=t[i].href);for(var t=document.getElementsByTagName("script"),i=0;i<t.length;i+=1)if(t[i].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(t[i].src)){var n=new jscolor.URI(t[i].src),a=n.toAbsolute(e);return a.path=a.path.replace(/[^\/]+$/,""),a.query=null,a.fragment=null,a.toString()}return!1},bind:function(){for(var e=new RegExp("(^|\\s)("+jscolor.bindClass+")\\s*(\\{[^}]*\\})?","i"),t=document.getElementsByTagName("input"),i=0;i<t.length;i+=1){var n;if(!t[i].color&&t[i].className&&(n=t[i].className.match(e))){var a={};if(n[3])try{a=new Function("return ("+n[3]+")")()}catch(s){}t[i].color=new jscolor.color(t[i],a)}}},preload:function(){for(var e in jscolor.imgRequire)jscolor.imgRequire.hasOwnProperty(e)&&jscolor.loadImage(e)},images:{pad:[181,101],sld:[16,101],cross:[15,15],arrow:[7,11]},imgRequire:{},imgLoaded:{},requireImage:function(e){jscolor.imgRequire[e]=!0},loadImage:function(e){jscolor.imgLoaded[e]||(jscolor.imgLoaded[e]=new Image,jscolor.imgLoaded[e].src=jscolor.getDir()+e)},fetchElement:function(e){return"string"==typeof e?document.getElementById(e):e},addEvent:function(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i)},fireEvent:function(e,t){if(e)if(document.createEvent){var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!0),e.dispatchEvent(i)}else if(document.createEventObject){var i=document.createEventObject();e.fireEvent("on"+t,i)}else e["on"+t]&&e["on"+t]()},getElementPos:function(e){var t=e,i=e,n=0,a=0;if(t.offsetParent)do n+=t.offsetLeft,a+=t.offsetTop;while(t=t.offsetParent);for(;(i=i.parentNode)&&"BODY"!==i.nodeName.toUpperCase();)n-=i.scrollLeft,a-=i.scrollTop;return[n,a]},getElementSize:function(e){return[e.offsetWidth,e.offsetHeight]},getRelMousePos:function(e){var t=0,i=0;return e||(e=window.event),"number"==typeof e.offsetX?(t=e.offsetX,i=e.offsetY):"number"==typeof e.layerX&&(t=e.layerX,i=e.layerY),{x:t,y:i}},getViewPos:function(){return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]},getViewSize:function(){return"number"==typeof window.innerWidth?[window.innerWidth,window.innerHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:[0,0]},URI:function(e){function t(e){for(var t="";e;)if("../"===e.substr(0,3)||"./"===e.substr(0,2))e=e.replace(/^\.+/,"").substr(1);else if("/./"===e.substr(0,3)||"/."===e)e="/"+e.substr(3);else if("/../"===e.substr(0,4)||"/.."===e)e="/"+e.substr(4),t=t.replace(/\/?[^\/]*$/,"");else if("."===e||".."===e)e="";else{var i=e.match(/^\/?[^\/]*/)[0];e=e.substr(i.length),t+=i}return t}this.scheme=null,this.authority=null,this.path="",this.query=null,this.fragment=null,this.parse=function(e){var t=e.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);return this.scheme=t[3]?t[2]:null,this.authority=t[5]?t[6]:null,this.path=t[7],this.query=t[9]?t[10]:null,this.fragment=t[12]?t[13]:null,this},this.toString=function(){var e="";return null!==this.scheme&&(e=e+this.scheme+":"),null!==this.authority&&(e=e+"//"+this.authority),null!==this.path&&(e+=this.path),null!==this.query&&(e=e+"?"+this.query),null!==this.fragment&&(e=e+"#"+this.fragment),e},this.toAbsolute=function(e){var e=new jscolor.URI(e),i=this,n=new jscolor.URI;return null===e.scheme?!1:(null!==i.scheme&&i.scheme.toLowerCase()===e.scheme.toLowerCase()&&(i.scheme=null),null!==i.scheme?(n.scheme=i.scheme,n.authority=i.authority,n.path=t(i.path),n.query=i.query):(null!==i.authority?(n.authority=i.authority,n.path=t(i.path),n.query=i.query):(""===i.path?(n.path=e.path,n.query=null!==i.query?i.query:e.query):("/"===i.path.substr(0,1)?n.path=t(i.path):(n.path=null!==e.authority&&""===e.path?"/"+i.path:e.path.replace(/[^\/]+$/,"")+i.path,n.path=t(n.path)),n.query=i.query),n.authority=e.authority),n.scheme=e.scheme),n.fragment=i.fragment,n)},e&&this.parse(e)},color:function(e,t){function i(e,t,i){var n=Math.min(Math.min(e,t),i),a=Math.max(Math.max(e,t),i),s=a-n;if(0===s)return[null,0,a];var r=e===n?3+(i-t)/s:t===n?5+(e-i)/s:1+(t-e)/s;return[6===r?0:r,s/a,a]}function n(e,t,i){if(null===e)return[i,i,i];var n=Math.floor(e),a=n%2?e-n:1-(e-n),s=i*(1-t),r=i*(1-t*a);switch(n){case 6:case 0:return[i,r,s];case 1:return[r,i,s];case 2:return[s,i,r];case 3:return[s,r,i];case 4:return[r,s,i];case 5:return[i,s,r]}}function a(){delete jscolor.picker.owner,document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB)}function s(t,i){function n(){var e=g.pickerInsetColor.split(/\s+/),t=e.length<2?e[0]:e[1]+" "+e[0]+" "+e[0]+" "+e[1];u.btn.style.borderColor=t}if(!jscolor.picker){jscolor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),btn:document.createElement("div"),btnS:document.createElement("span"),btnT:document.createTextNode(g.pickerCloseText)};for(var a=0,s=4;a<jscolor.images.sld[1];a+=s){var c=document.createElement("div");c.style.height=s+"px",c.style.fontSize="1px",c.style.lineHeight="0",jscolor.picker.sld.appendChild(c)}jscolor.picker.sldB.appendChild(jscolor.picker.sld),jscolor.picker.box.appendChild(jscolor.picker.sldB),jscolor.picker.box.appendChild(jscolor.picker.sldM),jscolor.picker.padB.appendChild(jscolor.picker.pad),jscolor.picker.box.appendChild(jscolor.picker.padB),jscolor.picker.box.appendChild(jscolor.picker.padM),jscolor.picker.btnS.appendChild(jscolor.picker.btnT),jscolor.picker.btn.appendChild(jscolor.picker.btnS),jscolor.picker.box.appendChild(jscolor.picker.btn),jscolor.picker.boxB.appendChild(jscolor.picker.box)}var u=jscolor.picker;u.box.onmouseup=u.box.onmouseout=function(){e.focus()},u.box.onmousedown=function(){b=!0},u.box.onmousemove=function(e){(w||k)&&(w&&h(e),k&&p(e),document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),f())},u.padM.onmouseup=u.padM.onmouseout=function(){w&&(w=!1,jscolor.fireEvent(_,"change"))},u.padM.onmousedown=function(e){switch(v){case 0:0===g.hsv[2]&&g.fromHSV(null,null,1);break;case 1:0===g.hsv[1]&&g.fromHSV(null,1,null)}w=!0,h(e),f()},u.sldM.onmouseup=u.sldM.onmouseout=function(){k&&(k=!1,jscolor.fireEvent(_,"change"))},u.sldM.onmousedown=function(e){k=!0,p(e),f()};var d=r(g);u.box.style.width=d[0]+"px",u.box.style.height=d[1]+"px",u.boxB.style.position="absolute",u.boxB.style.clear="both",u.boxB.style.left=t+"px",u.boxB.style.top=i+"px",u.boxB.style.zIndex=g.pickerZIndex,u.boxB.style.border=g.pickerBorder+"px solid",u.boxB.style.borderColor=g.pickerBorderColor,u.boxB.style.background=g.pickerFaceColor,u.pad.style.width=jscolor.images.pad[0]+"px",u.pad.style.height=jscolor.images.pad[1]+"px",u.padB.style.position="absolute",u.padB.style.left=g.pickerFace+"px",u.padB.style.top=g.pickerFace+"px",u.padB.style.border=g.pickerInset+"px solid",u.padB.style.borderColor=g.pickerInsetColor,u.padM.style.position="absolute",u.padM.style.left="0",u.padM.style.top="0",u.padM.style.width=g.pickerFace+2*g.pickerInset+jscolor.images.pad[0]+jscolor.images.arrow[0]+"px",u.padM.style.height=u.box.style.height,u.padM.style.cursor="crosshair",u.sld.style.overflow="hidden",u.sld.style.width=jscolor.images.sld[0]+"px",u.sld.style.height=jscolor.images.sld[1]+"px",u.sldB.style.display=g.slider?"block":"none",u.sldB.style.position="absolute",u.sldB.style.right=g.pickerFace+"px",u.sldB.style.top=g.pickerFace+"px",u.sldB.style.border=g.pickerInset+"px solid",u.sldB.style.borderColor=g.pickerInsetColor,u.sldM.style.display=g.slider?"block":"none",u.sldM.style.position="absolute",u.sldM.style.right="0",u.sldM.style.top="0",u.sldM.style.width=jscolor.images.sld[0]+jscolor.images.arrow[0]+g.pickerFace+2*g.pickerInset+"px",u.sldM.style.height=u.box.style.height;try{u.sldM.style.cursor="pointer"}catch(m){u.sldM.style.cursor="hand"}u.btn.style.display=g.pickerClosable?"block":"none",u.btn.style.position="absolute",u.btn.style.left=g.pickerFace+"px",u.btn.style.bottom=g.pickerFace+"px",u.btn.style.padding="0 15px",u.btn.style.height="18px",u.btn.style.border=g.pickerInset+"px solid",n(),u.btn.style.color=g.pickerButtonColor,u.btn.style.font="12px sans-serif",u.btn.style.textAlign="center";try{u.btn.style.cursor="pointer"}catch(m){u.btn.style.cursor="hand"}switch(u.btn.onmousedown=function(){g.hidePicker()},u.btnS.style.lineHeight=u.btn.style.height,v){case 0:var y="hs.png";break;case 1:var y="hv.png"}u.padM.style.backgroundImage="url('/assets/jscolor/cross.gif')",u.padM.style.backgroundRepeat="no-repeat",u.sldM.style.backgroundImage="url('/assets/jscolor/arrow.gif')",u.sldM.style.backgroundRepeat="no-repeat",u.pad.style.backgroundImage="url('/assets/jscolor/"+y+"')",u.pad.style.backgroundRepeat="no-repeat",u.pad.style.backgroundPosition="0 0",o(),l(),jscolor.picker.owner=g,document.getElementsByTagName("body")[0].appendChild(u.boxB)}function r(e){var t=[2*e.pickerInset+2*e.pickerFace+jscolor.images.pad[0]+(e.slider?2*e.pickerInset+2*jscolor.images.arrow[0]+jscolor.images.sld[0]:0),e.pickerClosable?4*e.pickerInset+3*e.pickerFace+jscolor.images.pad[1]+e.pickerButtonHeight:2*e.pickerInset+2*e.pickerFace+jscolor.images.pad[1]];return t}function o(){switch(v){case 0:var e=1;break;case 1:var e=2}var t=Math.round(g.hsv[0]/6*(jscolor.images.pad[0]-1)),i=Math.round((1-g.hsv[e])*(jscolor.images.pad[1]-1));jscolor.picker.padM.style.backgroundPosition=g.pickerFace+g.pickerInset+t-Math.floor(jscolor.images.cross[0]/2)+"px "+(g.pickerFace+g.pickerInset+i-Math.floor(jscolor.images.cross[1]/2))+"px";var a=jscolor.picker.sld.childNodes;switch(v){case 0:for(var s=n(g.hsv[0],g.hsv[1],1),r=0;r<a.length;r+=1)a[r].style.backgroundColor="rgb("+s[0]*(1-r/a.length)*100+"%,"+s[1]*(1-r/a.length)*100+"%,"+s[2]*(1-r/a.length)*100+"%)";break;case 1:var s,o,l=[g.hsv[2],0,0],r=Math.floor(g.hsv[0]),c=r%2?g.hsv[0]-r:1-(g.hsv[0]-r);switch(r){case 6:case 0:s=[0,1,2];break;case 1:s=[1,0,2];break;case 2:s=[2,0,1];break;case 3:s=[2,1,0];break;case 4:s=[1,2,0];break;case 5:s=[0,2,1]}for(var r=0;r<a.length;r+=1)o=1-1/(a.length-1)*r,l[1]=l[0]*(1-o*c),l[2]=l[0]*(1-o),a[r].style.backgroundColor="rgb("+100*l[s[0]]+"%,"+100*l[s[1]]+"%,"+100*l[s[2]]+"%)"}}function l(){switch(v){case 0:var e=2;break;case 1:var e=1}var t=Math.round((1-g.hsv[e])*(jscolor.images.sld[1]-1));jscolor.picker.sldM.style.backgroundPosition="0 "+(g.pickerFace+g.pickerInset+t-Math.floor(jscolor.images.arrow[1]/2))+"px"}function c(){return jscolor.picker&&jscolor.picker.owner===g}function u(){_===e&&g.importColor(),g.pickerOnfocus&&g.hidePicker()}function d(){_!==e&&g.importColor()}function h(e){var t=jscolor.getRelMousePos(e),i=t.x-g.pickerFace-g.pickerInset,n=t.y-g.pickerFace-g.pickerInset;switch(v){case 0:g.fromHSV(i*(6/(jscolor.images.pad[0]-1)),1-n/(jscolor.images.pad[1]-1),null,D);break;case 1:g.fromHSV(i*(6/(jscolor.images.pad[0]-1)),null,1-n/(jscolor.images.pad[1]-1),D)}}function p(e){var t=jscolor.getRelMousePos(e),i=t.y-g.pickerFace-g.pickerInset;switch(v){case 0:g.fromHSV(null,null,1-i/(jscolor.images.sld[1]-1),S);break;case 1:g.fromHSV(null,1-i/(jscolor.images.sld[1]-1),null,S)}}function f(){if(g.onImmediateChange){var e;e="string"==typeof g.onImmediateChange?new Function(g.onImmediateChange):g.onImmediateChange,e.call(g)}}this.required=!0,this.adjust=!0,this.hash=!1,this.caps=!0,this.slider=!0,this.valueElement=e,this.styleElement=e,this.onImmediateChange=null,this.hsv=[0,0,1],this.rgb=[1,1,1],this.minH=0,this.maxH=6,this.minS=0,this.maxS=1,this.minV=0,this.maxV=1,this.pickerOnfocus=!0,this.pickerMode="HSV",this.pickerPosition="bottom",this.pickerSmartPosition=!0,this.pickerButtonHeight=20,this.pickerClosable=!1,this.pickerCloseText="Close",this.pickerButtonColor="ButtonText",this.pickerFace=10,this.pickerFaceColor="ThreeDFace",this.pickerBorder=1,this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight",this.pickerInset=1,this.pickerInsetColor="ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow",this.pickerZIndex=1e4;for(var m in t)t.hasOwnProperty(m)&&(this[m]=t[m]);this.hidePicker=function(){c()&&a()},this.showPicker=function(){if(!c()){var t,i,n,a=jscolor.getElementPos(e),o=jscolor.getElementSize(e),l=jscolor.getViewPos(),u=jscolor.getViewSize(),d=r(this);switch(this.pickerPosition.toLowerCase()){case"left":t=1,i=0,n=-1;break;case"right":t=1,i=0,n=1;break;case"top":t=0,i=1,n=-1;break;default:t=0,i=1,n=1}var h=(o[i]+d[i])/2;if(this.pickerSmartPosition)var p=[-l[t]+a[t]+d[t]>u[t]&&-l[t]+a[t]+o[t]/2>u[t]/2&&a[t]+o[t]-d[t]>=0?a[t]+o[t]-d[t]:a[t],-l[i]+a[i]+o[i]+d[i]-h+h*n>u[i]?-l[i]+a[i]+o[i]/2>u[i]/2&&a[i]+o[i]-h-h*n>=0?a[i]+o[i]-h-h*n:a[i]+o[i]-h+h*n:a[i]+o[i]-h+h*n>=0?a[i]+o[i]-h+h*n:a[i]+o[i]-h-h*n];else var p=[a[t],a[i]+o[i]-h+h*n];s(p[t],p[i])}},this.importColor=function(){_?this.adjust?!this.required&&/^\s*$/.test(_.value)?(_.value="",y.style.backgroundImage=y.jscStyle.backgroundImage,y.style.backgroundColor=y.jscStyle.backgroundColor,y.style.color=y.jscStyle.color,this.exportColor(x|C)):this.fromString(_.value)||this.exportColor():this.fromString(_.value,x)||(y.style.backgroundImage=y.jscStyle.backgroundImage,y.style.backgroundColor=y.jscStyle.backgroundColor,y.style.color=y.jscStyle.color,this.exportColor(x|C)):this.exportColor()},this.exportColor=function(e){if(!(e&x)&&_){var t=this.toString();this.caps&&(t=t.toUpperCase()),this.hash&&(t="#"+t),_.value=t}e&C||!y||(y.style.backgroundImage="none",y.style.backgroundColor="#"+this.toString(),y.style.color=.213*this.rgb[0]+.715*this.rgb[1]+.072*this.rgb[2]<.5?"#FFF":"#000"),e&S||!c()||o(),e&D||!c()||l()},this.fromHSV=function(e,t,i,a){null!==e&&(e=Math.max(0,this.minH,Math.min(6,this.maxH,e))),null!==t&&(t=Math.max(0,this.minS,Math.min(1,this.maxS,t))),null!==i&&(i=Math.max(0,this.minV,Math.min(1,this.maxV,i))),this.rgb=n(null===e?this.hsv[0]:this.hsv[0]=e,null===t?this.hsv[1]:this.hsv[1]=t,null===i?this.hsv[2]:this.hsv[2]=i),this.exportColor(a)},this.fromRGB=function(e,t,a,s){null!==e&&(e=Math.max(0,Math.min(1,e))),null!==t&&(t=Math.max(0,Math.min(1,t))),null!==a&&(a=Math.max(0,Math.min(1,a)));var r=i(null===e?this.rgb[0]:e,null===t?this.rgb[1]:t,null===a?this.rgb[2]:a);null!==r[0]&&(this.hsv[0]=Math.max(0,this.minH,Math.min(6,this.maxH,r[0]))),0!==r[2]&&(this.hsv[1]=null===r[1]?null:Math.max(0,this.minS,Math.min(1,this.maxS,r[1]))),this.hsv[2]=null===r[2]?null:Math.max(0,this.minV,Math.min(1,this.maxV,r[2]));var o=n(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=o[0],this.rgb[1]=o[1],this.rgb[2]=o[2],this.exportColor(s)},this.fromString=function(e,t){var i=e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);return i?(6===i[1].length?this.fromRGB(parseInt(i[1].substr(0,2),16)/255,parseInt(i[1].substr(2,2),16)/255,parseInt(i[1].substr(4,2),16)/255,t):this.fromRGB(parseInt(i[1].charAt(0)+i[1].charAt(0),16)/255,parseInt(i[1].charAt(1)+i[1].charAt(1),16)/255,parseInt(i[1].charAt(2)+i[1].charAt(2),16)/255,t),!0):!1},this.toString=function(){return(256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1)};var g=this,v="hvs"===this.pickerMode.toLowerCase()?1:0,b=!1,_=jscolor.fetchElement(this.valueElement),y=jscolor.fetchElement(this.styleElement),w=!1,k=!1,x=1,C=2,S=4,D=8;if(jscolor.addEvent(e,"focus",function(){g.pickerOnfocus&&g.showPicker()}),jscolor.addEvent(e,"blur",function(){b?b=!1:window.setTimeout(function(){b||u(),b=!1},0)}),_){var T=function(){g.fromString(_.value,x),f()};jscolor.addEvent(_,"keyup",T),jscolor.addEvent(_,"input",T),jscolor.addEvent(_,"blur",d),_.setAttribute("autocomplete","off")}switch(y&&(y.jscStyle={backgroundImage:y.style.backgroundImage,backgroundColor:y.style.backgroundColor,color:y.style.color}),v){case 0:jscolor.requireImage("/assets/jscolor/hs.png");break;case 1:jscolor.requireImage("/assets/jscolor/hv.png")}jscolor.requireImage("/assets/jscolor/cross.gif"),jscolor.requireImage("/assets/jscolor/arrow.gif"),this.importColor()}};jscolor.install();