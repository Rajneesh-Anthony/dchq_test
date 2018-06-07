/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
!function(e){"$:nomunge";function t(t){function a(){t?s.removeData(t):h&&delete i[h]}function r(){l.id=setTimeout(function(){l.fn()},p)}var s,o=this,l={},c=t?e.fn:e,u=arguments,d=4,h=u[1],p=u[2],m=u[3];if("string"!=typeof h&&(d--,h=t=0,p=u[1],m=u[2]),t?(s=o.eq(0),s.data(t,l=s.data(t)||{})):h&&(l=i[h]||(i[h]={})),l.id&&clearTimeout(l.id),delete l.id,m)l.fn=function(e){"string"==typeof m&&(m=c[m]),m.apply(o,n.call(u,d))!==!0||e?a():r()},r();else{if(l.fn)return void 0===p?a():l.fn(p===!1),!0;a()}}var i={},a="doTimeout",n=Array.prototype.slice;e[a]=function(){return t.apply(window,[0].concat(n.call(arguments)))},e.fn[a]=function(){var e=n.call(arguments),i=t.apply(this,[a+e[0]].concat(e));return"number"==typeof e[0]||"number"==typeof e[1]?this:i}}(jQuery);