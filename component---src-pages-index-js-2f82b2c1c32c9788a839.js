(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2e6m":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("91GP");var o=n("q1tI"),i=n.n(o),r=n("9eSz"),a=n.n(r);var c=function(e){var t,n;function o(t){var n;return(n=e.call(this)||this).data=void 0,n.tileImgs=[],n.loadTiles=[],n.state={limit:32},n.data=t.render.data,n.data=n.data.filter((function(e){return void 0!==e})),n.data.forEach((function(e){var t=e.previewTile[0].imageFile.childImageSharp,o={};null!==t?o.fluid=Object.assign({},t.fluid):(console.log(e.previewTile[0].url),o.fluid={src:e.previewTile[0].url});var i=e.previewTile[0].optimizedimages.colorPalette[0];o.backgroundColor=i||"#efefef",n.tileImgs.push(o)})),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){this.loadMore()},r.loadMore=function(e){var t=this;e&&e.preventDefault(),this.data.forEach((function(e,n){n<t.state.limit&&(t.loadTiles[n]=e)})),this.setState({limit:this.state.limit+8})},r.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"work-tile__container"},this.loadTiles.slice(0,this.state.limit).map((function(t,n){return i.a.createElement("div",{className:"work-tile",key:"home tile "+n},i.a.createElement(a.a,Object.assign({className:"work-tile__image aspect__2-by-1 hover-cursor"},e.tileImgs[n])),i.a.createElement("p",{className:"work-tile__client fontSize-p3 fontSize-uppercase"}," ",t.title," "),i.a.createElement("p",{className:"work-tile__title fontSize-p2",dangerouslySetInnerHTML:{__html:null!==t.description?t.description.content:null}}))}))),this.data.length>this.loadTiles.length?i.a.createElement("div",{className:"work-tile__load-more"},i.a.createElement("a",{href:"",onClick:function(t){e.loadMore(t)},className:"work-tile__load-more-button fontSize-p2"},"Load more work")):i.a.createElement("div",{className:"work-tile__load-more"}))},o}(o.Component)},"8oxB":function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var s,l=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=c(f);u=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},RXBc:function(e,t,n){"use strict";n.r(t);n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt");var o=n("q1tI"),i=n.n(o),r=n("Wbzz"),a=n("Bl7J"),c=n("vrFN"),s=(n("91GP"),n("hMnm"));n("r2JF");var l,u="undefined"!=typeof window;u&&window.addEventListener("resize",(function(){l={w:u?window.innerWidth:0,h:u?window.innerHeight:0}}));var d=function(e){var t,n;function o(t){var n;return(n=e.call(this)||this).state={loading:!0,muted:!0},n.player={el:i.a.createRef(),class:t.elClass,options:Object.assign({},t.vimeoOptions,{},{muted:!0}),clickPaused:!1,scrollPaused:!1,scrollPlay:!1,muteBtn:i.a.createRef(),soundIconColor:t.soundIcon},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){this.init()},r.componentWillUnmount=function(){u&&(window.removeEventListener("scroll",this.player.scrollEvent),window.removeEventListener("resize",this.player.resizeEvent)),this.player.video.destroy()},r.init=function(){var e=this;this.player.video=new s.a(this.player.el.current,this.player.options),void 0===l&&(l={w:u?window.innerWidth:0,h:u?window.innerHeight:0}),this.player.resizeEvent=this.onResize.bind(this),u&&window.addEventListener("resize",this.player.resizeEvent),this.player.video.on("play",(function(){e.player.scrollPlay||(1!==e.player.options.background&&l.w<=1024&&(e.player.video.setVolume(1),e.setState({muted:!1})),e.player.clickPaused=!1,e.player.scrollPause=!1)})),this.player.video.on("pause",(function(){e.checkIfVideoInView()&&(e.player.clickPaused=!0,e.player.scrollPlay=!1)})),this.player.video.ready().then((function(){e.player.video.setAutopause(!1),e.setState({loading:!1}),e.scrollPlayPauseVideo()}))},r.onResize=function(){this.player.el.current&&this.setVideoPositionDetails()},r.onScroll=function(){var e=this;l.w>1024&&window.requestAnimationFrame((function(){e.screenTop=window.pageYOffset,e.screenBottom=e.screenTop+l.h,!e.checkIfVideoInView()||e.player.clickPaused||e.player.scrollPlay?e.checkIfVideoInView()||e.player.clickPaused||!e.player.scrollPlay||(e.player.video.pause(),setTimeout((function(){e.player.scrollPlay=!1,e.player.scrollPause=!0}),100)):(e.player.video.play(),setTimeout((function(){e.player.scrollPlay=!0,e.player.scrollPause=!1}),100))}))},r.scrollPlayPauseVideo=function(){var e=this;setTimeout((function(){e.setVideoPositionDetails()}),700)},r.setVideoPositionDetails=function(){this.player.videoBox=this.player.el.current.getBoundingClientRect(),this.player.videoTop=(u?window.pageYOffset:0)+this.player.videoBox.top,this.player.videoBottom=this.player.videoTop+this.player.videoBox.height,this.player.scrollEvent=this.onScroll.bind(this),u&&window.addEventListener("scroll",this.player.scrollEvent)},r.checkIfVideoInView=function(){var e=this.player.videoTop+.25*this.player.videoBox.height,t=this.player.videoTop+.75*this.player.videoBox.height;return!(this.screenTop>t||this.screenBottom<e)},r.muteClicked=function(){this.state.muted?(this.player.video.setVolume(1),this.setState({muted:!1})):(this.player.video.setVolume(0),this.setState({muted:!0}))},r.render=function(){var e=this,t=this.player,n="";return"black"===t.soundIconColor&&(n="-dark"),i.a.createElement("div",{className:"vimeo"},i.a.createElement("div",{ref:t.el,key:t.options.id,className:t.class+" "+(this.state.loading?"-loading":"")}),1!==t.options.background&&i.a.createElement("div",{ref:t.muteBtn,onClick:function(){return e.muteClicked()},className:"vimeo__mute "+n+" "+(this.state.muted?"":"-sound")}))},o}(i.a.Component),f=n("2e6m");n("Ll6r"),n("HSia"),n("27S9");n.d(t,"query",(function(){return h}));var h="3369102342";t.default=function(e){var t=e.data.craft.entries[0];return i.a.createElement(a.a,{className:"home"},i.a.createElement(c.a,{data:t.seomatic}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"}),i.a.createElement("div",{className:"col__7 col__m-8-5 col__s-11"},i.a.createElement("div",{className:"home__heading"},i.a.createElement("h1",{className:"home__heading-text fontSize-h2"}," ",t.homeIntroText," "))),i.a.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"})),i.a.createElement("div",{className:"row article-media"},i.a.createElement(d,{elClass:"vimeo__video aspect__16-by-9",vimeoOptions:{id:t.homeVimeo.split("/").pop(),loop:!0}})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.a.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.a.createElement("div",{className:"home__subheading"},i.a.createElement("h2",{className:"home__subheading-text fontSize-h3"}," ",t.homeSubText," ")))),i.a.createElement("div",{className:"row"},i.a.createElement(f.a,{render:{data:t.projectsFeed}})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.a.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.a.createElement("div",{className:"home__subheading"},i.a.createElement("h2",{className:"home__subheading-text fontSize-h3"},"We believe in total design. Our way of joining the dots and making design work harder. With a seamless connection of different design disciplines, we can bring identity to life in all ways. In motion, through spaces, in places, on the line, on the street, in the hand, in the moment."),i.a.createElement(r.Link,{className:"home__subheading-link",to:"/work"},i.a.createElement("p",{className:"home__subheading-link-text fontSize-p2"},"See more of the work"))))))}},URgk:function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){n("Btvt"),n("V+eJ"),function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,c,s=1,l={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){m(e.data)},o=function(e){r.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[s]=i,o(s),s++},f.clearImmediate=h}function h(e){delete l[e]}function m(e){if(u)setTimeout(m,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{h(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},hMnm:function(e,t,n){"use strict";(function(e,o){n("f3/d"),n("8+KV"),n("VRzm"),n("DNiP"),n("rGqo"),n("yt8O"),n("XfO3"),n("EK0E"),n("pIFo"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/");function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=void 0!==e&&"[object global]"==={}.toString.call(e);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,o=t.url,i=n||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=i,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(i);if(c(i))return i.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var l=void 0!==Array.prototype.indexOf,u="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||l&&u))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var d="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id","_WeakMap"+"_"+r()+"."+r()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function i(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function r(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(i(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(i(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(i(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(i(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var r=e[this._id];return r&&r[0]===e?(r[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:d);var f=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n,i;i=function(){var e,t,n,i=Object.prototype.toString,r=void 0!==o?function(e){return o(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(y){e=function(e,t,n){return e[t]=n,e}}function a(e,o){n.add(e,o),t||(t=r(n.drain))}function c(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function s(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var o,i;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=c(o))?i.call(o,n.resolve,n.reject):n.resolve(o)}catch(y){n.reject(y)}}function u(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=c(e))?a((function(){var o=new h(n);try{t.call(e,(function(){u.apply(o,arguments)}),(function(){d.apply(o,arguments)}))}catch(y){d.call(o,y)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(s,n))}catch(y){d.call(new h(n),y)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(s,t))}function f(e,t,n,o){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then((function(e){n(i,e)}),o)}(i)}function h(e){this.def=e,this.triggered=!1}function m(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new m(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t})),t.chain.push(o),0!==t.state&&a(s,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){u.call(t,e)}),(function(e){d.call(t,e)}))}catch(y){d.call(t,y)}}n=function(){var e,n,o;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,r){o=new i(t,r),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var v=e({},"constructor",p,!1);return p.prototype=v,e(v,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var i=e.length,r=Array(i),a=0;f(t,e,(function(e,t){r[e]=t,++a===i&&n(r)}),o)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),o)}))})),p},(n=d)[t="Promise"]=n[t]||i(),e.exports&&(e.exports=n[t])})),h=new WeakMap;function m(e,t,n){var o=h.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),h.set(e.element,o)}function p(e,t){return(h.get(e.element)||{})[t]||[]}function v(e,t,n){var o=h.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],h.set(e.element,o),!0;var i=o[t].indexOf(n);return-1!==i&&o[t].splice(i,1),h.set(e.element,o),o[t]&&0===o[t].length}var y=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return y.reduce((function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t}),t)}function w(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(o,i){if(!c(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var r="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(r+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var s="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;s.open("GET",r,!0),s.onload=function(){if(404!==s.status)if(403!==s.status)try{var t=JSON.parse(s.responseText);if(403===t.domain_status_code)return w(t,n),void i(new Error("“".concat(e,"” is not embeddable.")));o(t)}catch(r){i(r)}else i(new Error("“".concat(e,"” is not embeddable.")));else i(new Error("“".concat(e,"” was not found.")))},s.onerror=function(){var e=s.status?" (".concat(s.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},s.send()}))}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function k(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function b(e,t){var n,o=[];if((t=E(t)).event){if("error"===t.event)p(e,t.data.method).forEach((function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),v(e,t.data.method,n)}));o=p(e,"event:".concat(t.event)),n=t.data}else if(t.method){var i=function(e,t){var n=p(e,t);if(n.length<1)return!1;var o=n.shift();return v(e,t,o),o}(e,t.method);i&&(o.push(i),n=t.value)}o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(o){}}))}var T=new WeakMap,N=new WeakMap,P=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}(t))throw new TypeError("You must pass either a valid element or a valid id.");var i=t.ownerDocument.defaultView;if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!c(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(T.has(t))return T.get(t);this.element=t,this.origin="*";var a=new f((function(e,r){var a=function(t){if(c(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=E(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void r(i)}var a=o&&"ready"===o.event,s=o&&"ping"===o.method;if(a||s)return n.element.setAttribute("data-ready","true"),void e();b(n,o)}};if(i.addEventListener?i.addEventListener("message",a,!1):i.attachEvent&&i.attachEvent("onmessage",a),"IFRAME"!==n.element.nodeName){var l=g(t,o);_(s(l),l,t).then((function(e){var o,i,r,a=w(e,t);return n.element=a,n._originalElement=t,o=t,i=a,r=h.get(o),h.set(i,r),h.delete(o),T.set(n.element,n),e})).catch(r)}}));return N.set(this,a),T.set(this.element,this),"IFRAME"===this.element.nodeName&&k(this,"ping"),this}var t,n,o;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new f((function(o,i){return t.ready().then((function(){m(t,e,{resolve:o,reject:i}),k(t,e,n)})).catch(i)}))}},{key:"get",value:function(e){var t=this;return new f((function(n,o){return e=a(e,"get"),t.ready().then((function(){m(t,e,{resolve:n,reject:o}),k(t,e)})).catch(o)}))}},{key:"set",value:function(e,t){var n=this;return new f((function(o,i){if(e=a(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){m(n,e,{resolve:o,reject:i}),k(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===p(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),m(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");v(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=N.get(this)||new f((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return f.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new f((function(t){N.delete(e),T.delete(e.element),e._originalElement&&(T.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&i(t.prototype,n),o&&i(t,o),e}();r||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=g(e);_(s(t),t,e).then((function(t){return w(t,e)})).catch(n)}catch(o){n(o)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(c(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}}()),t.a=P}).call(this,n("yLpj"),n("URgk").setImmediate)}}]);
//# sourceMappingURL=component---src-pages-index-js-2f82b2c1c32c9788a839.js.map