(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(58),o=n.n(r),l=(n(67),n(59)),c=n(18),s=n(19),u=n(20),m=n(22),p=n(21),d=n(23),b=n(24),f=n.n(b),E=(n(70),n(74),{apiKey:"AIzaSyAYYOfxV_w8xZ3PD-zv6rZRUtfA1zlCeLs",authDomain:"".concat("events-8e389",".firebaseapp.com"),databaseURL:"https://".concat("events-8e389",".firebaseio.com"),projectId:"events-8e389",storageBucket:"".concat("events-8e389",".appspot.com"),messagingSenderId:"432410916711",appId:"1:432410916711:web:8bd1907c1e304b1c"});f.a.initializeApp(E),f.a.firestore();var h=f.a,y=n(60),v=n.n(y),g=n(61),w=n.n(g),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).CMSubscriber={EmailAddress:"subscriber@example.com",Name:"New Subscriber",CustomFields:[{Key:"website",Value:"http://example.com"},{Key:"interests",Value:"magic"},{Key:"interests",Value:"romantic walks"}],Resubscribe:!0,RestartSubscriptionBasedAutoresponders:!0,ConsentToTrack:"Yes"},e.api=v()({apiKey:"KICIym8Mu7WRPlYuKRzvaSHmR+1wLKMzVjjJWRFCl4p1D8b/ezkGBlhhxSTZO4BD3jcHLdTL36969GWWHfvE2hBI77rJWi2OmgmQUlcNw5pbvTkZV8DOKRpWM/QAfpM5rvazZlqDZQfKw8U4l8of3w=="}),e.api.addSubscriber("2BE4EF332AA2E32596E38B640E90561930D81A70B52CD92541999D820B349639F3B2D0F03DAA8BD005A8A036ACAE54CC7DC8E83899520BED2C6EF40FAF7B7E76",e.CMSubscriber),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"formSubmit",value:function(e){e.preventDefault(),w()({method:"POST",headers:{"content-type":"application/json; charset=utf-8"},url:"https://www.createsend.com/t/subscribeerror?description=",data:this.serialize(e.target)}).then(function(e){console.log("res",e)})}},{key:"serialize",value:function(e){for(var t=[],n=0;n<e.elements.length;n++){var a=e.elements[n];if(a.name&&!a.disabled&&"file"!==a.type&&"reset"!==a.type&&"submit"!==a.type&&"button"!==a.type)if("select-multiple"===a.type)for(var i=0;i<a.options.length;i++)a.options[i].selected&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.options[i].value));else("checkbox"!==a.type&&"radio"!==a.type||a.checked)&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.value))}return t.join("&")}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{id:"subForm",className:"js-cm-form",onSubmit:function(t){return e.formSubmit(t)},"data-id":"2BE4EF332AA2E32596E38B640E90561930D81A70B52CD92541999D820B349639F3B2D0F03DAA8BD005A8A036ACAE54CC7DC8E83899520BED2C6EF40FAF7B7E76"},i.a.createElement("p",null,i.a.createElement("input",{id:"fieldName",name:"cm-name",type:"text"}),i.a.createElement("label",{htmlFor:"fieldName"},"Name")),i.a.createElement("p",null,i.a.createElement("input",{id:"fieldEmail",name:"cm-silzr-silzr",type:"email",className:"js-cm-email-input",required:!0}),i.a.createElement("label",{htmlFor:"fieldEmail"},"Email")),i.a.createElement("p",null,i.a.createElement("input",{id:"fieldyhiuktj",name:"cm-f-yhiuktj",type:"text"}),i.a.createElement("label",{htmlFor:"fieldyhiuktj"},"Location")),i.a.createElement("p",null,i.a.createElement("input",{id:"fieldyhiukiu",name:"cm-f-yhiukiu",type:"text"}),i.a.createElement("label",{htmlFor:"fieldyhiukiu"},"Company")),i.a.createElement("p",null,i.a.createElement("input",{className:"js-cm-submit-button",type:"submit",value:"Subscribe"})))}}]),t}(a.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).db=h.firestore(),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"inputBlur",value:function(e,t){this.setState(Object(c.a)({},t,e.target.value))}},{key:"submit",value:function(){var e=this;this.db.collection("womenOfInfluence").add(Object(l.a)({},this.state,{RSVP:!0})).then(function(t){console.log("Document successfully written!",e.state)}).catch(function(e){console.error("Error writing document: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("main",null,i.a.createElement("section",{className:"form"},[{id:"Name",text:"Full Name",icon:"./icons/logo.svg",type:"text"},{id:"Email",text:"Email address",icon:"./icons/logo.svg",type:"email"},{id:"Organisation",text:"Organisation",icon:"./icons/logo.svg",type:"text"}].map(function(t){return i.a.createElement("div",{key:t.id,className:"input"},i.a.createElement("input",{placeholder:" ",type:t.type,id:t.id,required:!0,onBlur:function(n){return e.inputBlur(n,t.id)}}),i.a.createElement("label",{htmlFor:t.id,style:{backgroundImage:"url(".concat(t.icon,")")},"data-text":t.text}))}),i.a.createElement("div",{className:"submit",onClick:function(){return e.submit()}},"Register")),i.a.createElement(A,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,n){e.exports=n(141)},67:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.9977aa19.chunk.js.map