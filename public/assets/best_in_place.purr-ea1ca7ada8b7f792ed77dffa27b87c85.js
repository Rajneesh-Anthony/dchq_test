/**
 * jquery.purr.js
 * Copyright (c) 2008 Net Perspective (net-perspective.com)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * @author R.A. Ray
 * @projectDescription  jQuery plugin for dynamically displaying unobtrusive messages in the browser. Mimics the behavior of the MacOS program "Growl."
 * @version 0.1.0
 *
 * @requires jquery.js (tested with 1.2.6)
 *
 * @param fadeInSpeed           int - Duration of fade in animation in miliseconds
 *                          default: 500
 *  @param fadeOutSpeed         int - Duration of fade out animationin miliseconds
                            default: 500
 *  @param removeTimer          int - Timeout, in miliseconds, before notice is removed once it is the top non-sticky notice in the list
                            default: 4000
 *  @param isSticky             bool - Whether the notice should fade out on its own or wait to be manually closed
                            default: false
 *  @param usingTransparentPNG  bool - Whether or not the notice is using transparent .png images in its styling
                            default: false
 */
!function(e){e.purr=function(t,i){function n(){var n=document.createElement("a");if(e(n).attr({className:"close",href:"#close"}).appendTo(t).click(function(){return a(),!1}),e(document).keyup(function(e){27===e.keyCode&&a()}),t.appendTo(s).hide(),t.fadeIn(i.fadeInSpeed),!i.isSticky)var r=setInterval(function(){0===t.prevAll(".purr").length&&(clearInterval(r),setTimeout(function(){a()},i.removeTimer))},200)}function a(){t.animate({opacity:"0"},{duration:i.fadeOutSpeed,complete:function(){t.animate({height:"0px"},{duration:i.fadeOutSpeed,complete:function(){t.remove()}})}})}t=e(t),t.addClass("purr");var s=document.getElementById("purr-container");s||(s='<div id="purr-container"></div>'),s=e(s),e("body").append(s),n()},e.fn.purr=function(t){return t=t||{},t.fadeInSpeed=t.fadeInSpeed||500,t.fadeOutSpeed=t.fadeOutSpeed||500,t.removeTimer=t.removeTimer||4e3,t.isSticky=t.isSticky||!1,t.usingTransparentPNG=t.usingTransparentPNG||!1,this.each(function(){new e.purr(this,t)}),this}}(jQuery),jQuery(document).on("best_in_place:error",function(e,t){jQuery.each(jQuery.parseJSON(t.responseText),function(e,t){"object"==typeof t&&(t=e+" "+t.toString());var i=jQuery("<span class='flash-error'></span>").html(t);i.purr()})});