(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,n){"use strict";n(46),n(24),n(20),n(10),n(27);var r=n(22),o=n(4),c=n(13),l=n(162);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(o.d)("es",l),Object(o.c)("required",v(v({},c.l),{},{message:"Este campo es requerido"})),Object(o.c)("email",v({},c.e)),Object(o.c)("max_value",v({},c.h)),Object(o.c)("min_value",v({},c.j)),Object(o.c)("confirmed",v({},c.c)),Object(o.c)("digits",v({},c.d)),Object(o.c)("length",v({},c.f)),Object(o.c)("alpha_dash",v({},c.a)),Object(o.c)("alpha_spaces",v({},c.b)),Object(o.c)("max",v({},c.g)),Object(o.c)("min",v({},c.i)),Object(o.c)("regex",v({},c.k)),Object(o.c)("alpha_num_spaces",{computesRequired:!0,message:function(t){return"Solo se aceptan caracteres alfanuméricos"},validate:function(t){return/^[\w\-\s,.;_""º]+$/.test(t)}}),Object(o.c)("num_slash",{computesRequired:!0,message:function(t){return"Solo se acepta el mes y año (MM/YY)"},validate:function(t){return/^\d+([0-9]\/[1-9]\d+)*$/.test(t)}}),Object(o.c)("limit_address",{computesRequired:!0,getMessage:function(t){return"The "+t+" value is not truthy."},validate:function(t){return console.log("heruyy"),console.log(t),!1}},{immediate:!0})},101:function(t,e,n){"use strict";var r=n(0),o=n(168);r.a.use(o.a)},102:function(t,e,n){"use strict";var r=n(0),o=n(4);r.a.component("ValidationObserver",o.a),r.a.component("ValidationProvider",o.b),r.a.directive("numeric",{bind:function(t,e,n){var r=e.expression,o=t.querySelectorAll("input")[0];console.log(t,o,r);o.addEventListener("input",(function(e){/^[0-9]*$/.test(t.value)||(t.value=t.value.slice(0,-1)),e.target.value.length>r&&(e.target.value=e.target.value.substr(0,r))}))}}),r.a.directive("numeric-only",{bind:function(t){t.querySelectorAll("input")[0].addEventListener("keydown",(function(t){-1!==[46,8,9,27,13,110,190].indexOf(t.keyCode)||65===t.keyCode&&!0===t.ctrlKey||67===t.keyCode&&!0===t.ctrlKey||88===t.keyCode&&!0===t.ctrlKey||t.keyCode>=35&&t.keyCode<=39||(t.shiftKey||t.keyCode<48||t.keyCode>57)&&(t.keyCode<96||t.keyCode>105)&&t.preventDefault()}))}})},103:function(t,e,n){"use strict";var r=n(0),o=n(164),c=n.n(o);r.a.use(c.a)},104:function(t,e,n){"use strict";var r=n(0),o=n(165),c=n.n(o);r.a.use(c.a)},105:function(t,e,n){"use strict";var r=n(0),o=n(166),c=n.n(o);r.a.use(c.a,{api_key:"009af7fbb71bd127c332",options:{cluster:"us3",encrypted:!0}})},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){},139:function(t,e,n){},140:function(t,e,n){},141:function(t,e,n){},142:function(t,e,n){},157:function(t,e,n){},169:function(t,e,n){"use strict";var header=n(51),footer=n(42),r={name:"layout",middleware:!1,components:{Header:header.a,Footer:footer.default},data:function(){return{}}},o=n(2),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("nuxt")],1),this._v(" "),e("Footer")],1)}),[],!1,null,"5aaf3979",null);e.a=component.exports;installComponents(component,{Header:n(25).default,Footer:n(42).default})},170:function(t,e,n){"use strict";var r=n(18),o=n(25),c=n(95),l={name:"LayoutApp",middleware:"auth",components:{Header:o.default,Navigation:c.default},data:function(){return{}},created:function(){window.addEventListener("resize",function(){this.mediaQuery()}.bind(this)),this.mediaQuery()},computed:Object(r.c)({isMenuVisible:function(t){return t.is_menu_visible}}),methods:{mediaQuery:function(){window.matchMedia("(min-width: 1200px)").matches?console.log("max"):console.log("min")}}},d=(n(238),n(2)),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"application"},[e("div",{staticClass:"application--wrap"},[e("Header",{staticClass:"header",class:{open:this.isMenuVisible}}),this._v(" "),e("Navigation",{attrs:{open:this.isMenuVisible}}),this._v(" "),e("main",{staticClass:"main",class:{open:this.isMenuVisible}},[e("div",{staticClass:"main__wrap"},[e("div",{staticClass:"container"},[e("nuxt")],1)])])],1)])}),[],!1,null,"c3af7972",null);e.a=component.exports;installComponents(component,{Header:n(25).default,Navigation:n(95).default})},171:function(t,e,n){"use strict";n(11);var r={name:"layoutRegister",components:{Header:n(51).a},data:function(){return{}},computed:{navColor:function(){return{transparent:!0,isDriver:"login-bloozer"===this.$route.name}}}},o=(n(239),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header",class:t.navColor},[r("div",{staticClass:"container"},[r("b-navbar",[r("template",{slot:"brand"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.navColor.transparent,expression:"navColor.transparent"}],staticClass:"logo white"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:n(92),alt:""}}),t._v(" "),r("img",{staticClass:"logo-driver",attrs:{src:n(93),alt:""}})])],1)]),t._v(" "),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{href:"#"}},[t._v("Iniciar sesión")])],1),t._v(" "),r("template",{slot:"end"},[r("b-navbar-item",{staticClass:"postulate-business",attrs:{href:"/postular-negocio"}},[t._v("\n            ¿No tienes una cuenta?\n            "),r("b",[t._v("¡Postula!")])]),t._v(" "),r("b-navbar-item",{staticClass:"postulate-bloozer",attrs:{href:"/postular-bloozer"}},[t._v("\n            ¿No tienes una cuenta?\n            "),r("b",[t._v("¡Postula!")])]),t._v(" "),r("b-navbar-dropdown",{attrs:{label:"Afíliate hoy"}},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/postular-negocio"}},[t._v("\n                Como empresa\n              "),r("div",{staticClass:"logo-empresa"})]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item repartidor",attrs:{to:"/postular-bloozer"}},[t._v("\n              Como repartidor\n              "),r("div",{staticClass:"logo-repartidor"})])],1)],1)],2)],1)]),t._v(" "),r("nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,"0e1bc41d",null);e.a=component.exports;installComponents(component,{Header:n(25).default,Footer:n(42).default})},172:function(t,e,n){"use strict";n(11);var r={name:"layoutRegister",components:{Header:n(51).a},data:function(){return{}},computed:{navColor:function(){return{transparent:!0,isDriver:"postular-bloozer"===this.$route.name}}}},o=(n(240),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header",class:t.navColor},[r("div",{staticClass:"container"},[r("b-navbar",[r("template",{slot:"brand"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.navColor.transparent,expression:"navColor.transparent"}],staticClass:"logo white"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:n(92),alt:""}}),t._v(" "),r("img",{staticClass:"logo-driver",attrs:{src:n(93),alt:""}})])],1)]),t._v(" "),r("template",{slot:"start"},[t.navColor.isDriver?r("b-navbar-item",{attrs:{href:"/login-bloozer"}},[t._v("Iniciar sesión")]):r("b-navbar-item",{attrs:{href:"/login"}},[t._v("Iniciar sesión")])],1),t._v(" "),r("template",{slot:"end"},[r("div",{staticClass:"switcher"},[r("nuxt-link",{staticClass:"client",class:{active:"postular-negocio"===t.$route.name},attrs:{to:"/postular-negocio"}}),t._v(" "),r("nuxt-link",{staticClass:"driver",class:{active:"postular-bloozer"===t.$route.name},attrs:{to:"/postular-bloozer"}})],1)])],2)],1)]),t._v(" "),r("transition",{attrs:{name:"fade"}},[r("nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,"fcf9bd66",null);e.a=component.exports;installComponents(component,{Header:n(25).default,Footer:n(42).default})},173:function(t,e,n){"use strict";n.r(e);n(11);var r=n(33),o=(n(108),{components:{ValidationProvider:n(4).b},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null},description:{type:null}},data:function(){return{innerValue:"",isMax:!1}},computed:{maxNumber:function(){var t="";return"string"==typeof this.rules&&null!==this.rules.match(/max/g)&&(this.isMax=!0,this.isMax&&(t=this.rules.match(/[0-9]+/g)[0])),"object"===Object(r.a)(this.rules)&&this.rules.hasOwnProperty("max")&&(this.isMax=!0,this.isMax&&(t=this.rules.max)),t}},watch:{innerValue:function(t){var e=this;this.$emit("input",t);this.$refs.refProvider.validateSilent().then((function(t){e.$emit("singleValidation",t,e.$attrs.name)}))},value:function(t){this.innerValue=t}},methods:{filter:function(t){var e=this.maxNumber;if(this.isMax)if(t.target.value.length<parseInt(e)){if("number"===this.$attrs.type){var n=t.keyCode?t.keyCode:t.which;(n<48||n>57)&&46!==n&&t.preventDefault()}}else t.preventDefault()}},created:function(){this.value&&(this.innerValue=this.value)}}),c=(n(273),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationProvider",{ref:"refProvider",attrs:{vid:t.vid,name:t.$attrs.name,rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-field",t._b({attrs:{type:{"is-danger":r[0]},message:r}},"b-field",t.$attrs,!1),[n("p",{directives:[{name:"show",rawName:"v-show",value:t.description,expression:"description"}],staticClass:"description",domProps:{innerHTML:t._s(t.description)}}),t._v(" "),n("b-input",t._b({class:t.$attrs.name,attrs:{"has-counter":!1,placeholder:t.$attrs.placeholder,maxlength:t.maxNumber},nativeOn:{keypress:function(e){return t.filter(e)}},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},"b-input",t.$attrs,!1))],1)]}}])})}),[],!1,null,"232a0278",null);e.default=component.exports},175:function(t,e,n){n(176),n(177),t.exports=n(178)},202:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;t.route;e.state.token||n("/login")}},223:function(t,e,n){},225:function(t,e,n){t.exports=n.p+"img/blooz-white.e66faeb.png"},226:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzNS40IDM1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1LjQgMzUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDQ3QkM7c3Ryb2tlLXdpZHRoOjIuOTMxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOiMwMDQ3QkM7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxNy43IiBjeT0iMTcuNyIgcj0iMTcuNyIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBvbHlsaW5lIGNsYXNzPSJzdDEiIHBvaW50cz0iMTAuMSwxNC41IDE3LjcsNi45IDI1LjMsMTQuNSAJCSIvPg0KCQk8cmVjdCB4PSIxNi4yIiB5PSI3LjUiIGNsYXNzPSJzdDIiIHdpZHRoPSIyLjkiIGhlaWdodD0iMjMuMSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"},227:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzNS40IDM1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1LjQgMzUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRjczNTM7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDojRkY3MzUzO30NCjwvc3R5bGU+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTcuNyIgY3k9IjE3LjciIHI9IjE3LjciLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjEwLjEsMTQuNSAxNy43LDYuOSAyNS4zLDE0LjUgCQkiLz4NCgkJPHJlY3QgeD0iMTYuMiIgeT0iNy41IiBjbGFzcz0ic3QyIiB3aWR0aD0iMi45IiBoZWlnaHQ9IjIzLjEiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="},228:function(t,e,n){"use strict";n(135)},229:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTEgMUw2IDZMMSAxIiBzdHJva2U9IiMyMDUwNzEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));var r=n(34),o=n.n(r),c=o.a.create({baseURL:"http://192.168.56.1:8383/api/",timeout:5e3,withCredentials:!0,headers:{"Content-Type":"application/json"}}),l=o.a.create({baseURL:"http://192.168.56.1:8383/api/",timeout:5e3,withCredentials:!1,headers:{"Content-Type":"application/json"}});e.b=function(t){var e=t.store.state.token;void 0!==e&&(l.defaults.headers.common.Authorization="Token ".concat(e))}},230:function(t,e,n){"use strict";n(136)},231:function(t,e,n){"use strict";n(137)},232:function(t,e,n){"use strict";n(138)},233:function(t,e,n){t.exports=n.p+"img/logo-app.c74d99d.png"},234:function(t,e,n){t.exports=n.p+"img/pedidos.e3c903d.svg"},235:function(t,e,n){t.exports=n.p+"img/historial.517268a.svg"},236:function(t,e,n){t.exports=n.p+"img/cuenta.7dfe13e.svg"},237:function(t,e,n){"use strict";n(139)},238:function(t,e,n){"use strict";n(140)},239:function(t,e,n){"use strict";n(141)},240:function(t,e,n){"use strict";n(142)},241:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(60),o=(n(242),n(63),function(){return{token:void 0,user:{id:"",first_name:"",last_name:"",profile_type:"",email:""},is_menu_visible:!0}}),c={},l={SET_TOKEN:function(t,e){t.token=e},SET_AUTH:function(t,e){if(null===e)for(var n in t.user)t.user[n]=null;else for(var r in t.user)t.user[r]=e.user[r]},SET_MENU_VISIBILITY:function(t,e){t.is_menu_visible=e}},d={setAuth:function(t,e){var n=t.commit;n("SET_TOKEN",e.token),n("SET_AUTH",e)},setMenuVisibility:function(t,e){(0,t.commit)("SET_MENU_VISIBILITY",e)},logOut:function(t,e){var n=t.commit;e.req;r.remove("auth"),n("SET_TOKEN",null),n("SET_AUTH",null),this.app.router.push({path:"/login"})},nuxtClientInit:function(t){var e=t.commit;if(r.get()&&r.get().auth){var n=JSON.parse(r.get().auth);e("SET_TOKEN",n.token),e("SET_AUTH",n)}}}},25:function(t,e,n){"use strict";n.r(e);var r={components:{NavBar:n(96).default},props:{open:{type:Boolean}},data:function(){return{}}},o=(n(232),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("div",{staticClass:"toolbar__content"},[e("nav-bar")],1)])}),[],!1,null,"85251a94",null);e.default=component.exports;installComponents(component,{NavBar:n(96).default,Header:n(25).default})},260:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=260},273:function(t,e,n){"use strict";n(157)},42:function(t,e,n){"use strict";n.r(e);n(11);var r={name:"Footer",computed:{navColor:function(){return{isDriver:"repartidor"===this.$route.name}}}},o=(n(231),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"foot",class:this.navColor},[this._m(0),this._v(" "),e("div",{staticClass:"icons"},[e("nuxt-link",{attrs:{to:"/"}},[e("b-icon",{attrs:{icon:"facebook",size:"is-small"}})],1),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("b-icon",{attrs:{icon:"instagram",size:"is-small"}})],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-12"},[e("p",{staticClass:"copy"},[this._v("2020 Blooz Todos los derechos reservados")])])])])}],!1,null,"079abd9b",null);e.default=component.exports;installComponents(component,{Footer:n(42).default})},51:function(t,e,n){"use strict";n(11);var r={name:"Header",data:function(){return{scrollPosition:null,isOutTop:!1,isInTop:!1}},created:function(){},mounted:function(){window.addEventListener("scroll",this.updateScroll)},destroyed:function(){window.removeEventListener("scroll",this.updateScroll)},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},updateScroll:function(){this.scrollPosition=window.scrollY,this.scrollPosition>100?(this.isOutTop=!0,this.isInTop=!1):(this.isOutTop=!1,this.isInTop=!0)}},computed:{navColor:function(){return{transparent:!0,isDriver:"repartidor"===this.$route.name}}}},o=(n(228),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header",class:{transparent:t.navColor,"out-top":t.isOutTop,"in-top":t.isInTop}},[r("div",{staticClass:"container"},[r("b-navbar",[r("template",{slot:"brand"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.navColor.transparent,expression:"!navColor.transparent"}],staticClass:"logo"},[r("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[r("img",{attrs:{src:n(225),alt:""}})])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.navColor.transparent,expression:"navColor.transparent"}],staticClass:"logo white"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:n(92),alt:""}}),t._v(" "),r("img",{staticClass:"logo-driver",attrs:{src:n(93),alt:""}})])],1)]),t._v(" "),r("template",{slot:"start"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/repartidor"}},[t._v("Quiero ser bloozer")])],1),t._v(" "),r("template",{slot:"end"},[r("b-navbar-dropdown",{staticClass:"apply-now",attrs:{label:"Afíliate hoy"}},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/postular-negocio"}},[t._v("\n              Como empresa\n            "),r("div",{staticClass:"logo-empresa"})]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item repartidor",attrs:{to:"/postular-bloozer"}},[t._v("\n            Como repartidor\n            "),r("div",{staticClass:"logo-repartidor"})])],1),t._v(" "),r("b-navbar-item",{attrs:{tag:"div"}},[r("nuxt-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v("Iniciar sesión")]),t._v(" "),r("nuxt-link",{staticClass:"btn driver",attrs:{to:"/login-bloozer"}},[t._v("Iniciar sesión")])],1)],1)],2)],1),t._v(" "),r("div",{staticClass:"up",on:{click:t.scrollTop}},[r("img",{attrs:{src:n(226),alt:""}}),t._v(" "),r("img",{staticClass:"driver",attrs:{src:n(227),alt:""}})])])}),[],!1,null,"6c2e96e6",null);e.a=component.exports;installComponents(component,{Header:n(25).default})},63:function(t,e,n){"use strict";var r=n(23);e.a={login:function(t){var e=r.c.post("/auth/request-token",t);return e.then((function(t){console.log(t.data,"data"),r.a.defaults.headers.common.Authorization="Token ".concat(t.data.token)})),e},recoverPassword:function(t){return r.c.post("/client/reset_password/request",t)},resetPassword:function(t){return r.c.post("/client/reset_password",t)},registerDriver:function(t){return r.c.post("postulant/deliver/",t)},registerClient:function(t){return r.c.post("/postulant/company/",t)},getOrders:function(t,e){return e||(e="today"),t.request({url:"/api/order/orders/".concat(e),method:"get"})},getPackageTypes:function(t){return t.request({url:"/api/order/packages/",method:"get"})},orderRequest:function(t,e){return t.request({url:"/api/order/request/",method:"post",data:e})},getOrderDetail:function(t,code){return t.request({url:"/api/order/".concat(code,"/"),method:"get"})},setOrderAction:function(t,code,e){return t.request({url:"/api/order/".concat(code,"/bloozer/action"),method:"post"})},getLabel:function(t,code){return t.request({url:"/api/order/".concat(code,"/label"),method:"get"})},search:function(t,q){return t.request({url:"/api/order/search/?query=".concat(q),method:"get"})},getBloozerActions:function(t,code,e){return t.request({url:"/api/order/".concat(code,"/bloozer/action?context=").concat(e),method:"get"})},setBloozerActions:function(t,code,e){return t.request({url:"/api/order/".concat(code,"/bloozer/action"),method:"post",data:e})},sendAlertToAction:function(t,code,e){return t.request({url:"/api/order/".concat(code,"/bloozer/action"),method:"put",data:e})},getPreSignedFile:function(t,e){return t.request({url:"/api/profile/upload/pre-signed",method:"post",data:e})},getDistrictAvailables:function(t){return t.request({url:"/api/order/district-availables/",method:"get"})},updateProfile:function(t,e){return t.request({url:"/api/profile/profile/",method:"put",data:e})},validateCoupon:function(t,e){return t.request({url:"/api/order/validate-coupon/",method:"post",data:e})}}},92:function(t,e,n){t.exports=n.p+"img/logo-white.327dc30.svg"},93:function(t,e,n){t.exports=n.p+"img/logo-driver.4c8b050.svg"},95:function(t,e,n){"use strict";n.r(e);var r={name:"navigation",props:{open:{type:Boolean},list:{type:Object}},data:function(){return{}},methods:{}},o=(n(237),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"navigation",class:{hidden:!t.open}},[r("div",{staticClass:"content"},[[r("div",{staticClass:"content-list"},[r("nuxt-link",{staticClass:"logo",class:{open:t.open},attrs:{to:{path:"/"}}},[r("img",{staticClass:"logo-driver",attrs:{src:n(233),alt:""}})]),t._v(" "),r("ul",{staticClass:"list"},[r("li",[r("nuxt-link",{attrs:{to:"/app/mis-pedidos"}},[r("img",{attrs:{src:n(234),alt:""}}),t._v("\n              Mis pedidos\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/app/historial"}},[r("img",{attrs:{src:n(235),alt:""}}),t._v("Historial\n            ")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/app/mi-cuenta"}},[r("img",{attrs:{src:n(236),alt:""}}),t._v(" Mi cuenta\n            ")])],1)])],1)]],2)])}),[],!1,null,"c3d6c5b8",null);e.default=component.exports},96:function(t,e,n){"use strict";n.r(e);n(46),n(24),n(20),n(10),n(27);var r=n(22),o=n(18);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{isPerfilOpen:!1}},created:function(){window.addEventListener("resize",function(){this.mediaQuery()}.bind(this)),this.mediaQuery()},computed:l({},Object(o.c)({is_menu_visible:"is_menu_visible"})),methods:l(l({},Object(o.b)(["setMenuVisibility"])),{},{logOut:function(){this.$auth.logout(),this.$auth.redirect("logout")},mediaQuery:function(){window.matchMedia("(min-width: 1200px)").matches?this.setMenuVisibility(!0):this.setMenuVisibility(!1)}})},v=(n(230),n(2)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-bar"},[r("div",{staticClass:"start"},[r("b-icon",{staticClass:"openMenu",attrs:{icon:"menu",size:"is-small"},nativeOn:{click:function(e){return t.setMenuVisibility(!t.is_menu_visible)}}})],1),t._v(" "),r("div",{staticClass:"profile end"},[r("div",{staticClass:"menu",on:{click:function(e){t.isPerfilOpen=!t.isPerfilOpen}}},[r("img",{staticClass:"person",attrs:{src:t.$auth.user.profile_photo,width:"24",height:"24",alt:""}}),t._v(" "),r("p",{staticClass:"name"},[t._v(t._s(t.$auth.user.first_name)+" "+t._s(t.$auth.user.last_name))]),t._v(" "),r("img",{staticClass:"profile__arrow",attrs:{src:n(229),alt:""}})]),t._v(" "),t._e(),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.isPerfilOpen?[r("div",{staticClass:"profile__popup"},[r("header",[r("div",{staticClass:"image"},[r("img",{staticClass:"profile__image",attrs:{src:t.$auth.user.profile_photo,alt:""}})]),t._v(" "),"DE"==t.$auth.user.profile_type?r("p",{staticClass:"name"},[t._v(t._s(t.$auth.user.user.first_name))]):r("p",{staticClass:"name"},[t._v(t._s(t.$auth.user.commercial_name))]),t._v(" "),r("p",{staticClass:"email"},[t._v(t._s(t.$auth.user.email))])]),t._v(" "),r("footer",{staticClass:"footer"},[r("a",{staticClass:"endsesion",on:{click:t.logOut}},[t._v("Cerrar sesión")])])])]:t._e()],2),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.isPerfilOpen?r("div",{staticClass:"loading",on:{click:function(e){t.isPerfilOpen=!1}}}):t._e()])],1)])}),[],!1,null,"79b0152c",null);e.default=component.exports;installComponents(component,{Header:n(25).default,Footer:n(42).default})},98:function(t,e,n){"use strict";n(45);var r=n(5);e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("nuxtClientInit",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},99:function(t,e,n){"use strict";var r=n(0),o=n(280),c=n(281),l=n(282),d=(n(261),n(3));r.a.component("l-map",o.a),r.a.component("l-tile-layer",c.a),r.a.component("l-marker",l.a),delete d.Icon.Default.prototype._getIconUrl,d.Icon.Default.imagePath=".",d.Icon.Default.mergeOptions({iconRetinaUrl:n(262),iconUrl:n(263),shadowUrl:n(264)})}},[[175,18,4,19]]]);