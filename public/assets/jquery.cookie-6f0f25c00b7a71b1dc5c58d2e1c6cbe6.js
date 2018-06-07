/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e,t,i){function n(e){return e}function a(e){return s(decodeURIComponent(e.replace(o," ")))}function s(e){return 0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),e}function r(e){return l.json?JSON.parse(e):e}var o=/\+/g,l=e.cookie=function(s,o,c){if(o!==i){if(c=e.extend({},l.defaults,c),null===o&&(c.expires=-1),"number"==typeof c.expires){var u=c.expires,h=c.expires=new Date;h.setDate(h.getDate()+u)}return o=l.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(s),"=",l.raw?o:encodeURIComponent(o),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=l.raw?n:a,p=t.cookie.split("; "),f=s?null:{},m=0,g=p.length;g>m;m++){var v=p[m].split("="),b=d(v.shift()),_=d(v.join("="));if(s&&s===b){f=r(_);break}s||(f[b]=r(_))}return f};l.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);