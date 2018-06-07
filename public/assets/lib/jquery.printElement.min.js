/*
* Print Element Plugin 1.2
*
* Copyright (c) 2010 Erik Zaadi
*
* Inspired by PrintArea (http://plugins.jquery.com/project/PrintArea) and
* http://stackoverflow.com/questions/472951/how-do-i-print-an-iframe-from-javascript-in-safari-chrome
*
*  Home Page : http://projects.erikzaadi/jQueryPlugins/jQuery.printElement 
*  Issues (bug reporting) : http://github.com/erikzaadi/jQueryPlugins/issues/labels/printElement
*  jQuery plugin page : http://plugins.jquery.com/project/printElement 
*  
*  Thanks to David B (http://github.com/ungenio) and icgJohn (http://www.blogger.com/profile/11881116857076484100)
*  For their great contributions!
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*   
*   Note, Iframe Printing is not supported in Opera and Chrome 3.0, a popup window will be shown instead
*/
!function(e){function t(e){e&&e.printPage?e.printPage():setTimeout(function(){t(e)},50)}function i(e){return e=s(e),s(":checked",e).each(function(){this.setAttribute("checked","checked")}),s("input[type='text']",e).each(function(){this.setAttribute("value",s(this).val())}),s("select",e).each(function(){var e=s(this);s("option",e).each(function(){e.val()==s(this).val()&&this.setAttribute("selected","selected")})}),s("textarea",e).each(function(){var e=s(this).attr("value");s.browser.b&&this.firstChild?this.firstChild.textContent=e:this.innerHTML=e}),s("<div></div>").append(e.clone()).html()}function n(t,n){var r=s(t);t=i(t);var o=[];if(o.push("<html><head><title>"+n.pageTitle+"</title>"),n.overrideElementCSS){if(n.overrideElementCSS.length>0)for(var l=0;l<n.overrideElementCSS.length;l++){var c=n.overrideElementCSS[l];o.push("string"==typeof c?'<link type="text/css" rel="stylesheet" href="'+c+'" >':'<link type="text/css" rel="stylesheet" href="'+c.href+'" media="'+c.media+'" >')}}else s("link",a).filter(function(){return"stylesheet"==s(this).attr("rel").toLowerCase()}).each(function(){o.push('<link type="text/css" rel="stylesheet" href="'+s(this).attr("href")+'" media="'+s(this).attr("media")+'" >')});return o.push('<base href="'+(e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")+e.location.pathname)+'" />'),o.push('</head><body style="'+n.printBodyOptions.styleToAdd+'" class="'+n.printBodyOptions.classNameToAdd+'">'),o.push('<div class="'+r.attr("class")+'">'+t+"</div>"),o.push('<script type="text/javascript">function printPage(){focus();print();'+(s.browser.opera||n.leaveOpen||"popup"!=n.printMode.toLowerCase()?"":"close();")+"}</script>"),o.push("</body></html>"),o.join("")}var a=e.document,s=e.jQuery;s.fn.printElement=function(i){var r=s.extend({},s.fn.printElement.defaults,i);return"iframe"==r.printMode&&(s.browser.opera||/chrome/.test(navigator.userAgent.toLowerCase()))&&(r.printMode="popup"),s("[id^='printElement_']").remove(),this.each(function(){var i=s.a?s.extend({},r,s(this).data()):r,o=s(this);o=n(o,i);var l=null,c=null;if("popup"==i.printMode.toLowerCase())l=e.open("about:blank","printElementWindow","width=650,height=440,scrollbars=yes"),c=l.document;else{l="printElement_"+Math.round(99999*Math.random()).toString();var u=a.createElement("IFRAME");s(u).attr({style:i.iframeElementOptions.styleToAdd,id:l,className:i.iframeElementOptions.classNameToAdd,frameBorder:0,scrolling:"no",src:"about:blank"}),a.body.appendChild(u),c=u.contentWindow||u.contentDocument,c.document&&(c=c.document),u=a.frames?a.frames[l]:a.getElementById(l),l=u.contentWindow||u}focus(),c.open(),c.write(o),c.close(),t(l)})},s.fn.printElement.defaults={printMode:"iframe",pageTitle:"",overrideElementCSS:null,printBodyOptions:{styleToAdd:"padding:10px;margin:10px;",classNameToAdd:""},leaveOpen:!1,iframeElementOptions:{styleToAdd:"border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",classNameToAdd:""}},s.fn.printElement.cssElement={href:"",media:""}}(window);