/*!
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
!function(e,t,i){"$:nomunge";function n(){a=t[o](function(){s.each(function(){var t=e(this),i=t.width(),n=t.height(),a=e.data(this,c);(i!==a.w||n!==a.h)&&t.trigger(l,[a.w=i,a.h=n])}),n()},r[u])}var a,s=e([]),r=e.resize=e.extend(e.resize,{}),o="setTimeout",l="resize",c=l+"-special-event",u="delay",d="throttleWindow";r[u]=250,r[d]=!0,e.event.special[l]={setup:function(){if(!r[d]&&this[o])return!1;var t=e(this);s=s.add(t),e.data(this,c,{w:t.width(),h:t.height()}),1===s.length&&n()},teardown:function(){if(!r[d]&&this[o])return!1;var t=e(this);s=s.not(t),t.removeData(c),s.length||clearTimeout(a)},add:function(t){function n(t,n,s){var r=e(this),o=e.data(this,c);o.w=n!==i?n:r.width(),o.h=s!==i?s:r.height(),a.apply(this,arguments)}if(!r[d]&&this[o])return!1;var a;return e.isFunction(t)?(a=t,n):(a=t.handler,void(t.handler=n))}}}(jQuery,this);