/*

Uniform v1.7.5
Copyright © 2009 Josh Pyles / Pixelmatrix Design LLC
http://pixelmatrixdesign.com

Requires jQuery 1.4 or newer

Much thanks to Thomas Reynolds and Buck Wilson for their help and advice on this

Disabling text selection is made possible by Mathias Bynens <http://mathiasbynens.be/>
and his noSelect plugin. <http://github.com/mathiasbynens/noSelect-jQuery-Plugin>

Also, thanks to David Kaneda and Eugene Bond for their contributions to the plugin

License:
MIT License - http://www.opensource.org/licenses/mit-license.php

Enjoy!

*/
!function(e){e.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:!0,idPrefix:"uniform",resetSelector:!1,autoHide:!0},elements:[]},e.support.selectOpacity=e.browser.msie&&e.browser.version<7?!1:!0,e.fn.uniform=function(t){function i(t){$el=e(t),$el.addClass($el.attr("type")),c(t)}function n(t){e(t).addClass("uniform"),c(t)}function a(i){var n=e(i),a=e("<div>"),s=e("<span>");a.addClass(t.buttonClass),t.useID&&""!=n.attr("id")&&a.attr("id",t.idPrefix+"-"+n.attr("id"));var r;n.is("a")||n.is("button")?r=n.text():(n.is(":submit")||n.is(":reset")||n.is("input[type=button]"))&&(r=n.attr("value")),r=""==r?n.is(":reset")?"Reset":"Submit":r,s.html(r),n.css("opacity",0),n.wrap(a),n.wrap(s),a=n.closest("div"),s=n.closest("span"),n.is(":disabled")&&a.addClass(t.disabledClass),a.bind({"mouseenter.uniform":function(){a.addClass(t.hoverClass)},"mouseleave.uniform":function(){a.removeClass(t.hoverClass),a.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){a.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){a.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(t){if(e(t.target).is("span")||e(t.target).is("div"))if(i[0].dispatchEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),i[0].dispatchEvent(n)}else i[0].click()}}),i.bind({"focus.uniform":function(){a.addClass(t.focusClass)},"blur.uniform":function(){a.removeClass(t.focusClass)}}),e.uniform.noSelect(a),c(i)}function s(i){var n=e(i),a=e("<div />"),s=e("<span />");"none"==!n.css("display")&&t.autoHide&&a.hide(),a.addClass(t.selectClass),t.useID&&""!=i.attr("id")&&a.attr("id",t.idPrefix+"-"+i.attr("id"));var r=i.find(":selected:first");0==r.length&&(r=i.find("option:first")),s.html(r.html()),i.css("opacity",0),i.wrap(a),i.before(s),a=i.parent("div"),s=i.siblings("span"),i.bind({"change.uniform":function(){s.text(i.find(":selected").html()),a.removeClass(t.activeClass)},"focus.uniform":function(){a.addClass(t.focusClass)},"blur.uniform":function(){a.removeClass(t.focusClass),a.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){a.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){a.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(){a.removeClass(t.activeClass)},"mouseenter.uniform":function(){a.addClass(t.hoverClass)},"mouseleave.uniform":function(){a.removeClass(t.hoverClass),a.removeClass(t.activeClass)},"keyup.uniform":function(){s.text(i.find(":selected").html())}}),e(i).attr("disabled")&&a.addClass(t.disabledClass),e.uniform.noSelect(s),c(i)}function r(i){var n=e(i),a=e("<div />"),s=e("<span />");"none"==!n.css("display")&&t.autoHide&&a.hide(),a.addClass(t.checkboxClass),t.useID&&""!=i.attr("id")&&a.attr("id",t.idPrefix+"-"+i.attr("id")),e(i).wrap(a),e(i).wrap(s),s=i.parent(),a=s.parent(),e(i).css("opacity",0).bind({"focus.uniform":function(){a.addClass(t.focusClass)},"blur.uniform":function(){a.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){e(i).attr("checked")?s.addClass(t.checkedClass):s.removeClass(t.checkedClass)},"mousedown.uniform touchbegin.uniform":function(){a.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){a.removeClass(t.activeClass)},"mouseenter.uniform":function(){a.addClass(t.hoverClass)},"mouseleave.uniform":function(){a.removeClass(t.hoverClass),a.removeClass(t.activeClass)}}),e(i).attr("checked")&&s.addClass(t.checkedClass),e(i).attr("disabled")&&a.addClass(t.disabledClass),c(i)}function o(i){var n=e(i),a=e("<div />"),s=e("<span />");"none"==!n.css("display")&&t.autoHide&&a.hide(),a.addClass(t.radioClass),t.useID&&""!=i.attr("id")&&a.attr("id",t.idPrefix+"-"+i.attr("id")),e(i).wrap(a),e(i).wrap(s),s=i.parent(),a=s.parent(),e(i).css("opacity",0).bind({"focus.uniform":function(){a.addClass(t.focusClass)},"blur.uniform":function(){a.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){if(e(i).attr("checked")){var n=t.radioClass.split(" ")[0];e("."+n+" span."+t.checkedClass+":has([name='"+e(i).attr("name")+"'])").removeClass(t.checkedClass),s.addClass(t.checkedClass)}else s.removeClass(t.checkedClass)},"mousedown.uniform touchend.uniform":function(){e(i).is(":disabled")||a.addClass(t.activeClass)},"mouseup.uniform touchbegin.uniform":function(){a.removeClass(t.activeClass)},"mouseenter.uniform touchend.uniform":function(){a.addClass(t.hoverClass)},"mouseleave.uniform":function(){a.removeClass(t.hoverClass),a.removeClass(t.activeClass)}}),e(i).attr("checked")&&s.addClass(t.checkedClass),e(i).attr("disabled")&&a.addClass(t.disabledClass),c(i)}function l(i){var n=e(i),a=e("<div />"),s=e("<span>"+t.fileDefaultText+"</span>"),r=e("<span>"+t.fileBtnText+"</span>");if("none"==!n.css("display")&&t.autoHide&&a.hide(),a.addClass(t.fileClass),s.addClass(t.filenameClass),r.addClass(t.fileBtnClass),t.useID&&""!=n.attr("id")&&a.attr("id",t.idPrefix+"-"+n.attr("id")),n.wrap(a),n.after(r),n.after(s),a=n.closest("div"),s=n.siblings("."+t.filenameClass),r=n.siblings("."+t.fileBtnClass),!n.attr("size")){var o=a.width();n.attr("size",o/10)}var l=function(){var e=n.val();""===e?e=t.fileDefaultText:(e=e.split(/[\/\\]+/),e=e[e.length-1]),s.text(e)};l(),n.css("opacity",0).bind({"focus.uniform":function(){a.addClass(t.focusClass)},"blur.uniform":function(){a.removeClass(t.focusClass)},"mousedown.uniform":function(){e(i).is(":disabled")||a.addClass(t.activeClass)},"mouseup.uniform":function(){a.removeClass(t.activeClass)},"mouseenter.uniform":function(){a.addClass(t.hoverClass)},"mouseleave.uniform":function(){a.removeClass(t.hoverClass),a.removeClass(t.activeClass)}}),e.browser.msie?n.bind("click.uniform.ie7",function(){setTimeout(l,0)}):n.bind("change.uniform",l),n.attr("disabled")&&a.addClass(t.disabledClass),e.uniform.noSelect(s),e.uniform.noSelect(r),c(i)}function c(t){t=e(t).get(),t.length>1?e.each(t,function(t,i){e.uniform.elements.push(i)}):e.uniform.elements.push(t)}t=e.extend(e.uniform.options,t);var u=this;return 0!=t.resetSelector&&e(t.resetSelector).mouseup(function(){function t(){e.uniform.update(u)}setTimeout(t,10)}),e.uniform.restore=function(t){void 0==t&&(t=e(e.uniform.elements)),e(t).each(function(){e(this).is(":checkbox")?e(this).unwrap().unwrap():e(this).is("select")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is(":radio")?e(this).unwrap().unwrap():e(this).is(":file")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is("button, :submit, :reset, a, input[type='button']")&&e(this).unwrap().unwrap(),e(this).unbind(".uniform"),e(this).css("opacity","1");var i=e.inArray(e(t),e.uniform.elements);e.uniform.elements.splice(i,1)})},e.uniform.noSelect=function(t){function i(){return!1}e(t).each(function(){this.onselectstart=this.ondragstart=i,e(this).mousedown(i).css({MozUserSelect:"none"})})},e.uniform.update=function(i){void 0==i&&(i=e(e.uniform.elements)),i=e(i),i.each(function(){var n=e(this);if(n.is("select")){var a=n.siblings("span"),s=n.parent("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),a.html(n.find(":selected").html()),n.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(n.is(":checkbox")){var a=n.closest("span"),s=n.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),a.removeClass(t.checkedClass),n.is(":checked")&&a.addClass(t.checkedClass),n.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(n.is(":radio")){var a=n.closest("span"),s=n.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),a.removeClass(t.checkedClass),n.is(":checked")&&a.addClass(t.checkedClass),n.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(n.is(":file")){var s=n.parent("div"),r=n.siblings(t.filenameClass);btnTag=n.siblings(t.fileBtnClass),s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),r.text(n.val()),n.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||i.is("input[type=button]")){var s=n.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),n.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}})},this.each(function(){if(e.support.selectOpacity){var t=e(this);t.is("select")?1!=t.attr("multiple")&&(void 0==t.attr("size")||t.attr("size")<=1)&&s(t):t.is(":checkbox")?r(t):t.is(":radio")?o(t):t.is(":file")?l(t):t.is(":text, :password, input[type='email']")?i(t):t.is("textarea")?n(t):(t.is("a")||t.is(":submit")||t.is(":reset")||t.is("button")||t.is("input[type=button]"))&&a(t)}})}}(jQuery);