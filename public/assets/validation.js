(function(){this.module("Dchq",function(){return this.module("Validation",function(){var e;return e=function(e){return void 0===e.jquery?$(e):e},this.formValid=function(t){var i,n,a,s,o;return t=e(t),i=t.attr("id"),a=ClientSideValidations.forms[i].input_tag,ClientSideValidations.forms[i].input_tag='<span class="noop"><span id="input_tag" /></span>',s=ClientSideValidations.forms[i].label_tag,ClientSideValidations.forms[i].label_tag='<span class="noop"><label id="label_tag" /></span>',n=ClientSideValidations.forms[i].validators,o=t.isValid(n),ClientSideValidations.forms[i].input_tag=a,ClientSideValidations.forms[i].label_tag=s,o},this.highlightFirstError=function(t){return t=e(t),t.find(":invalid").first().focus()}})})}).call(this);