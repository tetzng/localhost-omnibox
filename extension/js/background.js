(()=>{"use strict";({136:function(){var t=this&&this.__awaiter||function(t,n,o,e){return new(o||(o=Promise))((function(c,i){function r(t){try{s(e.next(t))}catch(t){i(t)}}function a(t){try{s(e.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?c(t.value):(n=t.value,n instanceof o?n:new o((function(t){t(n)}))).then(r,a)}s((e=e.apply(t,n||[])).next())}))};const n=["3000","3001","8080","8081"];chrome.omnibox.setDefaultSuggestion({description:"open localhost:3000"}),chrome.omnibox.onInputEntered.addListener(((n,o)=>t(void 0,void 0,void 0,(function*(){let t="";t="http://localhost:"+(n||"3000"),((t,n)=>{"currentTab"===n?chrome.tabs.update({url:t}):chrome.tabs.create({url:t,active:!0,openerTabId:chrome.tabs.TAB_ID_NONE})})(t,o)})))),chrome.omnibox.onInputChanged.addListener(((t,o)=>{console.log("onInputChanged"),chrome.omnibox.setDefaultSuggestion({description:`open localhost:${t||3e3}`});const e=t;o(n.filter((t=>t.startsWith(e))).map((t=>({content:t,description:t}))))}))}})[136]()})();