(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+jz1":function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n("KKXr");var o=n("FdF9"),i=n("HmV3"),r=function(e){var t=e.split("/"),n=t[t.length-1];return n=n.split("?")[0],/^\d+$/.test(n)||(n=t[t.length-2]),n};t.a=function(e){var t=e.item,n=void 0!==t.moduleVimeoAmbientBackground,a=n?t.moduleVimeoAmbientBackground:t.moduleVimeoStory,l={id:r(a),loop:!0,background:!!n};return o.default.createElement("div",{className:"row article-media"},o.default.createElement(i.a,{className:"vimeo__video aspect__16-by-9",vimeoOptions:l,soundIcon:t.soundButtonColour}))}},HmV3:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("91GP");var o=n("FdF9"),i=n("hMnm");var r,a="undefined"!=typeof window;a&&window.addEventListener("resize",(function(){r={w:a?window.innerWidth:0,h:a?window.innerHeight:0}}));var l=function(e){var t,n;function l(t){var n;return(n=e.call(this)||this).state={loading:!0,muted:!0},n.player={el:o.default.createRef(),class:t.className,options:Object.assign({},t.vimeoOptions,{},{muted:!0,autopuase:!1}),style:t.style,clickPaused:!1,scrollPaused:!1,scrollPlay:!1,muteBtn:o.default.createRef(),soundIconColor:t.soundIcon},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=l.prototype;return c.componentDidMount=function(){this.init()},c.componentWillUnmount=function(){a&&(window.removeEventListener("scroll",this.player.scrollEvent),window.removeEventListener("resize",this.player.resizeEvent)),this.player.video.destroy()},c.init=function(){var e=this;this.player.video=new i.a(this.player.el.current,this.player.options),this.player.video.setVolume(0),void 0===r&&(r={w:a?window.innerWidth:0,h:a?window.innerHeight:0}),this.player.resizeEvent=this.onResize.bind(this),a&&window.addEventListener("resize",this.player.resizeEvent),this.player.video.on("play",(function(){e.player.scrollPlay||(1!==e.player.options.background&&r.w<=1024&&(e.player.video.setVolume(1),e.setState({muted:!1})),e.player.clickPaused=!1,e.player.scrollPause=!1),e.props.videoPlayingCallback&&e.props.videoPlayingCallback()})),this.player.video.on("pause",(function(){e.checkIfVideoInView()&&(e.player.clickPaused=!0,e.player.scrollPlay=!1)})),this.player.video.ready().then((function(){null!==e.player.el.current&&(e.setState({loading:!1}),e.setVideoPositionDetails(),e.props.videoReadyCallback&&e.props.videoReadyCallback())}))},c.onResize=function(){this.player.el.current&&this.setVideoPositionDetails()},c.onScroll=function(){var e=this;r.w>1024&&window.requestAnimationFrame((function(){e.screenTop=window.pageYOffset,e.screenBottom=e.screenTop+r.h,!e.checkIfVideoInView()||e.player.clickPaused||e.player.scrollPlay?e.checkIfVideoInView()||e.player.clickPaused||!e.player.scrollPlay||(e.player.video.pause().catch((function(e){console.log("err",e)})),setTimeout((function(){e.player.scrollPlay=!1,e.player.scrollPause=!0}),100)):(e.player.video.play().catch((function(e){console.log("err",e)})),setTimeout((function(){e.player.scrollPlay=!0,e.player.scrollPause=!1}),100))}))},c.setVideoPositionDetails=function(){this.player.videoBox=this.player.el.current.getBoundingClientRect(),this.player.videoTop=(a?window.pageYOffset:0)+this.player.videoBox.top,this.player.videoBottom=this.player.videoTop+this.player.videoBox.height,this.player.scrollEvent=this.onScroll.bind(this),a&&window.addEventListener("scroll",this.player.scrollEvent)},c.checkIfVideoInView=function(){var e=this.player.videoTop+.25*this.player.videoBox.height,t=this.player.videoTop+.75*this.player.videoBox.height;return!(this.screenTop>t||this.screenBottom<e)},c.muteClicked=function(){this.state.muted?(this.player.video.setVolume(1),this.setState({muted:!1})):(this.player.video.setVolume(0),this.setState({muted:!0}))},c.render=function(){var e=this,t=this.player;return o.default.createElement("div",{ref:t.el,key:t.options.id,className:t.class+" "+(this.state.loading?"-loading":"")},!0!==t.options.background&&o.default.createElement("div",{ref:t.muteBtn,onClick:function(){return e.muteClicked()},className:"vimeo__mute "+t.soundIconColor+" "+(this.state.muted?"":"-sound")}))},l}(o.default.PureComponent)},RXBc:function(e,t,n){"use strict";n.r(t);n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("ioFf"),n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt");var o,i=n("FdF9"),r=n("Wbzz"),a=n("JfNc"),l=(n("91GP"),n("kOA+")),c=n.n(l),s=n("pc+1"),u=n("9eSz"),d=n.n(u),f=n("gmnB"),m=n("HmV3"),h=n("+jz1"),v=!1,p=!1,y=0,g=0,w=0,_=function(e,t,n,i,r){"ADD"===e&&(o=n.querySelectorAll("section.home-carousel__slide").length,t.addEventListener("mousedown",(function(e){return k(e,t,i)})),t.addEventListener("mousemove",(function(e){return E(e,t,n)})),t.addEventListener("mouseup",(function(e){return b(e,t,n,i,r)})),t.addEventListener("mouseleave",(function(e){return b(e,t,n,i,r)})))},k=function(e,t,n){y=n.current*t.offsetWidth,g=y+e.pageX,v=!0},E=function(e,t,n){var o=e.pageX;v&&(p?(w=o-g,s.w.to(n,.1,{x:w+"px",ease:s.r.easeOut})):(o+10<g||o-10>g)&&(p=!0,t.classList.add("-dragging")))},b=function(e,t,n,i,r){if(p){var a=i.current,l=.1*t.offsetWidth;a!==o-1&&w+l<-1*y?r(a+1):0!==a&&w-l>-1*y?r(a-1):s.w.to(n,.4,{x:-1*y+"px",ease:s.r.easeOut})}v=!1,p=!1,t.classList.remove("-dragging")},T=function(e){var t=e.data,n=Object(i.useState)(0),o=n[0],r=n[1],a=Object(i.useRef)(o),l=Object(i.useRef)(),u=Object(i.useRef)(),v=Object(i.useCallback)((function(e,t){_("ADD",e,t,a,r)}),[]);return Object(i.useEffect)((function(){return v(l.current,u.current),function(){return _("REMOVE")}}),[v]),Object(i.useEffect)((function(){a.current=o;var e=l.current.offsetWidth*o*-1;s.w.to(u.current,.4,{x:e+"px",ease:s.r.easeOut})}),[o]),i.default.createElement("div",{ref:l,className:"home-carousel home-carousel-twelve-by-five home-carousel__fullWidth -focused"},i.default.createElement("div",{className:"home-carousel-dragging"}),i.default.createElement("div",{className:"home-carousel__mobileDelayLink"},t.map((function(e,t){return i.default.createElement(c.a,{className:"home-carousel__mobileDelayLink-link "+(t===o?"-active":""),key:"carousel-link-"+t,to:"/work/articles/"+e.slideLinkToStory[0].slug,duration:.3,fade:!0,draggable:!1})}))),i.default.createElement("div",{ref:u,className:"home-carousel__container",style:{width:100*t.length+"%"}},t.map((function(e,t){var n=Object(i.useMemo)((function(){return Object(f.a)(e.slideBannerImage[0])}),[e.slideBannerImage]);return i.default.createElement("section",{className:"home-carousel__slide -active",key:"carousel-media-"+t},i.default.createElement(d.a,Object.assign({},n,{className:"home-carousel__slide-background",key:"carousel-slide-"+t,style:{position:"absolute",width:"100%",height:"100%"}})),e.slideAmbientBackgroundVideo?i.default.createElement(m.a,{className:"vimeo__video home-carousel__slide-vimeo",vimeoOptions:{id:Object(h.b)(e.slideAmbientBackgroundVideo),loop:!0,background:!0}}):null)})),i.default.createElement("div",{className:"home-carousel__gradientBackground"})),i.default.createElement("div",{className:"home-carousel__overlay"},i.default.createElement("div",{className:"home-carousel__overlay-items"},t.map((function(e,t){return i.default.createElement(c.a,{className:"home-carousel__text fontSize-h1 "+(t===o?"-active":""),key:"carousel-text-"+t,to:"/work/articles/"+e.slideLinkToStory[0].slug,duration:.3,fade:!0},i.default.createElement("p",{className:"home-carousel__text-client fontSize-p3 fontSize-uppercase"},e.slideClientName),i.default.createElement("h3",{className:"home-carousel__text-title fontSize-h1"},e.slideTagline))})),i.default.createElement("div",{className:"home-carousel__pagination fontSize-h1"},t.map((function(e,t){return i.default.createElement("div",{className:"home-carousel__dot "+(t===o?"-active":""),key:"slide-"+t,onClick:function(){return r(t)}})}))))),i.default.createElement("div",{className:"home-carousel__sides"},i.default.createElement("div",{className:"home-carousel__left hover-cursor -noClick",style:{display:0!==o?"block":"none"},onClick:function(){return r(o-1)}}),i.default.createElement("div",{className:"home-carousel__right hover-cursor -noClick",style:{display:o!==t.length-1?"block":"none"},onClick:function(){return r(o+1)}})))},N=n("wcVo"),O=n("dfhs"),j=n.n(O);function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"query",(function(){return I}));t.default=function(e){var t=e.data.craft.entries[0];return i.default.createElement(a.a,{className:j.a.container,seo:t.seomatic},i.default.createElement(T,{data:P(t.homeBanner),styles:j.a}),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"}),i.default.createElement("div",{className:"col__7 col__m-8-5 col__s-11"},i.default.createElement("div",{className:j.a.heading},i.default.createElement("h1",{className:j.a.heading_text+" fontSize-h2"},t.homeIntroText))),i.default.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"})),i.default.createElement("div",{className:"row article-media"},i.default.createElement(m.a,{className:"vimeo__video aspect__16-by-9",vimeoOptions:{id:t.homeVimeo.split("/").pop(),loop:!0}})),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.default.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.default.createElement("div",{className:j.a.subheading},i.default.createElement("h2",{className:j.a.subheading_text+" fontSize-h3"},t.homeSubText)))),i.default.createElement("div",{className:"row"},i.default.createElement(N.a,{data:t.projectsFeed})),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.default.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.default.createElement("div",{className:j.a.subheading},i.default.createElement("h2",{className:j.a.subheading_text+" fontSize-h3"},"We believe in total design. Our way of joining the dots and making design work harder. With a seamless connection of different design disciplines, we can bring identity to life in all ways. In motion, through spaces, in places, on the line, on the street, in the hand, in the moment."),i.default.createElement(r.Link,{className:j.a.subheading_link,to:"/work"},i.default.createElement("p",{className:j.a.subheading_link_text+" fontSize-p2"},"See more of the work"))))))};var I="2477327268"},URgk:function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){n("Btvt"),n("V+eJ"),function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,l,c=1,s={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){r.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return s[c]=i,o(c),c++},f.clearImmediate=m}function m(e){delete s[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=s[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},gmnB:function(e,t,n){"use strict";t.a=function(e){var t=e.imageFile,n=e.url,o=t&&t.childImageSharp?t.childImageSharp:null;return{fluid:null!==o?o.fluid:{src:n,sizes:"",srcSet:n,aspectRatio:1.41},backgroundColor:t&&null!==t.colors?t.colors.muted:"#efefef"}}},hMnm:function(e,t,n){"use strict";(function(e,o){n("f3/d"),n("8+KV"),n("VRzm"),n("DNiP"),n("rGqo"),n("yt8O"),n("XfO3"),n("EK0E"),n("pIFo"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=void 0!==e&&"[object global]"==={}.toString.call(e);function l(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function s(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function u(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,o=t||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(s(o))return"https://vimeo.com/".concat(o);if(u(o))return o.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(o,"” is not a vimeo.com url."))}var f=void 0!==Array.prototype.indexOf,m="undefined"!=typeof window&&void 0!==window.postMessage;if(!(a||f&&m))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",r("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function i(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function r(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(i(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(i(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(i(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(i(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var r=e[this._id];return r&&r[0]===e?(r[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:h);var v=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n,i;i=function(){var e,t,n,i=Object.prototype.toString,r=void 0!==o?function(e){return o(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(y){e=function(e,t,n){return e[t]=n,e}}function a(e,o){n.add(e,o),t||(t=r(n.drain))}function l(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var o,i;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=l(o))?i.call(o,n.resolve,n.reject):n.resolve(o)}catch(y){n.reject(y)}}function u(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=l(e))?a((function(){var o=new m(n);try{t.call(e,(function(){u.apply(o,arguments)}),(function(){d.apply(o,arguments)}))}catch(y){d.call(o,y)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(y){d.call(new m(n),y)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function f(e,t,n,o){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then((function(e){n(i,e)}),o)}(i)}function m(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function v(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t})),t.chain.push(o),0!==t.state&&a(c,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){u.call(t,e)}),(function(e){d.call(t,e)}))}catch(y){d.call(t,y)}}n=function(){var e,n,o;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,r){o=new i(t,r),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var p=e({},"constructor",v,!1);return v.prototype=p,e(p,"__NPO__",0,!1),e(v,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(v,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(v,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var i=e.length,r=Array(i),a=0;f(t,e,(function(e,t){r[e]=t,++a===i&&n(r)}),o)}))})),e(v,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),o)}))})),v},(n=h)[t="Promise"]=n[t]||i(),e.exports&&(e.exports=n[t])})),p=new WeakMap;function y(e,t,n){var o=p.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),p.set(e.element,o)}function g(e,t){return(p.get(e.element)||{})[t]||[]}function w(e,t,n){var o=p.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],p.set(e.element,o),!0;var i=o[t].indexOf(n);return-1!==i&&o[t].splice(i,1),p.set(e.element,o),o[t]&&0===o[t].length}function _(e,t){var n=p.get(e);p.set(t,n),p.delete(e)}var k=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k.reduce((function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t}),t)}function b(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(o,i){if(!u(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var r="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(r+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var l="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;l.open("GET",r,!0),l.onload=function(){if(404!==l.status)if(403!==l.status)try{var t=JSON.parse(l.responseText);if(403===t.domain_status_code)return b(t,n),void i(new Error("“".concat(e,"” is not embeddable.")));o(t)}catch(r){i(r)}else i(new Error("“".concat(e,"” is not embeddable.")));else i(new Error("“".concat(e,"” was not found.")))},l.onerror=function(){var e=l.status?" (".concat(l.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},l.send()}))}function N(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function O(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function j(e,t){var n,o=[];if((t=N(t)).event){if("error"===t.event)g(e,t.data.method).forEach((function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),w(e,t.data.method,n)}));o=g(e,"event:".concat(t.event)),n=t.data}else if(t.method){var i=function(e,t){var n=g(e,t);if(n.length<1)return!1;var o=n.shift();return w(e,t,o),o}(e,t.method);i&&(o.push(i),n=t.value)}o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(o){}}))}var P=new WeakMap,I=new WeakMap,S=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!c(t))throw new TypeError("You must pass either a valid element or a valid id.");var r=t.ownerDocument.defaultView;if("IFRAME"!==t.nodeName){var a=t.querySelector("iframe");a&&(t=a)}if("IFRAME"===t.nodeName&&!u(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(P.has(t))return P.get(t);this.element=t,this.origin="*";var l=new v((function(e,i){var a=function(t){if(u(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=N(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var r=new Error(o.data.message);return r.name=o.data.name,void i(r)}var a=o&&"ready"===o.event,l=o&&"ping"===o.method;if(a||l)return n.element.setAttribute("data-ready","true"),void e();j(n,o)}};if(r.addEventListener?r.addEventListener("message",a,!1):r.attachEvent&&r.attachEvent("onmessage",a),"IFRAME"!==n.element.nodeName){var l=E(t,o);T(d(l),l,t).then((function(e){var o=b(e,t);return n.element=o,n._originalElement=t,_(t,o),P.set(n.element,n),e})).catch(i)}}));return I.set(this,l),P.set(this.element,this),"IFRAME"===this.element.nodeName&&O(this,"ping"),this}var t,n,o;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new v((function(o,i){return t.ready().then((function(){y(t,e,{resolve:o,reject:i}),O(t,e,n)})).catch(i)}))}},{key:"get",value:function(e){var t=this;return new v((function(n,o){return e=l(e,"get"),t.ready().then((function(){y(t,e,{resolve:n,reject:o}),O(t,e)})).catch(o)}))}},{key:"set",value:function(e,t){var n=this;return new v((function(o,i){if(e=l(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){y(n,e,{resolve:o,reject:i}),O(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===g(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),y(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");w(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=I.get(this)||new v((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return v.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new v((function(t){I.delete(e),P.delete(e.element),e._originalElement&&(P.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(t.prototype,n),o&&r(t,o),e}();a||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=E(e);T(d(t),t,e).then((function(t){return b(t,e)})).catch(n)}catch(o){n(o)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(u(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}}()),t.a=S}).call(this,n("yLpj"),n("URgk").setImmediate)},wcVo:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("91GP");var o=n("FdF9"),i=n("plVc"),r=n.n(i),a=n("9eSz"),l=n.n(a),c=n("76ZC"),s=n.n(c);var u=function(e){var t,n;function i(t){var n;return(n=e.call(this)||this).data=void 0,n.tileImgs=[],n.loadTiles=[],n.fadeTiming=.7,n.newLoads=8,n.state={tileLimit:32},n.data=t.data,n.data=n.data.filter((function(e){return void 0!==e})),n.data.forEach((function(e){var t=e.previewTile,o=t[0].imageFile,i=null!==o?o.childImageSharp:null,r={};null!==i?r.fluid=Object.assign({},i.fluid):(console.log(t[0].url),r.fluid={src:t[0].url});var a=o&&null!==o.colors?o.colors.muted:"#efefef";r.backgroundColor=a,n.tileImgs.push(r)})),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidMount=function(){this.mainEl=document.querySelector("main"),this.loadMore()},a.loadMore=function(e){var t=this;e&&e.preventDefault(),this.data.forEach((function(e,n){n<t.state.tileLimit&&(t.loadTiles[n]=e)})),this.setState({tileLimit:this.state.tileLimit+this.newLoads})},a.tilesFadeOut=function(e){var t=document.querySelector('.work-tile[href*="'+e+'"]');t.style.transition="opacity "+this.fadeTiming/2+"s",t.style.transitionDelay=this.fadeTiming/2+"s",this.mainEl.classList.add("-pageFade")},a.render=function(){var e=this;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"work-tile__container"},this.loadTiles.slice(0,this.state.tileLimit).map((function(t,n){var i="/work/articles/"+t.slug;return o.default.createElement(r.a,{exit:{length:e.fadeTiming,trigger:function(){return e.tilesFadeOut(i)}},entry:{delay:1.5*e.fadeTiming,length:e.fadeTiming},className:"work-tile",key:"home tile "+n,to:i},o.default.createElement(l.a,Object.assign({className:"work-tile__image aspect__2-by-1 hover-cursor"},e.tileImgs[n])),o.default.createElement("p",{className:"work-tile__client fontSize-p3 fontSize-uppercase"},t.title),o.default.createElement("span",{className:"work-tile__title fontSize-p2"},s()(t.description.content)))}))),this.data.length>this.loadTiles.length?o.default.createElement("div",{className:"work-tile__load-more"},o.default.createElement("p",{onClick:function(t){e.loadMore(t)},className:"work-tile__load-more-button fontSize-p2"},"Load more work")):o.default.createElement("div",{className:"work-tile__load-more"}))},i}(o.default.PureComponent)}}]);
//# sourceMappingURL=component---src-pages-index-js-6cb4e6055bbd24954dff.js.map