(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8oxB":function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("0mN4");var r=n("TqRt");t.__esModule=!0,t.default=void 0;var i,a=r(n("PJYZ")),o=r(n("VbXa")),s=r(n("8OQS")),l=r(n("pVnL")),c=r(n("q1tI")),u=r(n("17x9")),d=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},h=Object.create({}),p=function(e){var t=d(e),n=f(t);return h[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,v=g&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),c.default.createElement("source",{media:i,srcSet:n,sizes:a}))}))}function b(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function T(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function _(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var k=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+c+o+s+n+r+t+a+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,a=c.default.createElement(N,(0,l.default)({src:t},i));return n.length>1?c.default.createElement("picture",null,r(n),a):a},N=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:i},h,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&p(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!m&&v&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||g&&(m||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=f(t),h[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,p=e.fluid,m=e.fixed,g=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,b=e.itemProp,_=e.loading,k=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:O?1:0,transition:P?"opacity "+v+"ms":"none"},s),L="boolean"==typeof g?"lightgray":g,A={transitionDelay:v+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&A,{},s,{},f),M={title:t,alt:this.state.isVisible?"":n,style:C,className:h,itemProp:b};if(p){var z=p,x=z[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),L&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&A)}),x.base64&&c.default.createElement(I,{src:x.base64,spreadProps:M,imageVariants:z,generateSources:T}),x.tracedSVG&&c.default.createElement(I,{src:x.tracedSVG,spreadProps:M,imageVariants:z,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(z),c.default.createElement(N,{alt:n,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:_,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:n,title:t,loading:_},x,{imageVariants:z}))}}))}if(m){var R=m,j=R[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},a);return"inherit"===a.display&&delete W.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},L&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:L,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},P&&A)}),j.base64&&c.default.createElement(I,{src:j.base64,spreadProps:M,imageVariants:R,generateSources:T}),j.tracedSVG&&c.default.createElement(I,{src:j.tracedSVG,spreadProps:M,imageVariants:R,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(R),c.default.createElement(N,{alt:n,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:_,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:n,title:t,loading:_},j,{imageVariants:R}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});O.propTypes={resolutions:P,sizes:V,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var L=O;t.default=L},OGtf:function(e,t,n){var r=n("XKFU"),i=n("eeVq"),a=n("vhPU"),o=/"/g,s=function(e,t,n,r){var i=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t);n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt");var r=n("q1tI"),i=n.n(r),a=n("Wbzz"),o=n("Bl7J"),s=n("vrFN"),l=(n("91GP"),n("hMnm"));n("r2JF");var c,u="undefined"!=typeof window;u&&window.addEventListener("resize",(function(){c={w:u?window.innerWidth:0,h:u?window.innerHeight:0}}));var d=function(e){var t,n;function r(t){var n;return(n=e.call(this)||this).state={loading:!0,muted:!0},n.player={el:i.a.createRef(),class:t.elClass,options:Object.assign({},t.vimeoOptions,{},{muted:!0}),clickPaused:!1,scrollPaused:!1,scrollPlay:!1,muteBtn:i.a.createRef(),soundIconColor:t.soundIcon},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.init()},a.componentWillUnmount=function(){u&&(window.removeEventListener("scroll",this.player.scrollEvent),window.removeEventListener("resize",this.player.resizeEvent)),this.player.video.destroy()},a.init=function(){var e=this;this.player.video=new l.a(this.player.el.current,this.player.options),void 0===c&&(c={w:u?window.innerWidth:0,h:u?window.innerHeight:0}),this.player.resizeEvent=this.onResize.bind(this),u&&window.addEventListener("resize",this.player.resizeEvent),this.player.video.on("play",(function(){e.player.scrollPlay||(1!==e.player.options.background&&c.w<=1024&&(e.player.video.setVolume(1),e.setState({muted:!1})),e.player.clickPaused=!1,e.player.scrollPause=!1)})),this.player.video.on("pause",(function(){e.checkIfVideoInView()&&(e.player.clickPaused=!0,e.player.scrollPlay=!1)})),this.player.video.ready().then((function(){e.player.video.setAutopause(!1),e.setState({loading:!1}),e.scrollPlayPauseVideo()}))},a.onResize=function(){this.player.el.current&&this.setVideoPositionDetails()},a.onScroll=function(){var e=this;c.w>1024&&window.requestAnimationFrame((function(){e.screenTop=window.pageYOffset,e.screenBottom=e.screenTop+c.h,!e.checkIfVideoInView()||e.player.clickPaused||e.player.scrollPlay?e.checkIfVideoInView()||e.player.clickPaused||!e.player.scrollPlay||(e.player.video.pause(),setTimeout((function(){e.player.scrollPlay=!1,e.player.scrollPause=!0}),100)):(e.player.video.play(),setTimeout((function(){e.player.scrollPlay=!0,e.player.scrollPause=!1}),100))}))},a.scrollPlayPauseVideo=function(){var e=this;setTimeout((function(){e.setVideoPositionDetails()}),700)},a.setVideoPositionDetails=function(){this.player.videoBox=this.player.el.current.getBoundingClientRect(),this.player.videoTop=(u?window.pageYOffset:0)+this.player.videoBox.top,this.player.videoBottom=this.player.videoTop+this.player.videoBox.height,this.player.scrollEvent=this.onScroll.bind(this),u&&window.addEventListener("scroll",this.player.scrollEvent)},a.checkIfVideoInView=function(){var e=this.player.videoTop+.25*this.player.videoBox.height,t=this.player.videoTop+.75*this.player.videoBox.height;return!(this.screenTop>t||this.screenBottom<e)},a.muteClicked=function(){this.state.muted?(this.player.video.setVolume(1),this.setState({muted:!1})):(this.player.video.setVolume(0),this.setState({muted:!0}))},a.render=function(){var e=this,t=this.player,n="";return"black"===t.soundIconColor&&(n="-dark"),i.a.createElement("div",{className:"vimeo"},i.a.createElement("div",{ref:t.el,key:t.options.id,className:t.class+" "+(this.state.loading?"-loading":"")}),1!==t.options.background&&i.a.createElement("div",{ref:t.muteBtn,onClick:function(){return e.muteClicked()},className:"vimeo__mute "+n+" "+(this.state.muted?"":"-sound")}))},r}(i.a.Component),f=n("9eSz"),h=n.n(f);n("ezAz");var p=function(e){var t,n;function r(t){var n;return(n=e.call(this)||this).data=void 0,n.tileImgs=[],n.loadTiles=[],n.state={limit:8},n.data=t.render.data,n.data=n.data.filter((function(e){return void 0!==e})),n.data.forEach((function(e){var t=e.previewTile[0].imageFile.childImageSharp;null===t&&console.log(e.previewTile[0].url);var r=null!==t?t.fluid:{src:e.previewTile[0].url};n.tileImgs.push(r)})),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.loadMore()},a.loadMore=function(e){var t=this;e&&e.preventDefault(),this.data.forEach((function(e,n){n<t.state.limit&&(t.loadTiles[n]=e)})),this.setState({limit:this.state.limit+8})},a.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"work-tile__container"},this.loadTiles.slice(0,this.state.limit).map((function(t,n){return i.a.createElement("div",{className:"work-tile",key:"home tile "+n},i.a.createElement(h.a,{className:"work-tile__image aspect__2-by-1 hover-cursor",fluid:e.tileImgs[n]}),i.a.createElement("p",{className:"work-tile__client fontSize-p3 fontSize-uppercase"}," ",t.title," "),i.a.createElement("p",{className:"work-tile__title fontSize-p2",dangerouslySetInnerHTML:{__html:null!==t.description?t.description.content:null}}))}))),this.data.length>this.loadTiles.length?i.a.createElement("div",{className:"work-tile__load-more"},i.a.createElement("a",{href:"",onClick:function(t){e.loadMore(t),e.props.render.update(Math.random())},className:"work-tile__load-more-button fontSize-p2"},"Load more work")):i.a.createElement("div",{className:"work-tile__load-more"}))},r}(r.Component);n("Ll6r"),n("HSia"),n("27S9");n.d(t,"query",(function(){return m}));var m="714798347";t.default=function(e){var t=e.data.craft.entries[0];return i.a.createElement(o.a,{class:"home"},t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{data:t.seomatic}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"}),i.a.createElement("div",{className:"col__7 col__m-8-5 col__s-11"},i.a.createElement("div",{className:"home__heading"},i.a.createElement("h1",{className:"home__heading-text fontSize-h2"}," ",t.homeIntroText," "))),i.a.createElement("div",{className:"col__2-5 col__m-1-5 col__s-0-5"})),i.a.createElement("div",{className:"row article-media"},i.a.createElement(d,{elClass:"vimeo__video aspect__16-by-9",vimeoOptions:{id:t.homeVimeo.split("/").pop(),loop:!0}})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.a.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.a.createElement("div",{className:"home__subheading"},i.a.createElement("h2",{className:"home__subheading-text fontSize-h3"}," ",t.homeSubText," ")))),i.a.createElement("div",{className:"row"},i.a.createElement(p,{render:{data:t.projectsFeed}})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col__6 col__m-4 col__s-3"}),i.a.createElement("div",{className:"col__6 col__m-8 col__s-9"},i.a.createElement("div",{className:"home__subheading"},i.a.createElement("h2",{className:"home__subheading-text fontSize-h3"},"We believe in total design. Our way of joining the dots and making design work harder. With a seamless connection of different design disciplines, we can bring identity to life in all ways. In motion, through spaces, in places, on the line, on the street, in the hand, in the moment."),i.a.createElement(a.Link,{className:"home__subheading-link",to:"/work"},i.a.createElement("p",{className:"home__subheading-link-text fontSize-p2"},"See more of the work")))))))}},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){n("Btvt"),n("V+eJ"),function(e,n){"use strict";if(!e.setImmediate){var r,i,a,o,s,l=1,c={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){a.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(o+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[l]=i,r(l),l++},f.clearImmediate=h}function h(e){delete c[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{h(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},hMnm:function(e,t,n){"use strict";(function(e,r){n("f3/d"),n("8+KV"),n("VRzm"),n("DNiP"),n("rGqo"),n("yt8O"),n("XfO3"),n("EK0E"),n("pIFo"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=void 0!==e&&"[object global]"==={}.toString.call(e);function o(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function s(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function l(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,r=t.url,i=n||r;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=i,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(i);if(s(i))return i.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var c=void 0!==Array.prototype.indexOf,u="undefined"!=typeof window&&void 0!==window.postMessage;if(!(a||c&&u))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var d="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id","_WeakMap"+"_"+a()+"."+a()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function i(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(i(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(i(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(i(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(i(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var a=e[this._id];return a&&a[0]===e?(a[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:d);var f=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n,i;i=function(){var e,t,n,i=Object.prototype.toString,a=void 0!==r?function(e){return r(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(v){e=function(e,t,n){return e[t]=n,e}}function o(e,r){n.add(e,r),t||(t=a(n.drain))}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function l(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,i;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=s(r))?i.call(r,n.resolve,n.reject):n.resolve(r)}catch(v){n.reject(v)}}function u(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=s(e))?o((function(){var r=new h(n);try{t.call(e,(function(){u.apply(r,arguments)}),(function(){d.apply(r,arguments)}))}catch(v){d.call(r,v)}})):(n.msg=e,n.state=1,n.chain.length>0&&o(l,n))}catch(v){d.call(new h(n),v)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(l,t))}function f(e,t,n,r){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then((function(e){n(i,e)}),r)}(i)}function h(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new p(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&o(l,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){u.call(t,e)}),(function(e){d.call(t,e)}))}catch(v){d.call(t,v)}}n=function(){var e,n,r;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,a){r=new i(t,a),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var g=e({},"constructor",m,!1);return m.prototype=g,e(g,"__NPO__",0,!1),e(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(m,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var i=e.length,a=Array(i),o=0;f(t,e,(function(e,t){a[e]=t,++o===i&&n(a)}),r)}))})),e(m,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),m},(n=d)[t="Promise"]=n[t]||i(),e.exports&&(e.exports=n[t])})),h=new WeakMap;function p(e,t,n){var r=h.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),h.set(e.element,r)}function m(e,t){return(h.get(e.element)||{})[t]||[]}function g(e,t,n){var r=h.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],h.set(e.element,r),!0;var i=r[t].indexOf(n);return-1!==i&&r[t].splice(i,1),h.set(e.element,r),r[t]&&0===r[t].length}var v=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function w(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,i){if(!s(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var a="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var o in t)t.hasOwnProperty(o)&&(a+="&".concat(o,"=").concat(encodeURIComponent(t[o])));var l="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;l.open("GET",a,!0),l.onload=function(){if(404!==l.status)if(403!==l.status)try{var t=JSON.parse(l.responseText);if(403===t.domain_status_code)return w(t,n),void i(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(a){i(a)}else i(new Error("“".concat(e,"” is not embeddable.")));else i(new Error("“".concat(e,"” was not found.")))},l.onerror=function(){var e=l.status?" (".concat(l.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},l.send()}))}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function T(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function _(e,t){var n,r=[];if((t=E(t)).event){if("error"===t.event)m(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),g(e,t.data.method,n)}));r=m(e,"event:".concat(t.event)),n=t.data}else if(t.method){var i=function(e,t){var n=m(e,t);if(n.length<1)return!1;var r=n.shift();return g(e,t,r),r}(e,t.method);i&&(r.push(i),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var k=new WeakMap,S=new WeakMap,I=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}(t))throw new TypeError("You must pass either a valid element or a valid id.");var i=t.ownerDocument.defaultView;if("IFRAME"!==t.nodeName){var a=t.querySelector("iframe");a&&(t=a)}if("IFRAME"===t.nodeName&&!s(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(k.has(t))return k.get(t);this.element=t,this.origin="*";var o=new f((function(e,a){var o=function(t){if(s(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=E(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void a(i)}var o=r&&"ready"===r.event,l=r&&"ping"===r.method;if(o||l)return n.element.setAttribute("data-ready","true"),void e();_(n,r)}};if(i.addEventListener?i.addEventListener("message",o,!1):i.attachEvent&&i.attachEvent("onmessage",o),"IFRAME"!==n.element.nodeName){var c=y(t,r);b(l(c),c,t).then((function(e){var r,i,a,o=w(e,t);return n.element=o,n._originalElement=t,r=t,i=o,a=h.get(r),h.set(i,a),h.delete(r),k.set(n.element,n),e})).catch(a)}}));return S.set(this,o),k.set(this.element,this),"IFRAME"===this.element.nodeName&&T(this,"ping"),this}var t,n,r;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new f((function(r,i){return t.ready().then((function(){p(t,e,{resolve:r,reject:i}),T(t,e,n)})).catch(i)}))}},{key:"get",value:function(e){var t=this;return new f((function(n,r){return e=o(e,"get"),t.ready().then((function(){p(t,e,{resolve:n,reject:r}),T(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new f((function(r,i){if(e=o(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){p(n,e,{resolve:r,reject:i}),T(n,e,t)})).catch(i)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===m(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),p(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");g(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=S.get(this)||new f((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return f.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new f((function(t){S.delete(e),k.delete(e.element),e._originalElement&&(k.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&i(t.prototype,n),r&&i(t,r),e}();a||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=y(e);b(l(t),t,e).then((function(t){return w(t,e)})).catch(n)}catch(r){n(r)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(s(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}}()),t.a=I}).call(this,n("yLpj"),n("URgk").setImmediate)}}]);
//# sourceMappingURL=component---src-pages-index-js-dfab94b973a22ba2b640.js.map