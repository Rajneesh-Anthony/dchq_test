!function(e){function t(e){function t(e,t,a){var r=null;if(i(t)&&(c(t),n(e),s(e),l(t),g>=2)){var o=u(t),v=0,_=d();v=h(o)?-1*p(m,o-1,Math.floor(g/2)-1)-_:p(m,Math.ceil(g/2),o-2)+_+2*b,r=f(a,t,v),a.points=r}return r}function i(e){return null!=e.bars&&e.bars.show&&null!=e.bars.order}function n(e){var t=y?e.getPlaceholder().innerHeight():e.getPlaceholder().innerWidth(),i=y?a(e.getData(),1):a(e.getData(),0),n=i[1]-i[0];_=n/t}function a(e,t){for(var i=new Array,n=0;n<e.length;n++)i[0]=e[n].data[0][t],i[1]=e[n].data[e[n].data.length-1][t];return i}function s(e){m=r(e.getData()),g=m.length}function r(e){for(var t=new Array,i=0;i<e.length;i++)null!=e[i].bars.order&&e[i].bars.show&&t.push(e[i]);return t.sort(o)}function o(e,t){var i=e.bars.order,n=t.bars.order;return n>i?-1:i>n?1:0}function l(e){v=e.bars.lineWidth?e.bars.lineWidth:2,b=v*_}function c(e){e.bars.horizontal&&(y=!0)}function u(e){for(var t=0,i=0;i<m.length;++i)if(e==m[i]){t=i;break}return t+1}function d(){var e=0;return g%2!=0&&(e=m[Math.ceil(g/2)].bars.barWidth/2),e}function h(e){return e<=Math.ceil(g/2)}function p(e,t,i){for(var n=0,a=t;i>=a;a++)n+=e[a].bars.barWidth+2*b;return n}function f(e,t,i){for(var n=e.pointsize,a=e.points,s=0,r=y?1:0;r<a.length;r+=n)a[r]+=i,t.data[s][3]=a[r],s++;return a}var m,g,v,b,_=1,y=!1;e.hooks.processDatapoints.push(t)}var i={series:{bars:{order:null}}};e.plot.plugins.push({init:t,options:i,name:"orderBars",version:"0.2"})}(jQuery);