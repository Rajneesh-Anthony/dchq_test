(function(){this.module("Dchq",function(){return this.module("SettingsPrint",function(){var e;return this.init=function(){return $("#store_printer_type").change(function(){var t;return t=$("#store_tsp_url").closest(".row-fluid"),"tsp"===$(this).val()?t.show():e(t)})},e=function(e){return e.hide().find("input").val("")}})}),$(function(){return $("body#settings-print").length?Dchq.SettingsPrint.init():void 0})}).call(this);