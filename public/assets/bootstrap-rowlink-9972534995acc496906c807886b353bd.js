/* ============================================================
 * bootstrap-rowlink.js j1
 * http://jasny.github.com/bootstrap/javascript.html#rowlink
 * ============================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(e){"use strict";var t=function(t,i){i=e.extend({},e.fn.rowlink.defaults,i);var n="tr"==t.nodeName.toLowerCase()?e(t):e(t).find("tr:has(td)");n.each(function(){var t=e(this).find(i.target).first();if(t.length){var n=t.attr("href");e(this).find("td").not(".nolink").click(function(){window.location=n}),e(this).addClass("rowlink"),t.replaceWith(t.html())}})};e.fn.rowlink=function(i){return this.each(function(){var n=e(this),a=n.data("rowlink");a||n.data("rowlink",a=new t(this,i))})},e.fn.rowlink.defaults={target:"a"},e.fn.rowlink.Constructor=t,e(function(){e('[data-provides="rowlink"]').each(function(){e(this).rowlink(e(this).data())})})}(window.jQuery);