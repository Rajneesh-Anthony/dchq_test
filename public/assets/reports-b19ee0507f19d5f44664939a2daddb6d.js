(function(){this.module("Dchq",function(){return this.module("Reports",function(){return this.init=function(){return $("a.print").click(function(e){return e.preventDefault(),$(".innerLR").printElement()})}})}),$(function(){return Dchq.Reports.init()})}).call(this);