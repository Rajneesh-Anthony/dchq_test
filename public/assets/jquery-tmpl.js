/*
 * jQuery Templating Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
!function(e){function t(t,i,n,a){var s={data:a||(i?i.data:{}),_wrap:i?i._wrap:null,tmpl:null,parent:i||null,nodes:[],calls:c,nest:u,wrap:h,html:d,update:p};return t&&e.extend(s,t,{nodes:[],parent:i}),n&&(s.tmpl=n,s._ctnt=s._ctnt||s.tmpl(e,s),s.key=++w,(x.length?_:b)[w]=s),s}function i(t,a,s){var r,o=s?e.map(s,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+t.key+'" $2'):e:i(e,t,e._ctnt)}):t;return a?o:(o=o.join(""),o.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,i,a,s){r=e(a).get(),l(r),i&&(r=n(i).concat(r)),s&&(r=r.concat(n(s)))}),r?r:n(o))}function n(t){var i=document.createElement("div");return i.innerHTML=t,e.makeArray(i.childNodes)}function a(t){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,i,n,a,s,o,l){var c,u,h,d=e.tmpl.tag[n];if(!d)throw"Template command not found: "+n;return c=d._default||[],o&&!/\w$/.test(s)&&(s+=o,o=""),s?(s=r(s),l=l?","+r(l)+")":o?")":"",u=o?s.indexOf(".")>-1?s+o:"("+s+").call($item"+l:s,h=o?u:"(typeof("+s+")==='function'?("+s+").call($item):("+s+"))"):h=u=c.$1||"null",a=r(a),"');"+d[i?"close":"open"].split("$notnull_1").join(s?"typeof("+s+")!=='undefined' && ("+s+")!=null":"true").split("$1a").join(h).split("$1").join(u).split("$2").join(a?a.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(e,t,i,n){return n=n?","+n+")":i?")":"",n?"("+t+").call($item"+n:e}):c.$2||"")+"_.push('"})+"');}return _;")}function s(t,n){t._wrap=i(t,!0,e.isArray(n)?n:[v.test(n)?n:e(n).html()]).join("")}function r(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function o(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(i){function n(i){function n(e){e+=c,r=u[e]=u[e]||t(r,b[r.parent.key+c]||r.parent,null,!0)}var a,s,r,o,l=i;if(o=i.getAttribute(g)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(a=l.getAttribute(g)););a!==o&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(g)||0:0,(r=b[o])||(r=_[o],r=t(r,b[l]||_[l],null,!0),r.key=++w,b[w]=r),k&&n(o)),i.removeAttribute(g)}else k&&(r=e.data(i,"tmplItem"))&&(n(r.key),b[r.key]=r,l=e.data(i.parentNode,"tmplItem"),l=l?l.key:0);if(r){for(s=r;s&&s.key!=l;)s.nodes.push(i),s=s.parent;delete r._ctnt,delete r._wrap,e.data(i,"tmplItem",r)}}var a,s,r,o,l,c="_"+k,u={};for(r=0,o=i.length;o>r;r++)if(1===(a=i[r]).nodeType){for(s=a.getElementsByTagName("*"),l=s.length-1;l>=0;l--)n(s[l]);n(a)}}function c(e,t,i,n){return e?void x.push({_:e,tmpl:t,item:this,data:i,options:n}):x.pop()}function u(t,i,n){return e.tmpl(e.template(t),i,n,this)}function h(t,i){var n=t.options||{};return n.wrapped=i,e.tmpl(e.template(t.tmpl),t.data,n,t.item)}function d(t,i){var n=this._wrap;return e.map(e(e.isArray(n)?n.join(""):n).filter(t||"*"),function(e){return i?e.innerText||e.textContent:e.outerHTML||o(e)})}function p(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var f,m=e.fn.domManip,g="_tmplitem",v=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},_={},y={key:0,data:{}},w=0,k=0,x=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,i){e.fn[t]=function(n){var a,s,r,o,l=[],c=e(n),u=1===this.length&&this[0].parentNode;if(f=b||{},u&&11===u.nodeType&&1===u.childNodes.length&&1===c.length)c[i](this[0]),l=this;else{for(s=0,r=c.length;r>s;s++)k=s,a=(s>0?this.clone(!0):this).get(),e.fn[i].apply(e(c[s]),a),l=l.concat(a);k=0,l=this.pushStack(l,t,c.selector)}return o=f,f=null,e.tmpl.complete(o),l}}),e.fn.extend({tmpl:function(t,i,n){return e.tmpl(this[0],t,i,n)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,i,n){if(t[0]&&t[0].nodeType){for(var a,s=e.makeArray(arguments),r=t.length,o=0;r>o&&!(a=e.data(t[o++],"tmplItem")););r>1&&(s[0]=[e.makeArray(t)]),a&&k&&(s[2]=function(t){e.tmpl.afterManip(this,t,n)}),m.apply(this,s)}else m.apply(this,arguments);return k=0,f||e.tmpl.complete(b),this}}),e.extend({tmpl:function(n,a,r,o){var l,c=!o;if(c)o=y,n=e.template[n]||e.template(null,n),_={};else if(!n)return n=o.tmpl,b[o.key]=o,o.nodes=[],o.wrapped&&s(o,o.wrapped),e(i(o,null,o.tmpl(e,o)));return n?("function"==typeof a&&(a=a.call(o||{})),r&&r.wrapped&&s(r,r.wrapped),l=e.isArray(a)?e.map(a,function(e){return e?t(r,o,n,e):null}):[t(r,o,n,a)],c?e(i(o,null,l)):l):[]},tmplItem:function(t){var i;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(i=e.data(t,"tmplItem"))&&(t=t.parentNode););return i||y},template:function(t,i){return i?("string"==typeof i?i=a(i):i instanceof e&&(i=i[0]||{}),i.nodeType&&(i=e.data(i,"tmpl")||e.data(i,"tmpl",a(i.innerHTML))),"string"==typeof t?e.template[t]=i:i):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,v.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(t,i,n){var a=11===i.nodeType?e.makeArray(i.childNodes):1===i.nodeType?[i]:[];n.call(t,i),l(a),k++}})}(jQuery);