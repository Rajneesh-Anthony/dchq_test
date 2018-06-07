function themerUpdateColors(e){updatePrimaryColor(e,!0,!0)}function rgb2hex(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];return $.each(t,function(e,i){1===i.length&&(t[e]="0"+i)}),"#"+t.join("")}function rgbString2obj(e){var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),i={r:Number(t[1]),g:Number(t[2]),b:Number(t[3])};return i}function updatePrimaryColor(e,t,i){themerPrimaryColor=e,$("#themer-primary-cp").val(themerPrimaryColor),$.minicolors.refresh(),t===!0&&attachStylesheet(),i===!0&&updateCharts(),themerCustom[themerSelectedTheme].primaryColor=themerPrimaryColor!=themerThemes[themerSelectedTheme].primaryColor?themerPrimaryColor:null,$.cookie("themerCustom",JSON.stringify(themerCustom)),toggleGetCode()}function toggleGetCode(){var e=themerCustom[themerSelectedTheme];0!=themerSelectedTheme||0==themerSelectedTheme&&null!=e.primaryColor?$("#themer-getcode").is(":hidden")&&$("#themer-getcode").show():$("#themer-getcode").is(":visible")&&$("#themer-getcode").hide()}function themerAdvancedToggle(){var e=[$("#themer-primary-cp"),$("#themer-header-cp"),$("#themer-menu-cp")];$("#themer-advanced-toggle").is(":checked")?($("#themer").addClass("themer-advanced"),$.each(e,function(e,t){t.attr("data-textfield",!0).removeClass("minicolors-hidden")})):($("#themer").removeClass("themer-advanced"),$.each(e,function(e,t){t.attr("data-textfield",!1).addClass("minicolors-hidden")}))}function generateCSS(e){e||(e="");var t="@primaryColor: "+themerPrimaryColor+";\n"+primaryBgColorTargets.join(", \n")+"\n{\n  background-color: @primaryColor;\n}\n\n"+primaryTextColorTargets.join(", \n")+"\n{\n  color: @primaryColor;\n}\n\n"+primaryBorderColorTargets.join(", \n")+"\n{\n  border-color: @primaryColor;\n}\n\n";return t+=".table-primary tbody td\n{\n  background-color: lighten(@primaryColor, 50%);\n}\n\n.table-primary tbody tr.selected td, .table-primary tbody tr.selectable:hover td\n{\n  background-color: lighten(@primaryColor, 40%);\n}\n\n.table-primary.table-bordered tbody td, .table-primary, .pagination ul > .disabled > a, .pagination ul > .disabled > span\n{\n  border-color: lighten(@primaryColor, 50%);\n}\n\n.navbar.main .btn-navbar, .navbar.main .topnav > li > a\n{\n  background-color: lighten(@primaryColor, 10%);\n  box-shadow: 0 1px 0 darken(@primaryColor, 10%);\n  -webkit-box-shadow: 0 1px 0 darken(@primaryColor, 10%);\n  -moz-box-shadow: 0 1px 0 darken(@primaryColor, 10%);\n}\n\n.navbar.main .btn-navbar:hover, .navbar.main .topnav > li > a:hover\n{\n  background-color: lighten(@primaryColor, 20%);\n}\n\n.bwizard-steps li.active:after, .sliderContainer .ui-rangeSlider-rightArrow .ui-rangeSlider-arrow-inner\n{\n  border-left-color: @primaryColor;\n}\n\n.sliderContainer .ui-rangeSlider-leftArrow .ui-rangeSlider-arrow-inner\n{\n  border-right-color: @primaryColor;\n}\n\n#tlyPageGuideWrapper #tlyPageGuide li.tlypageguide-active.tlypageguide_right:after, #tlyPageGuideWrapper #tlyPageGuide li.tlypageguide-active.tlypageguide_left:after, #tlyPageGuideWrapper #tlyPageGuide li.tlypageguide-active.tlypageguide_top:after\n{\n  border-top-color: @primaryColor;\n}\n\n#tlyPageGuideWrapper #tlyPageGuide li.tlypageguide-active.tlypageguide_bottom:after\n{\n  border-bottom-color: @primaryColor;\n}\n\n.btn-primary:active, .btn-primary.active\n{\n  background-color: darken(@primaryColor, 20%);\n}\n\n.btn-primary:hover, .btn-primary:focus\n{\n  background-color: darken(@primaryColor, 5%);\n}\n\n.tlypageguide_shadow:after\n{\n  background-color: fade(@primaryColor, 20%);\n}\n\n.widget .widget-body.list.list-2 ul li\n{\n  &.active { border-color: lighten(@primaryColor, 20%); }\n  a { color: lighten(@primaryColor, 20%); i:before { background: lighten(@primaryColor, 50%); color: lighten(@primaryColor, 10%); border-color: lighten(@primaryColor, 20%); } }\n}"}function attachStylesheet(e,t){if(0==themerSelectedTheme&&($("#themer-stylesheet").empty(),less.refreshStyles(),t===!0))return!1;$("#themer-stylesheet").length||$("head").append('<style id="themer-stylesheet"></style>');var i=generateCSS(e);latestCode.less=i,$("#themer-stylesheet").attr("type","text/x-less").text(i),less.refreshStyles()}function updateCharts(){return"undefined"!=typeof primaryColor&&(primaryColor=themerPrimaryColor),"undefined"==typeof charts?!1:(charts.utility.chartColors.shift(),charts.utility.chartColors.unshift(themerPrimaryColor),"undefined"!=typeof charts.website_traffic_graph&&null!=charts.website_traffic_graph.plot&&charts.website_traffic_graph.init(),"undefined"!=typeof charts.website_traffic_overview&&null!=charts.website_traffic_overview.plot&&charts.website_traffic_overview.init(),"undefined"!=typeof charts.traffic_sources_pie&&null!=charts.traffic_sources_pie.plot&&charts.traffic_sources_pie.init(),"undefined"!=typeof charts.chart_simple&&null!=charts.chart_simple.plot&&charts.chart_simple.init(),"undefined"!=typeof charts.chart_lines_fill_nopoints&&null!=charts.chart_lines_fill_nopoints.plot&&charts.chart_lines_fill_nopoints.init(),"undefined"!=typeof charts.chart_ordered_bars&&null!=charts.chart_ordered_bars.plot&&charts.chart_ordered_bars.init(),"undefined"!=typeof charts.chart_donut&&null!=charts.chart_donut.plot&&charts.chart_donut.init(),"undefined"!=typeof charts.chart_stacked_bars&&null!=charts.chart_stacked_bars.plot&&charts.chart_stacked_bars.init(),"undefined"!=typeof charts.chart_pie&&null!=charts.chart_pie.plot&&charts.chart_pie.init(),"undefined"!=typeof charts.chart_horizontal_bars&&null!=charts.chart_horizontal_bars.plot&&charts.chart_horizontal_bars.init(),void("undefined"!=typeof charts.chart_live&&null!=charts.chart_live.plot&&charts.chart_live.init()))}function updateTheme(e){$("#themer-theme").val()!=e&&$("#themer-theme").val(e),themerSelectedTheme=e,$.cookie("themerSelectedTheme",themerSelectedTheme);var t=null!=themerCustom[e].primaryColor?themerCustom[e].primaryColor:themerThemes[e].primaryColor;updatePrimaryColor(t,!1,!0),0==e&&null==themerCustom[e].primaryColor?attachStylesheet("",!0):attachStylesheet()}function themerGetCode(e){var t;t=e===!0?latestCode.less:latestCode.css(),bootbox.alert($('<pre class="prettyprint lang-html" id="themer-pretty"></pre>').html(t))}var themerAdvanced=null!=$.cookie("themerAdvanced")?1==$.cookie("themerAdvanced"):!1,primaryBgColorTargets=[".btn-primary",".navbar.main","#flotTip",".btn-group.open .btn-primary.dropdown-toggle, .btn-primary.disabled, .btn-primary[disabled], .btn-primary:hover",".label-primary",".table-primary thead th",".pagination ul > .active > a, .pagination ul > .active > span",".gallery ul li .thumb",".widget-activity ul.filters li.glyphicons.active i",".ui-slider-wrap .slider-primary .ui-slider-range",".accordion-heading .accordion-toggle",".ui-widget-header",".ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active",".fc-event-skin","#external-events li",".notyfy_wrapper.notyfy_primary",".progress.progress-primary .bar",".alert.alert-primary",".pagination ul > li > a:hover, .pagination ul > li.primary > a",".gritter-item-wrapper.gritter-primary .gritter-item","#content-notification .notyfy_wrapper.notyfy_primary",".ribbon-wrapper .ribbon.primary",".label.label-primary",".widget-stats.primary, .widget-stats.primary:hover",".tabsbar:not(.tabsbar-2) ul li.active a",".widget.widget-wizard-pills .widget-head ul li.primary a",".bwizard-steps li.active",".sliderContainer .ui-rangeSlider-bar","#tlyPageGuideWrapper #tlyPageGuide li.tlypageguide-active","#tlyPageGuideWrapper #tlyPageGuideMessages .tlypageguide_close","#tlyPageGuideWrapper #tlyPageGuideMessages span",".tabsbar.tabsbar-2.active-fill ul li.active a",".shop-client-products.list ul li a .glyphicons i",".social-large a.active, .social-large a:hover","#landing_1 .banner-1 .carousel-indicators li.active"],primaryTextColorTargets=["a, p a",".widget .widget-body.list ul li .count",".widget-stats .txt strong",".glyphicons.single i:before",".glyphicons.single",".table-primary tbody td.important",".widget.widget-3 .widget-body.large.cancellations span span:first-child",".widget .widget-footer a:hover, .widget .widget-footer a:hover i:before",".widget.widget-3 .widget-footer a:hover, .widget.widget-3 .widget-footer a:hover i:before","blockquote small","#menu .profile span a","#footer .copy a",".tabsbar.tabsbar-2 ul li.active a",".tabsbar.tabsbar-2 ul li.active a i:before",".glyphicons.primary i:before, .glyphicons.standard:not(.disabled):hover i:before",".menubar.links.primary ul li a",".text-primary","#docs_icons .glyphicons i:before",".widget.widget-tabs-double-2 .widget-head ul li.active a i:before, .widget.widget-tabs-double-2 .widget-head ul li.active a",".shop-client-products.product-details .form-horizontal .price","#landing_1 .banner .banner-wrapper.banner-1 p a","#landing_1 .banner .banner-wrapper.banner-1 h3","#landing_2 .banner .banner-wrapper.banner-1 p a, #landing_2 .banner .banner-wrapper.banner-1 .buy a","#landing_2 .banner .banner-wrapper.banner-1 h3","#landing_1 .banner-1 .carousel-caption a","div.glyphicons.glyphicon-primary i:before"],primaryBorderColorTargets=[".btn-primary",".ui-slider-wrap .slider-primary .ui-slider-handle","#flotTip",".widget.widget-2.primary .widget-head",".widget .widget-body.list.list-2 ul li.active a i:before",".table-primary thead th",".pagination ul > .active > a, .pagination ul > .active > span",".widget.widget-4 .widget-head .heading",".ui-widget-header",".fc-event-skin",".alert.alert-primary",".pagination ul > li > a:hover, .pagination ul > li.primary > a",".widget-stats.primary"],themerSelectedTheme=null!=$.cookie("themerSelectedTheme")?$.cookie("themerSelectedTheme"):0,latestCode={css:function(){return $("#themer-stylesheet").text()},less:null},themerThemes=[{name:"Default",primaryColor:"#e04545",visible:!0},{name:"Orange",primaryColor:"#e25f39",visible:!0},{name:"Brown",primaryColor:"#ba5d32",visible:!0},{name:"Purple-Gray",primaryColor:"#86618f",visible:!0},{name:"Purple-Wine",primaryColor:"#b94b6f",visible:!0},{name:"Blue-Gray",primaryColor:"#496cad",visible:!0},{name:"Green Army",primaryColor:"#6f8745",visible:!0},{name:"Black & White",primaryColor:"#575757",visible:!0},{name:"Army",primaryColor:"#7a7a3a",visible:!1},{name:"Evil Army",primaryColor:"#567a3a",visible:!1},{name:"Forest",primaryColor:"#947131",visible:!1},{name:"Cold Blue",primaryColor:"#676d8a",visible:!1},{name:"Warm Blue",primaryColor:"#cc5470",visible:!1},{name:"Experiment #2",primaryColor:"#438080",visible:!1}],themerCustomDefault=[];$.each(themerThemes,function(e){themerCustomDefault[e]={primaryColor:null}});var themerCustom=null!=$.cookie("themerCustom")?$.parseJSON($.cookie("themerCustom")):themerCustomDefault;themerThemes.length!=themerCustom.length&&($.each(themerThemes,function(e,t){"undefined"==typeof themerCustom[e]&&(themerCustom[e]=t)}),$.cookie("themerCustom",JSON.stringify(themerCustom))),$(function(){if($("#themer").length){var e=$.cookie("themerOpened")?$.cookie("themerOpened"):0;$("#themer").on("shown",function(){$.cookie("themerOpened",1),$(this).css("overflow","visible")}).on("hidden",function(){$.cookie("themerOpened",0)}).on("hide",function(){$(this).css("overflow","hidden")}),$("#themer .close2").on("click",function(){$(this).parent().parent().collapse("hide")}),1==e&&$("#themer").collapse("show"),$("#themer-primary-cp").attr("data-default",themerPrimaryColor).on("change",function(){var e=$(this),t=e.val();t&&updatePrimaryColor(t,!0,!0)});var t=$("#themer-theme");$.each(themerThemes,function(e,i){if(i.visible===!0){var n=$("<option></option>").text(i.name).val(e);t.append(n)}}),t.on("change",function(e){e.preventDefault(),updateTheme(t.val())}),$("#themer-getcode-less").click(function(e){e.preventDefault(),themerGetCode(!0)}),$("#themer-getcode-css").click(function(e){e.preventDefault(),themerGetCode()}),$("#themer-custom-reset").click(function(){themerCustom[themerSelectedTheme].primaryColor=null,$.cookie("themerCustom",JSON.stringify(themerCustom)),updateTheme(themerSelectedTheme)}),$("#themer-advanced-toggle").on("change",function(){$.cookie("themerAdvanced",$(this).is(":checked")?"1":"0"),themerAdvancedToggle()}),themerAdvanced&&$("#themer-advanced-toggle").prop("checked",!0).trigger("change"),updateTheme(themerSelectedTheme)}});