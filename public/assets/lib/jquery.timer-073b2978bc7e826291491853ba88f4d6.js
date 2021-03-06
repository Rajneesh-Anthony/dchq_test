/**
 * jquery.timer.js
 *
 * Copyright (c) 2011 Jason Chavannes <jason.chavannes@gmail.com>
 *
 * http://jchavannes.com/jquery-timer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!function($){$.timer=function(func,time,autostart){return this.set=function(func,time,autostart){if(this.init=!0,"object"==typeof func){var paramList=["autostart","time"];for(var arg in paramList)void 0!=func[paramList[arg]]&&eval(paramList[arg]+" = func[paramList[arg]]");func=func.action}return"function"==typeof func&&(this.action=func),isNaN(time)||(this.intervalTime=time),autostart&&!this.isActive&&(this.isActive=!0,this.setTimer()),this},this.once=function(e){var t=this;return isNaN(e)&&(e=0),window.setTimeout(function(){t.action()},e),this},this.play=function(e){return this.isActive||(e?this.setTimer():this.setTimer(this.remaining),this.isActive=!0),this},this.pause=function(){return this.isActive&&(this.isActive=!1,this.remaining-=new Date-this.last,this.clearTimer()),this},this.stop=function(){return this.isActive=!1,this.remaining=this.intervalTime,this.clearTimer(),this},this.toggle=function(e){return this.isActive?this.pause():e?this.play(!0):this.play(),this},this.reset=function(){return this.isActive=!1,this.play(!0),this},this.clearTimer=function(){window.clearTimeout(this.timeoutObject)},this.setTimer=function(e){var t=this;"function"==typeof this.action&&(isNaN(e)&&(e=this.intervalTime),this.remaining=e,this.last=new Date,this.clearTimer(),this.timeoutObject=window.setTimeout(function(){t.go()},e))},this.go=function(){this.isActive&&(this.action(),this.setTimer())},this.init?new $.timer(func,time,autostart):(this.set(func,time,autostart),this)}}(jQuery);