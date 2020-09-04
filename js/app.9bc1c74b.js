(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/typing_tool/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},2003:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("TextRenderer",{attrs:{letters:t.letters}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textArea",attrs:{rows:"4",cols:"50"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"apply",on:{click:t.sanitizeText}},[t._v(" Apply ")])],1)},o=[],a=(r("a630"),r("d81d"),r("3ca3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"TextRenderer"},[r("table",{staticClass:"info"},[t._m(0),r("tr",[t._m(1),r("td",[r("span",{staticClass:"numberOfError"},[t._v(t._s(t.errorCount))])])])]),r("div",{ref:"renderer",staticClass:"renderer",class:{disableTyping:t.disableTyping}},t._l(t.letters,(function(e,n){var s=e.text,o=e.status,a=e.active,i=e.type;return r("span",{key:n,staticClass:"letter",class:[{active:a},o,i]},[t._v(t._s(s))])})),0),r("button",{staticClass:"toogleTyping",on:{click:t.onClickToogleTyping}},[t._v(" "+t._s(t.toogleTypingBtnText)+" ")])])}),i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Words")]),r("th",[t._v("Errors")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("span",{staticClass:"numberOfWords"},[t._v("0")])])}],c=(r("4160"),r("caad"),r("ac1f"),r("2532"),r("1276"),r("159b"),{name:"TextRenderer",props:{rawText:{type:String,default:""},letters:{type:Array,default:function(){return["a"]}}},data:function(){return{allowedKeys:["Escape","Backspace","'",".",","," ","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],currentPos:0,errorCount:0,disableTyping:!0}},computed:{wordsCount:function(){return this.rawText.substr(0,this.currentPos).split(" ").length-1},toogleTypingBtnText:function(){return this.disableTyping?"Click here to start typing":"Click here stop typing"}},methods:{reset:function(){var t=this;this.currentPos=0,this.letters.forEach((function(e,r){t.letters[r].active=t.currentPos===r,t.letters[r].status="ok"}))},onClickToogleTyping:function(){this.disableTyping=!this.disableTyping;var t=this.disableTyping?"removeEventListener":"addEventListener";document[t]("keyup",this.onKeyup),document[t]("keydown",this.onKeydown),this.disableTyping&&this.$refs.renderer.focus()},onKeyup:function(t){var e=this,r=t.key,n=!this.allowedKeys.includes(r),s=this.currentPos>this.letters.length;if(!n&&!s){switch(r){case"Backspace":this.letters[this.currentPos].status="ok",this.currentPos=this.currentPos-1>=0?this.currentPos-1:0;break;case"Escape":this.reset();break;case this.letters[this.currentPos].text:this.letters[this.currentPos].status="success",this.currentPos+=1;break;default:this.letters[this.currentPos].status="error",this.errorCount+=1;break}this.letters.forEach((function(t,r){e.letters[r].active=e.currentPos===r}))}},onKeydown:function(t){"Space"===t.code&&t.preventDefault()}}}),u=c,l=(r("b1a0"),r("2877")),p=Object(l["a"])(u,a,i,!1,null,"d9a73dde",null),d=p.exports,f='Google took five days to review several ads with misleading information about voting by mail before opting to approve them, The Washington Post reported. The ads were created by Protect My Vote a group the Post refers to as "shadowy" and appeared to target people in several US states, including Arizona, Florida, Georgia, Iowa, Michigan, and Texas, showing up in response to searches for "mail-in voting." One of the ads reads "think mail-in voting and absentee voting are the same. Think again There are different safeguards for each a misleading and inaccurate claim.',h={name:"App",components:{TextRenderer:d},data:function(){return{letters:[],text:f}},mounted:function(){this.sanitizeText(),console.log("Ready! =]")},methods:{sanitizeText:function(){this.letters=Array.from(this.text).map((function(t,e){var r=" "===t?"space":"";return{text:t.toLowerCase(),status:"ok",active:0===e,type:r}}))}}},v=h,g=(r("034f"),Object(l["a"])(v,s,o,!1,null,null,null)),y=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,r){},b1a0:function(t,e,r){"use strict";var n=r("2003"),s=r.n(n);s.a}});
//# sourceMappingURL=app.9bc1c74b.js.map