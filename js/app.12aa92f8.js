(function(e){function t(t){for(var o,i,r=t[0],c=t[1],l=t[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},s={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/typing_tool/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f37":function(e,t,n){"use strict";n("e9fb")},2536:function(e,t,n){"use strict";n("dae7")},"3a86":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("5530"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=n("2f62"),i=n("342d"),r=n.n(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu"),n("TextRenderer")],1)},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Menu"},[n("BurgerMenu",{on:{click:e.onClickBurgerMenu}}),n("div",{staticClass:"content",class:e.menuHiddenClass},[n("table",[n("tr",[n("td",[e._v("Capital letters")]),n("td",[n("ToggleButton",{attrs:{active:e.showCapitalLetters},on:{"on-click-toggle-button":e.toggleCapitalLetters}})],1)]),n("tr",[n("td",[e._v("Text size")]),n("td",{staticClass:"fontSizeControler"},[n("span",{staticClass:"currentFontSize"},[e._v(e._s(e.fontSize))]),n("button",{staticClass:"fontSizeControlerButtons",on:{click:e.increaseFontSize}},[e._v(" + ")]),n("button",{staticClass:"fontSizeControlerButtons",on:{click:e.decreaseFontSize}},[e._v(" - ")])])]),n("tr",[n("td",[e._v("Font")]),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFontValue,expression:"selectedFontValue"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedFontValue=t.target.multiple?n:n[0]}}},e._l(e.fonts,(function(t){var o=t.value,s=t.text;return n("option",{key:o,domProps:{value:o,selected:o===e.selectedFont&&"selected"}},[e._v(" "+e._s(s)+" ")])})),0)])])])])],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ToggleButton",class:e.activeClass,on:{click:function(t){return e.$emit("on-click-toggle-button")}}},[n("div",{staticClass:"knob"})])},f=[],h={props:{active:{type:Boolean,default:!1}},computed:{activeClass:function(){return this.active?"active":""}}},v=h,b=(n("d89c"),n("2877")),g=Object(b["a"])(v,d,f,!1,null,"b73b8dd2",null),m=g.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"BuggerMenu"},e.$listeners),[n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"})])},y=[],T=(n("2536"),{}),w=Object(b["a"])(T,C,y,!1,null,"46e37113",null),O=w.exports,_={components:{BurgerMenu:O,ToggleButton:m},data:function(){return{selectedFontValue:"'Ubuntu Mono', monospace"}},watch:{selectedFontValue:function(e){this.setSelectedFont(e)}},computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["fonts","fontSize","menuOpen","selectedFont","disableTyping","showCapitalLetters"])),{},{menuHiddenClass:function(){return this.menuOpen?"":"hide"}}),methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["toggleMenuOpen","setSelectedFont","increaseFontSize","decreaseFontSize","setDisableTyping","toggleCapitalLetters"])),{},{onClickBurgerMenu:function(){this.toggleMenuOpen(),this.disableTyping||this.setDisableTyping(!0)}})},x=_,S=(n("1f37"),Object(b["a"])(x,u,p,!1,null,"3c99cedd",null)),j=S.exports;function F(e){var t;null===(t=document.querySelector("#selectedFontStyle"))||void 0===t||t.remove();var n=document.createElement("style"),o=document.createTextNode("* { font-family: ".concat(e," }"));n.appendChild(o),n.setAttribute("id","selectedFontStyle"),document.head.appendChild(n)}var M={updateSelectedFont:F},z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TextRenderer"},[n("InfoPanel"),!e.disableTyping&&e.articleTitle.length?n("h1",{staticClass:"articleTitle"},[e._v(" "+e._s(e.articleTitle)+" ")]):e._e(),n("div",{ref:"wrapViewer",staticClass:"wrapViewer",class:{disabled:e.disableTyping}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"userInput",staticClass:"userInput",attrs:{disabled:"disabled",autofocus:""},domProps:{value:e.value},on:{keydown:e.onKeydownUserInput,input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("div",{ref:"viewer",staticClass:"viewer",style:{fontSize:e.fontSize+"px",fontFamily:""+e.selectedFont},domProps:{innerHTML:e._s(e.finalText)}})]),n("button",{staticClass:"toogleTyping",on:{click:e.onClickToogleTyping}},[e._v(" "+e._s(e.toogleTypingBtnText)+" ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sourceText,expression:"sourceText"}],ref:"customText",staticClass:"customText",class:{disabled:!e.disableTyping},style:{fontSize:e.fontSize+"px",fontFamily:""+e.selectedFont},attrs:{rows:"4",cols:"50"},domProps:{value:e.sourceText},on:{input:function(t){t.target.composing||(e.sourceText=t.target.value)}}})],1)},k=[],E=(n("99af"),n("caad"),n("a15b"),n("ac1f"),n("5319"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"InfoPanel"},[n("table",{staticClass:"info"},[e._m(0),n("tr",[n("td",[n("span",{staticClass:"words"},[e._v(e._s(e.wordsCount))])]),n("td",[n("span",{staticClass:"errors"},[e._v(e._s(e.errorCount))])])])])])}),L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Words")]),n("th",[e._v("Errors")])])}],P={computed:Object(a["c"])(["errorCount","fontSize","wordsCount","showCapitalLetters"]),methods:Object(a["b"])(["toggleCapitalLetters"])},B=P,V=(n("d961"),Object(b["a"])(B,E,L,!1,null,"5fa4f178",null)),A=V.exports,I="Amelia Krales A global phishing campaign has been targeting organizations associated with the distribution of COVID-19 vaccines since September 2020, IBM security researchers say. In a blog post, analysts Claire Zaboeva and Melissa",$=["ArrowLeft","ArrowRight","Tab"],D={components:{InfoPanel:A},data:function(){return{currentPos:0,value:"",finalText:'<span class="active">&nbsp;</span>',sourceText:I,article:"",articleTitle:""}},watch:{value:function(e){this.updateViewer(e)}},computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["fontSize","errorCount","selectedFont","disableTyping","showCapitalLetters"])),{},{toogleTypingBtnText:function(){return this.disableTyping?"Click here to start typing":"Click here to stop typing"}}),mounted:function(){this.updateViewer(this.sourceText)},methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["setMenuOpen","setWordsCount","setErrorCount","setDisableTyping","increaseErrorCount"])),{},{updateErrorCount:function(e,t,n){e[n]!==t[n]&&this.increaseErrorCount()},updateWordsCount:function(e,t){var n=e.substr(0,t).split("␣").length-1;this.setWordsCount(n)},updateViewer:function(e){var t=[],n=0,o=e.replace(/ /g,"␣"),s=this.sourceText.replace(/ /g,"␣");this.showCapitalLetters||(s=s.toLowerCase());for(var a=0;a<s.length;a++){var i=o[a],r=s[a],c=["letter"],l=r;if(a===this.value.length&&(n=a-1,c.push("active")),"undefined"!==typeof i){var u=i!==r?"error":"success";l=i,c.push(u)}"␣"===r&&c.push("space");var p='<span class="'.concat(c.join(" "),'">').concat(l,"</span>");t.push(p)}this.updateErrorCount(s,o,n),this.updateWordsCount(o,n),this.finalText=t.join("")},onKeydownUserInput:function(e){this.preventNotAllowedKeys(e),"Escape"===e.key&&this.resetTyping()},resetTyping:function(){this.currentPos=0,this.value="",this.setErrorCount(0),this.updateViewer(this.sourceText)},preventNotAllowedKeys:function(e){$.includes(e.key)&&e.preventDefault()},onClickToogleTyping:function(){var e=this.$refs,t=e.customText,n=e.userInput;this.setDisableTyping(!this.disableTyping),this.setMenuOpen(!1),this.disableTyping?t.focus():(n.removeAttribute("disabled"),n.focus(),this.updateViewer(this.sourceText))}})},R=D,U=(n("8a77"),Object(b["a"])(R,z,k,!1,null,null,null)),K=U.exports,N={name:"App",components:{Menu:j,TextRenderer:K},computed:Object(o["a"])({},Object(a["c"])(["selectedFont","fonts"])),mounted:function(){this.selectedFont||this.setSelectedFont(this.fonts[1]),M.updateSelectedFont(this.selectedFont)},methods:Object(o["a"])({},Object(a["b"])(["setSelectedFont"])),watch:{selectedFont:function(e){M.updateSelectedFont(e)}},head:{link:[{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap"}]}},W=N,H=(n("5c0b"),Object(b["a"])(W,c,l,!1,null,null,null)),J=H.exports,q={state:{errorCount:0,wordsCount:0,showCapitalLetters:!0,disableTyping:!0,value:"",finalText:'<span class="active">&nbsp;</span>',sourceText:"",article:"",menuOpen:!1,selectedFont:"'Ubuntu Mono', monospace",fonts:[{text:"Ubuntu",value:"'Ubuntu Mono', monospace"},{text:"Roboto",value:"'Roboto Mono', monospace"}],articleTitle:"Amelia KralesA global phishing",fontSize:24},mutations:{toggleMenuOpen:function(e){e.menuOpen=!e.menuOpen,console.log("state.menuOpen",e.menuOpen)},setMenuOpen:function(e,t){e.menuOpen=t},setDisableTyping:function(e,t){e.disableTyping=t},increaseErrorCount:function(e){e.errorCount+=1},setErrorCount:function(e,t){e.errorCount=t},increaseFontSize:function(e){e.fontSize+=1},decreaseFontSize:function(e){e.fontSize-=1},setWordsCount:function(e,t){e.wordsCount=t},setSelectedFont:function(e,t){e.selectedFont=t},toggleCapitalLetters:function(e){console.log("toggleCapitalLetters"),e.showCapitalLetters=!e.showCapitalLetters}}},Z=q;s["a"].use(r.a),s["a"].use(a["a"]);var G=new a["a"].Store(Object(o["a"])({},Z));s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(J)},store:G}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"69b1":function(e,t,n){},"8a77":function(e,t,n){"use strict";n("3a86")},"9c0c":function(e,t,n){},c981:function(e,t,n){},d89c:function(e,t,n){"use strict";n("69b1")},d961:function(e,t,n){"use strict";n("c981")},dae7:function(e,t,n){},e9fb:function(e,t,n){}});
//# sourceMappingURL=app.12aa92f8.js.map