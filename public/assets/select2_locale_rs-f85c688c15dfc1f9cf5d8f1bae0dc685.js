!function(e){"use strict";e.fn.select2.locales.rs={formatNoMatches:function(){return"Ni\u0161ta nije prona\u0111eno"},formatInputTooShort:function(e,t){var i=t-e.length;return"Ukucajte bar jo\u0161 "+i+" simbol"+(i%10==1&&i%100!=11?"":"a")},formatInputTooLong:function(e,t){var i=e.length-t;return"Obri\u0161ite "+i+" simbol"+(i%10==1&&i%100!=11?"":"a")},formatSelectionTooBig:function(e){return"Mo\u017eete izabrati samo "+e+" stavk"+(e%10==1&&e%100!=11?"u":e%10>=2&&4>=e%10&&(12>e%100||e%100>14)?"e":"i")},formatLoadMore:function(){return"Preuzimanje jo\u0161 rezultata\u2026"},formatSearching:function(){return"Pretraga\u2026"}},e.extend(e.fn.select2.defaults,e.fn.select2.locales.rs)}(jQuery);