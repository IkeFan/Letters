webpackJsonp([1],{6680:function(t,e){},E3Gz:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:a});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[a].concat(t.init):a,e.call(this,t)}}function a(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */function o(t,e){Object.keys(t).forEach(function(a){return e(t[a],a)})}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var a=t.state;this.state=("function"==typeof a?a():a)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){o(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,c);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,a){return t+((e=e.getChild(a)).namespaced?a+"/":"")},"")},u.prototype.update=function(t){!function t(e,a,n){0;a.update(n);if(n.modules)for(var r in n.modules){if(!a.getChild(r))return void 0;t(e.concat(r),a.getChild(r),n.modules[r])}}([],this.root,t)},u.prototype.register=function(t,e,a){var n=this;void 0===a&&(a=!0);var r=new s(e,a);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&o(e.modules,function(e,r){n.register(t.concat(r),e,a)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),a=t[t.length-1];e.getChild(a).runtime&&e.removeChild(a)};var l;var h=function(t){var e=this;void 0===t&&(t={}),!l&&"undefined"!=typeof window&&window.Vue&&_(window.Vue);var a=t.plugins;void 0===a&&(a=[]);var n=t.strict;void 0===n&&(n=!1);var r=t.state;void 0===r&&(r={}),"function"==typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new l;var o=this,s=this.dispatch,c=this.commit;this.dispatch=function(t,e){return s.call(o,t,e)},this.commit=function(t,e,a){return c.call(o,t,e,a)},this.strict=n,v(this,r,[],this._modules.root),g(this,r),a.forEach(function(t){return t(e)}),l.config.devtools&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}(this)},f={state:{configurable:!0}};function m(t,e){return e.indexOf(t)<0&&e.push(t),function(){var a=e.indexOf(t);a>-1&&e.splice(a,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var a=t.state;v(t,a,[],t._modules.root,!0),g(t,a,e)}function g(t,e,a){var n=t._vm;t.getters={};var r={};o(t._wrappedGetters,function(e,a){r[a]=function(){return e(t)},Object.defineProperty(t.getters,a,{get:function(){return t._vm[a]},enumerable:!0})});var i=l.config.silent;l.config.silent=!0,t._vm=new l({data:{$$state:e},computed:r}),l.config.silent=i,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),n&&(a&&t._withCommit(function(){n._data.$$state=null}),l.nextTick(function(){return n.$destroy()}))}function v(t,e,a,n,r){var i=!a.length,o=t._modules.getNamespace(a);if(n.namespaced&&(t._modulesNamespaceMap[o]=n),!i&&!r){var s=p(e,a.slice(0,-1)),c=a[a.length-1];t._withCommit(function(){l.set(s,c,n.state)})}var u=n.context=function(t,e,a){var n=""===e,r={dispatch:n?t.dispatch:function(a,n,r){var i=d(a,n,r),o=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,o)},commit:n?t.commit:function(a,n,r){var i=d(a,n,r),o=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,o,s)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){var a={},n=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,n)===e){var i=r.slice(n);Object.defineProperty(a,i,{get:function(){return t.getters[r]},enumerable:!0})}}),a}(t,e)}},state:{get:function(){return p(t.state,a)}}}),r}(t,o,a);n.forEachMutation(function(e,a){!function(t,e,a,n){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){a.call(t,n.state,e)})}(t,o+a,e,u)}),n.forEachAction(function(e,a){var n=e.root?a:o+a,r=e.handler||e;!function(t,e,a,n){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var i,o=a.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e,r);return(i=o)&&"function"==typeof i.then||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}(t,n,r,u)}),n.forEachGetter(function(e,a){!function(t,e,a,n){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return a(n.state,n.getters,t.state,t.getters)}}(t,o+a,e,u)}),n.forEachChild(function(n,i){v(t,e,a.concat(i),n,r)})}function p(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function d(t,e,a){var n;return null!==(n=t)&&"object"==typeof n&&t.type&&(a=e,e=t,t=t.type),{type:t,payload:e,options:a}}function _(t){l&&t===l||r(l=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},h.prototype.commit=function(t,e,a){var n=this,r=d(t,e,a),i=r.type,o=r.payload,s=(r.options,{type:i,payload:o}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,n.state)}))},h.prototype.dispatch=function(t,e){var a=this,n=d(t,e),r=n.type,i=n.payload,o={type:r,payload:i},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(o,a.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return m(t,this._subscribers)},h.prototype.subscribeAction=function(t){return m(t,this._actionSubscribers)},h.prototype.watch=function(t,e,a){var n=this;return this._watcherVM.$watch(function(){return t(n.state,n.getters)},e,a)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,a){void 0===a&&(a={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),a.preserveState),g(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var a=p(e.state,t.slice(0,-1));l.delete(a,t[t.length-1])}),w(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,f);var y=E(function(t,e){var a={};return S(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){var e=this.$store.state,a=this.$store.getters;if(t){var n=$(this.$store,"mapState",t);if(!n)return;e=n.context.state,a=n.context.getters}return"function"==typeof r?r.call(this,e,a):e[r]},a[n].vuex=!0}),a}),b=E(function(t,e){var a={};return S(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];var n=this.$store.commit;if(t){var i=$(this.$store,"mapMutations",t);if(!i)return;n=i.context.commit}return"function"==typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}}),a}),k=E(function(t,e){var a={};return S(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,a[n]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[r]},a[n].vuex=!0}),a}),C=E(function(t,e){var a={};return S(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];var n=this.$store.dispatch;if(t){var i=$(this.$store,"mapActions",t);if(!i)return;n=i.context.dispatch}return"function"==typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}}),a});function S(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function E(t){return function(e,a){return"string"!=typeof e?(a=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,a)}}function $(t,e,a){return t._modulesNamespaceMap[a]}var j={Store:h,install:_,version:"3.0.1",mapState:y,mapMutations:b,mapGetters:k,mapActions:C,createNamespacedHelpers:function(t){return{mapState:y.bind(null,t),mapGetters:k.bind(null,t),mapMutations:b.bind(null,t),mapActions:C.bind(null,t)}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var O=a("VU/8")({name:"App"},M,!1,function(t){a("6680")},null,null).exports,L=a("/ocq"),x={name:"Japanese",computed:k({language:"getCurLan"}),created:function(){switch(this.gamemuiscs1=new Audio,this.current=this.V_less,this.language){case"Chinese":this.nav_title=[{name:"轻音"},{name:"浊音"},{name:"拗音"}];break;case"English":this.nav_title=[{name:"V_less"},{name:"Voiced"},{name:"Bend"}]}},methods:{onItemSelected:function(t,e){this.selected=t.name,""!==t.raw&&(this.gamemuiscs1=new Audio("./static/rawes/"+t.raw),this.gamemuiscs1.play())},onNavSelected:function(t){switch(this.nav_chose=t,t){case 0:this.current=this.V_less;break;case 1:this.current=this.Voiced;break;case 2:this.current=this.Bend}},changeShowType:function(){this.showType^=1}},data:function(){return{nav_chose:0,selected:"",showType:0,nav_title:[{name:"V_less"},{name:"Voiced"},{name:"Bend"}],current:[],V_less:[[{name:"a",left:"あ",right:"ア",raw:"a.wav"},{name:"i",left:"い",right:"イ",raw:"i.wav"},{name:"u",left:"う",right:"ウ",raw:"u.wav"},{name:"e",left:"え",right:"エ",raw:"e.wav"},{name:"o",left:"お",right:"オ",raw:"o.wav"}],[{name:"ka",left:"か",right:"カ",raw:"ka.wav"},{name:"ki",left:"き",right:"キ",raw:"ki.wav"},{name:"ku",left:"く",right:"ク",raw:"ku.wav"},{name:"ke",left:"け",right:"ケ",raw:"ke.wav"},{name:"ko",left:"こ",right:"コ",raw:"ko.wav"}],[{name:"sa",left:"さ",right:"サ",raw:"sa.wav"},{name:"shi",left:"し",right:"シ",raw:"shi.wav"},{name:"su",left:"す",right:"ス",raw:"su.wav"},{name:"se",left:"せ",right:"セ",raw:"se.wav"},{name:"so",left:"そ",right:"ソ",raw:"so.wav"}],[{name:"ta",left:"た",right:"タ",raw:"ta.wav"},{name:"chi",left:"ち",right:"チ",raw:"chi.wav"},{name:"tsu",left:"つ",right:"ツ",raw:"tsu.wav"},{name:"te",left:"て",right:"テ",raw:"te.wav"},{name:"to",left:"と",right:"ト",raw:"to.wav"}],[{name:"na",left:"な",right:"ナ",raw:"na.wav"},{name:"ni",left:"に",right:"二",raw:"ni.wav"},{name:"nu",left:"ぬ",right:"ヌ",raw:"nu.wav"},{name:"ne",left:"ね",right:"ネ",raw:"ne.wav"},{name:"no",left:"の",right:"ノ",raw:"no.wav"}],[{name:"ha",left:"は",right:"ハ",raw:"ha.wav"},{name:"hi",left:"ひ",right:"ヒ",raw:"hi.wav"},{name:"fu",left:"ふ",right:"フ",raw:"fu.wav"},{name:"he",left:"へ",right:"へ",raw:"he.wav"},{name:"ho",left:"ほ",right:"ホ",raw:"ho.wav"}],[{name:"ma",left:"ま",right:"マ",raw:"ma.wav"},{name:"mi",left:"み",right:"ミ",raw:"mi.wav"},{name:"mu",left:"む",right:"ム",raw:"mu.wav"},{name:"me",left:"め",right:"メ",raw:"me.wav"},{name:"mo",left:"も",right:"モ",raw:"mo.wav"}],[{name:"ya",left:"や",right:"ヤ",raw:"ya.wav"},{name:".",left:".",right:".",raw:""},{name:"yu",left:"ゆ",right:"ユ",raw:"yu.wav"},{name:".",left:".",right:".",raw:""},{name:"yo",left:"よ",right:"ヨ",raw:"yo.wav"}],[{name:"ra",left:"ら",right:"ラ",raw:"ra.wav"},{name:"ri",left:"り",right:"リ",raw:"ri.wav"},{name:"ru",left:"る",right:"ル",raw:"ru.wav"},{name:"re",left:"れ",right:"レ",raw:"re.wav"},{name:"ro",left:"ろ",right:"ロ",raw:"ro.wav"}],[{name:"wa",left:"わ",right:"ワ",raw:"wa.wav"},{name:".",left:".",right:".",raw:""},{name:"wo",left:"を",right:"ヲ",raw:"wo.wav"},{name:".",left:".",right:".",raw:""},{name:"n",left:"ん",right:"ン",raw:"n.wav"}]],Voiced:[[{name:"ga",left:"が",right:"ガ",raw:"ga.wav"},{name:"gi",left:"ぎ",right:"ギ",raw:"gi.wav"},{name:"gu",left:"ぐ",right:"グ",raw:"gu.wav"},{name:"ge",left:"げ",right:"ゲ",raw:"ge.wav"},{name:"go",left:"ご",right:"ゴ",raw:"go.wav"}],[{name:"za",left:"ざ",right:"ザ",raw:"za.wav"},{name:"zi",left:"じ",right:"ジ",raw:"ji.wav"},{name:"zu",left:"ず",right:"ズ",raw:"zu.wav"},{name:"ze",left:"ぜ",right:"ゼ",raw:"ze.wav"},{name:"zo",left:"ぞ",right:"ゾ",raw:"zo.wav"}],[{name:"da",left:"だ",right:"ダ",raw:"da.wav"},{name:"di",left:"ぢ",right:"ヂ",raw:"ji.wav"},{name:"du",left:"づ",right:"ヅ",raw:"zu.wav"},{name:"de",left:"で",right:"デ",raw:"de.wav"},{name:"do",left:"ど",right:"ド",raw:"do1.wav"}],[{name:"ba",left:"ば",right:"バ",raw:"ba.wav"},{name:"bi",left:"び",right:"ビ",raw:"bi.wav"},{name:"bu",left:"ぶ",right:"ブ",raw:"bu.wav"},{name:"be",left:"べ",right:"ベ",raw:"be.wav"},{name:"bo",left:"ぼ",right:"ボ",raw:"bo.wav"}],[{name:"pa",left:"ぱ",right:"パ",raw:"pa.wav"},{name:"pi",left:"ぴ",right:"ピ",raw:"pi.wav"},{name:"pu",left:"ぷ",right:"プ",raw:"pu.wav"},{name:"pe",left:"ぺ",right:"ペ",raw:"pe.wav"},{name:"po",left:"ぽ",right:"ポ",raw:"po.wav"}]],Bend:[[{name:"kya",left:"きゃ",right:"キャ",raw:"kya.wav"},{name:"kyu",left:"きゅ",right:"キュ",raw:"kyu.wav"},{name:"kyo",left:"きょ",right:"キョ",raw:"kyo.wav"}],[{name:"gya",left:"ぎゃ",right:"ギャ",raw:"gya.wav"},{name:"gyu",left:"ぎゅ",right:"ギュ",raw:"gyu.wav"},{name:"gyo",left:"ぎょ",right:"ギョ",raw:"gyo.wav"}],[{name:"sha",left:"しゃ",right:"シャ",raw:"sha.wav"},{name:"shu",left:"しゅ",right:"シュ",raw:"shu.wav"},{name:"sho",left:"しょ",right:"ショ",raw:"sho.wav"}],[{name:"jya",left:"じゃ",right:"ジャ",raw:"jya.wav"},{name:"jyu",left:"じゅ",right:"ジュ",raw:"jyu.wav"},{name:"jyo",left:"じょ",right:"ジョ",raw:"jyo.wav"}],[{name:"cya",left:"ちゃ",right:"チャ",raw:"cha.wav"},{name:"cyu",left:"ちゅ",right:"チュ",raw:"chu.wav"},{name:"cyo",left:"ちょ",right:"チョ",raw:"cho.wav"}],[{name:"hya",left:"ひゃ",right:"ヒャ",raw:"hya.wav"},{name:"hyu",left:"ひゅ",right:"ヒュ",raw:"hyu.wav"},{name:"hyo",left:"ひょ",right:"ヒョ",raw:"hyo.wav"}],[{name:"nya",left:"にゃ",right:"ニャ",raw:"nya.wav"},{name:"nyu",left:"にゅ",right:"ニュ",raw:"nyu.wav"},{name:"nyo",left:"にょ",right:"ニョ",raw:"nyo.wav"}],[{name:"bya",left:"びゃ",right:"ビャ",raw:"bya.wav"},{name:"byu",left:"びゅ",right:"ビュ",raw:"byu.wav"},{name:"byo",left:"びょ",right:"ビョ",raw:"byo.wav"}],[{name:"pya",left:"ぴゃ",right:"ピャ",raw:"pya.wav"},{name:"pyu",left:"ぴゅ",right:"ピュ",raw:"pyu.wav"},{name:"pyo",left:"ぴょ",right:"ピョ",raw:"pyo.wav"}],[{name:"mya",left:"みゃ",right:"ミャ",raw:"mya.wav"},{name:"myu",left:"みゅ",right:"ミュ",raw:"myu.wav"},{name:"myo",left:"みょ",right:"ミョ",raw:"myo.wav"}],[{name:"rya",left:"りゃ",right:"リャ",raw:"rya.wav"},{name:"ryu",left:"りゅ",right:"リュ",raw:"ryu.wav"},{name:"ryo",left:"りょ",right:"リョ",raw:"ryo.wav"}]]}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Japanese"},[a("h3",{staticClass:"nav_btn",on:{click:function(e){t.changeShowType()}}},[t._v("平假名")]),t._v(" "),a("div",{staticClass:"nav_bg"},t._l(t.nav_title,function(e,n){return a("td",{key:e.id,staticClass:"nav"},[a("h2",{class:{nav_item:!0,nav_active:n===t.nav_chose,left_radius:0===n,right_radius:n===t.nav_title.length-1},on:{click:function(e){t.onNavSelected(n)}}},[t._v(t._s(e.name))])])})),t._v(" "),a("table",{staticClass:"container"},t._l(t.current,function(e){return a("tr",{staticClass:"row"},t._l(e,function(e){return a("td",{class:{normal_row:2!==t.nav_chose,less_row:2===t.nav_chose},on:{click:function(a){t.onItemSelected(e,a)}}},[a("div",[a("h4",{class:{letter:!0,active:e.name===t.selected}},[t._v(" "+t._s(0===t.showType?e.left:e.right))]),t._v(" "),a("h4",{attrs:{id:"name"}},[t._v(" "+t._s(e.name))])])])}))}))])},staticRenderFns:[]};var V=a("VU/8")(x,N,!1,function(t){a("Na3H")},null,null).exports,A={name:"HelloWorld",computed:k({languages:"getSuportLans",currentLan:"getCurLan"}),created:function(){this.selected=this.currentLan,this.refleshShowLan()},data:function(){return{selected:"",welcome:"Welcome to Nebulats language letters!",japanese_learning:"Start Japanese Learning",korean_learning:"Start Korean Learning",English_learning:"Start English Learning"}},methods:{onCourseSelected:function(t){"Japanese"!==t?alert("敬请期待"):this.$router.push(t)},onLanguageSelected:function(){this.$store.dispatch("changeLan",this.selected),this.refleshShowLan()},refleshShowLan:function(){switch(this.selected){case"English":this.welcome="Welcome to Nebulats language letters!",this.japanese_learning="Start Japanese Learning >>",this.korean_learning="Start Korean Learning >>";break;case"Chinese":this.welcome="欢迎使用Nebulats字母发音表!",this.japanese_learning="开始日语学习 >>",this.korean_learning="开始韩语学习 >>",this.English_learning="开始英语学习"}}}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?a:a[0]},t.onLanguageSelected]}},[a("option",[t._v(t._s(t.selected))]),t._v(" "),t._l(t.languages,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2),t._v(" "),a("img",{attrs:{src:"https://nebulas.io/assets/images/nebulasx60.png"}}),t._v(" "),a("h1",[t._v(t._s(t.welcome))]),t._v(" "),a("p",{on:{click:function(e){t.onCourseSelected("Japanese")}}},[t._v(t._s(t.japanese_learning))]),t._v(" "),a("p",{on:{click:function(e){t.onCourseSelected("Korean")}}},[t._v(t._s(t.korean_learning))]),t._v(" "),a("p",{on:{click:function(e){t.onCourseSelected("English")}}},[t._v(t._s(t.English_learning))])])},staticRenderFns:[]};var z=a("VU/8")(A,G,!1,function(t){a("E3Gz")},"data-v-07bfe365",null).exports;n.a.use(L.a);var H=new L.a({routes:[{path:"/",name:"HelloWorld",component:z},{path:"/japanese",name:"Japanese",component:V}]}),P={state:{_current_lan:"English",_languages:["English","Chinese"]},getters:{getCurLan:function(t){return t._current_lan},getSuportLans:function(t){return t._languages}},actions:{changeLan:function(t,e){t.commit("setCurrentLan",e)}},mutations:{setCurrentLan:function(t,e){t._current_lan=e}}};n.a.use(j);var J=new j.Store({modules:{AppConfigs:P}});n.a.config.productionTip=!1,new n.a({el:"#app",router:H,store:J,components:{App:O},template:"<App/>"})},Na3H:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eceb5239bad00c0e5012.js.map