(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MgzW:function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("KKXr"),r("8+KV"),r("bWfx"),r("91GP"),r("ioFf");var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var r,s,c=o(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))i.call(r,u)&&(c[u]=r[u]);if(n){s=n(r);for(var f=0;f<s.length;f++)a.call(r,s[f])&&(c[s[f]]=r[s[f]])}}return c}},Ofmp:function(e,t,r){"use strict";r.r(t);r("rGqo"),r("yt8O"),r("Btvt");var n=r("FdF9"),i=r("JfNc"),a=r("wcVo"),o=(r("KKXr"),r("Wbzz")),s=function(e){var t=e.data;return n.default.createElement("div",{className:"work__nav"},n.default.createElement("div",{className:"work__nav-disciplines"},n.default.createElement(o.Link,{className:"work__nav-disciplines-link",to:"/work",activeClassName:"-active"},n.default.createElement("h3",{className:"work__nav-disciplines-text fontSize-p2"},"All")),t.disciplines.map((function(e,t){var r=e.split(" ").join("%20");return r.toLowerCase(),n.default.createElement(o.Link,{className:"work__nav-disciplines-link",key:e,to:"/work/"+r,activeClassName:"-active"},n.default.createElement("h3",{className:"work__nav-disciplines-text fontSize-p2"},e))}))))},c=(r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("ioFf"),r("V+eJ"),r("VRzm"),r("iVi/"));r("pIFo"),r("8+KV");function l(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(n){}return e}var u=r("MgzW");function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=new(function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?c.parse(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=c.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),l(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var n in this.cookies)r[n]=l(this.cookies[n],e);return r},e.prototype.set=function(e,t,r){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=u({},this.cookies,((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=c.serialize(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=u({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=u({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=c.serialize(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()),m=function(e){var t=d.get("dwTiles");if(void 0===t){var r,n,i=e.length;for(e.forEach((function(e,t){e.index=t}));0!==i;)n=Math.floor(Math.random()*i),r=e[i-=1],e[i]=e[n],e[n]=r;var a=e.map((function(e){return e.index})),o=new Date;o.setDate(o.getDate()+1),d.set("dwTiles",JSON.stringify(a),{expires:o})}else e=t.map((function(t){return e[t]}));return e};r("Z2Ku"),r("L9s1"),r("T39b");function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"query",(function(){return v}));t.default=function(e){var t=e.data,r=e.pageContext,o=t.craft.entries,c=r.discipline,l=function(e){var t=[],r=[],n={},i=e,a=Array.isArray(i),o=0;for(i=a?i:i[Symbol.iterator]();;){var s;if(a){if(o>=i.length)break;s=i[o++]}else{if((o=i.next()).done)break;s=o.value}var c=s,l=c.disciplines,u=c.categories,f=l,d=Array.isArray(f),m=0;for(f=d?f:f[Symbol.iterator]();;){var v;if(d){if(m>=f.length)break;v=f[m++]}else{if((m=f.next()).done)break;v=m.value}var h=v.title.toLowerCase();t.push(h)}var y=u,g=Array.isArray(y),w=0;for(y=g?y:y[Symbol.iterator]();;){var b;if(g){if(w>=y.length)break;b=y[w++]}else{if((w=y.next()).done)break;b=w.value}var k=b.title.toLowerCase();r.push(k)}}var E=p(new Set(t));return n.disciplines=["brand & identity","film & photography","spatial","digital"].filter((function(e){return E.includes(e)})),n}(o),u=function(e,t){var r=m(f(e));return void 0!==t&&(r=r.filter((function(e){return e.disciplines.some((function(e){return e.title===t}))}))),r}(o,c),d=t.craft.seomatic;return n.default.createElement(i.a,{className:"work",seo:d},l&&n.default.createElement(s,{data:l}),u&&n.default.createElement(a.a,{data:u}))};var v="520506561"},WpLv:function(e,t,r){"use strict";var n,i,a,o=r("FdF9"),s=r("pc+1"),c="undefined"!=typeof documnet;t.a=o.default.memo((function(e){var t=e.children,r=e.clickable,s=void 0===r||r,p=o.default.createRef();return(c&&void 0===n||void 0===i)&&(n=document.querySelector(".cursorOverlay"),i=n.querySelector(".cursorOverlay-cursor"),a=n.getBoundingClientRect()),Object(o.useEffect)((function(){p.current.addEventListener("mouseenter",l),p.current.addEventListener("mouseleave",u),p.current.addEventListener("mousemove",f),p.current.addEventListener("dragstart",m),s&&p.current.addEventListener("click",d);var e=p.current;return function(){e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",u),e.removeEventListener("mousemove",f),e.removeEventListener("dragstart",m),s&&e.removeEventListener("click",d)}}),[p,s]),o.default.createElement("div",{ref:p,className:"hover-cursor"},t)}),(function(e,t){return e.childState===t.childState}));var l=function(){n.classList.remove("-hidden"),i.style.transform="scale(0.4)"},u=function(){null!==n&&(n.classList.add("-hidden"),i.style.transform="scale(0)")},f=function(e){if(null!==n){var t=e.clientX-a.width/2,r=e.clientY-a.height/2;n.style.transform="translate("+t+"px, "+r+"px)"}},d=function(){var e=s.k.easeOut;(new s.u).set(i,{scale:.1,opacity:0,transition:"none"}).set(n,{transition:"none"}).to(i,.12,{scale:1,opacity:.5,ease:e}).to(i,.4*.2,{scale:1,opacity:.7,ease:e}).to(i,.4*.2,{scale:.1,opacity:0,ease:e}).add((function(){i.removeAttribute("style"),n.removeAttribute("style"),n.classList.add("-hidden")}))},m=function(){return!1}},"iVi/":function(e,t,r){"use strict";r("Tze0"),r("V+eJ"),r("KKXr"),t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},o=e.split(a),c=i.decode||n,l=0;l<o.length;l++){var u=o[l],f=u.indexOf("=");if(!(f<0)){var d=u.substr(0,f).trim(),m=u.substr(++f,u.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),null==r[d]&&(r[d]=s(m,c))}}return r},t.serialize=function(e,t,r){var n=r||{},a=n.encode||i;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!o.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=n.maxAge){var l=n.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(l)}if(n.domain){if(!o.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,i=encodeURIComponent,a=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},wcVo:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r("91GP"),r("rE2o"),r("ioFf"),r("rGqo");var n=r("FdF9"),i=r("plVc"),a=r.n(i),o=r("9eSz"),s=r.n(o),c=r("76ZC"),l=r.n(c),u=r("WpLv");var f=function(e){var t,r;function i(t){var r;(r=e.call(this)||this).data=void 0,r.tileImgs=[],r.loadTiles=[],r.fadeTiming=.7,r.newLoads=8,r.state={tileLimit:32},r.data=t.data,r.data=r.data.filter((function(e){return void 0!==e}));var n=r.data,i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var o;if(i){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var s=o.previewTile,c=s[0].imageFile,l=null!==c?c.childImageSharp:null,u={};null!==l?u.fluid=Object.assign({},l.fluid):(console.log(s[0].url),u.fluid={src:s[0].url});var f=c&&null!==c.colors?c.colors.muted:"#efefef";u.backgroundColor=f,r.tileImgs.push(u)}return r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=i.prototype;return o.componentDidMount=function(){this.mainEl=document.querySelector("main"),this.loadMore()},o.loadMore=function(e){var t=this;e&&e.preventDefault(),this.data.forEach((function(e,r){r<t.state.tileLimit&&(t.loadTiles[r]=e)})),this.setState({tileLimit:this.state.tileLimit+this.newLoads})},o.tilesFadeOut=function(e){var t=document.querySelector('.work-tile[href*="'+e+'"]');t.style.transition="opacity "+this.fadeTiming/2+"s",t.style.transitionDelay=this.fadeTiming/2+"s",this.mainEl.classList.add("-pageFade")},o.render=function(){var e=this;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"work-tile__container"},this.loadTiles.slice(0,this.state.tileLimit).map((function(t,r){var i="/work/articles/"+t.slug;return n.default.createElement(a.a,{exit:{length:e.fadeTiming,trigger:function(){return e.tilesFadeOut(i)}},entry:{delay:1.5*e.fadeTiming,length:e.fadeTiming},className:"work-tile",key:"home tile "+r,to:i},n.default.createElement(u.a,null,n.default.createElement(s.a,Object.assign({className:"work-tile__image aspect__2-by-1"},e.tileImgs[r])),n.default.createElement("p",{className:"work-tile__client fontSize-p3 fontSize-uppercase"},t.title),n.default.createElement("span",{className:"work-tile__title fontSize-p2"},l()(t.description.content))))}))),this.data.length>this.loadTiles.length?n.default.createElement("div",{className:"work-tile__load-more"},n.default.createElement("p",{onClick:function(t){e.loadMore(t)},className:"work-tile__load-more-button fontSize-p2"},"Load more work")):n.default.createElement("div",{className:"work-tile__load-more"}))},i}(n.default.PureComponent)}}]);
//# sourceMappingURL=component---src-pages-work-js-27d00342d97f86459532.js.map