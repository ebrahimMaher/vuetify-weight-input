(function(t){function e(e){for(var a,r,s=e[0],o=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&p.push(l[r][0]),l[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==l[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},l={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2dd8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"indigo darken-1",dark:""}},[n("v-container",[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("h2",{staticClass:"font-weight-medium"},[t._v("VUETIFY WEIGHT INPUT")]),n("div",[t._v("Developed by: Ebrahim Maher")])])])],1),n("v-main",{staticClass:"mt-12"},[n("v-container",{staticClass:"d-flex justify-center align-center flex-column text-center"},[n("p",{staticClass:"text-center"},[t._v(" you can also use keyboard to enter numbers, save, backspace or close ")]),n("v-weight-input",{attrs:{outlined:""},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"280","nudge-width":280,"max-width":"280px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,l=e.attrs;return[n("v-text-field",t._g(t._b({ref:"weightInput",style:t.style,attrs:{error:t.isError,type:"number",step:"0.001",value:parseFloat(t.value).toFixed(3),outlined:t.outlined,solo:t.solo,label:t.label,placeholder:t.placeholder,"hide-details":"",readonly:t.readonly,disabled:t.disabled,dense:t.dense,loading:t.loading,suffix:!!t.suffix&&t.unit}},"v-text-field",l,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-card",{staticClass:"weight-panel py-0 px-3"},[n("v-card-text",{staticClass:"pb-0 px-1"},[n("div",[n("v-row",{staticClass:"mx-0"},[n("v-col",{staticClass:"mb-3",class:{"rtl-dir":t.rtl},attrs:{cols:"12"}},[n("div",{staticClass:"weight-number w-100"},[n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"me-2"},[n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.backspace}},[n("v-icon",{attrs:{size:"20"}},[t._v("mdi-backspace-outline")])],1)],1),n("h2",{staticClass:"ltr-dir black--text"},[n("span",[t._v(t._s(t.inputValue))]),n("span",{staticClass:"placeholder grey--text"},[t._v(t._s(t.completeWeightPlaceholder))])])]),n("span",{staticClass:"unit medium-text grey--text ms-3"},[t._v(t._s(t.unit))])])]),n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"mx-0 align-center"},[n("v-col",{attrs:{cols:"3"}},[n("v-btn",{staticClass:"normal surface2",attrs:{text:"",block:"",color:"primary"},on:{click:function(e){return t.setFastValue(.125)}}},[t._v(t._s(t.eighthText))])],1),n("v-col",{attrs:{cols:"3"}},[n("v-btn",{staticClass:"normal surface2",attrs:{text:"",block:"",color:"primary"},on:{click:function(e){return t.setFastValue(.25)}}},[t._v(t._s(t.quarterText))])],1),n("v-col",{attrs:{cols:"3"}},[n("v-btn",{staticClass:"normal surface2",attrs:{text:"",block:"",color:"primary"},on:{click:function(e){return t.setFastValue(.5)}}},[t._v(t._s(t.halfText))])],1),n("v-col",{attrs:{cols:"3"}},[n("v-btn",{staticClass:"normal",attrs:{depressed:"",block:"",color:t.plusQuarterColor},on:{click:function(e){return t.increaseBy(.25)}}},[t._v("+0.25")])],1)],1),n("v-divider",{staticClass:"my-2"}),n("v-row",{staticClass:"mx-0 ltr-dir align-center"},[t._l(9,(function(e){return n("v-col",{key:"key-"+e,attrs:{cols:"4"}},[n("v-btn",{staticClass:"surface2",attrs:{text:"",block:"",color:"black"},on:{click:function(n){return t.numClick(e)}}},[t._v(t._s(e))])],1)})),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{depressed:"",dark:"",block:"",color:"error"},on:{click:function(e){t.inputValue=""}}},[n("v-icon",{attrs:{size:"22"}},[t._v("mdi-restart")])],1)],1),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{staticClass:"surface2",attrs:{text:"",block:"",color:"black"},on:{click:function(e){return t.numClick(0)}}},[t._v("0")])],1),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{staticClass:"surface2",attrs:{text:"",block:"",color:"black"},on:{click:t.addPointToValue}},[t._v(".")])],1)],2)],1)],1)],1)]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{large:"",color:"muted",text:""},on:{click:t.cancel}},[t._v(t._s(t.cancelText))]),n("v-btn",{attrs:{large:"",color:"primary",disabled:!t.inputComputedValue,text:""},on:{click:t.saveValue}},[t._v(t._s(t.saveText))])],1)],1)],1)},s=[],o=(n("fb6a"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),{props:{value:{},placeholder:String,label:String,outlined:{type:Boolean,default:!1},solo:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},showSortcuts:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},suffix:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},unit:{type:String,default:"kg"},width:{default:280},maxWidth:{default:280},emptyError:{type:Boolean,default:!1},saveText:{type:String,default:"save"},cancelText:{type:String,default:"cancel"},eighthText:{type:String,default:"1/8"},quarterText:{type:String,default:"1/4"},halfText:{type:String,default:"1/2"},plusQuarterColor:{type:String,default:"secondary"}},data:function(){return{menu:!1,inputValue:""}},computed:{isError:function(){return!(!this.emptyError||this.value)},inputComputedValue:function(){var t=parseFloat(this.inputValue);return t||0},style:function(){var t=this.maxWidth?"max-width: "+this.maxWidth+"px;":"",e=this.width?"width: "+this.width+"px;":"";return t+e},completeWeightPlaceholder:function(){var t=this.inputValue,e=t.toString().split(".")[1],n=e?3-e.length>0?3-e.length:0:3,a="";if(""!==t&&null!==t||(a+="0"),n){t.toString().split(".").length<2&&(a+=".");for(var l=1;l<=n;l++)a+="0"}return a}},methods:{increaseBy:function(t){var e=this.inputComputedValue,n=parseFloat(e)+t;this.inputValue=n.toFixed(3)},setFastValue:function(t){this.inputValue=t.toFixed(3)},backspace:function(){""!==this.inputValue&&(this.inputValue=this.inputValue.toString().slice(0,-1))},numClick:function(t){var e=this.inputValue.toString(),n=e.split(".")[0],a=e.split(".")[1],l="."===e.slice(-1)||!!(a&&a.length>0);("0"===e||a&&a.length>2||!l&&n&&n.length>3)&&(e=""),this.inputValue=e+t.toString()},addPointToValue:function(){var t=this.inputValue;t=t?t.toString().split(".")[0]+".":"0.",this.inputValue=t},cancel:function(){this.syncValue(),this.menu=!1},saveValue:function(){var t=this.inputComputedValue;t&&(t=t||0,t!==this.value&&(this.$emit("input",t),this.menu=!1))},syncValue:function(){var t=this.value;this.inputValue=t?parseFloat(t).toFixed(3).toString():""},showSelectMenu:function(){this.menu=!0},setKeyboardListener:function(){var t=this;window.addEventListener("keydown",(function(e){t.menu&&t.keyboardHandler(e)}))},keyboardHandler:function(t){t.preventDefault(),t.stopPropagation(),"."===t.key||110===t.which||110===t.keyCode?this.addPointToValue():"Backspace"===t.key||8===t.which||8===t.keyCode?this.backspace():"Escape"===t.key||27===t.which||27===t.keyCode?this.cancel():"Enter"===t.key||13===t.which||13===t.keyCode?this.saveValue():isNaN(t.key)||this.numClick(t.key)}},watch:{value:function(t){this.inputValue!==t&&this.syncValue()}},mounted:function(){this.syncValue(),this.setKeyboardListener()}}),c=o,u=(n("95ab"),n("2877")),d=Object(u["a"])(c,r,s,!1,null,"b93303b8",null),p=d.exports,f={name:"App",components:{VWeightInput:p},data:function(){return{weight:0}}},v=f,h=(n("5c0b"),Object(u["a"])(v,l,i,!1,null,null,null)),b=h.exports,y=n("ce5b"),m=n.n(y);n("bf40");a["default"].use(m.a);var g={},x=new m.a(g);a["default"].config.productionTip=!1,new a["default"]({el:"#app",vuetify:x,render:function(t){return t(b)}})},"5c0b":function(t,e,n){"use strict";n("9c0c")},"95ab":function(t,e,n){"use strict";n("2dd8")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.c86a4c3d.js.map