!function(e){"use strict";function t(e,t){return e+" "+t+(5>e%10&&e%10>0&&(5>e%100||e%100>19)?e%10>1?"\u0438":"":"\u0456\u0432")}e.fn.select2.locales.uk={formatMatches:function(e){return t(e,"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")+" \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043b\u043a\u0430\u043c\u0438 \u0432\u0432\u0435\u0440\u0445 \u0442\u0430 \u0432\u043d\u0438\u0437 \u0434\u043b\u044f \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457."},formatNoMatches:function(){return"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"},formatInputTooShort:function(e,i){return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u0449\u0435 "+t(i-e.length,"\u0441\u0438\u043c\u0432\u043e\u043b")},formatInputTooLong:function(e,i){return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u043d\u0430 "+t(e.length-i,"\u0441\u0438\u043c\u0432\u043e\u043b")+" \u043c\u0435\u043d\u0448\u0435"},formatSelectionTooBig:function(e){return"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 "+t(e,"\u0435\u043b\u0435\u043c\u0435\u043d\u0442")},formatLoadMore:function(){return"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445\u2026"},formatSearching:function(){return"\u041f\u043e\u0448\u0443\u043a\u2026"}},e.extend(e.fn.select2.defaults,e.fn.select2.locales.uk)}(jQuery);