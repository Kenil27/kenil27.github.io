webpackJsonp([2],{"+3lh":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("U/dO"),i=s("ISRm"),n=!1;var c=function(t){n||s("cyIW")},o=s("VU/8")(a.a,i.a,!1,c,"data-v-982b356c",null);o.options.__file="pages\\Contact.vue",e.default=o.exports},ISRm:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"text"},[s("nuxt-link",{staticClass:"home-button",attrs:{to:"/"}},[t._v("Home")]),s("h1",[t._v("Contact")]),s("div",{staticClass:"main"},[s("form",{staticClass:"form_class",attrs:{action:"#",method:"post",name:"form_name",id:"form_id"}},[t._m(0),t._m(1),t._m(2),t._m(3),s("button",{staticClass:"submit",on:{click:t.submit_by_id}},[t._v(" Submit ")])])])],1),s("div",{staticClass:"sidebar"},[s("div",[s("button",{staticClass:"menu-button",on:{click:t.toggleSidebar}},[t._v("MENU\n       ")])]),s("ul",{staticClass:"side-nav",class:t.isOpen?"open":""},[s("li",[s("nuxt-link",{attrs:{to:"/"}},[t._v("Bio")])],1),s("li",[s("nuxt-link",{attrs:{to:"/Resume"}},[t._v("Resume")])],1),s("li",[s("nuxt-link",{attrs:{to:"/Contact"}},[t._v(" Contact")])],1)])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row1"},[e("input",{staticClass:"action",attrs:{type:"text",id:"name",placeholder:"Full Name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row1"},[e("input",{staticClass:"action",attrs:{type:"text",id:"email",placeholder:"Email ID"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row1"},[e("input",{staticClass:"action",attrs:{type:"text",placeholder:"Phone Number"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row1"},[e("input",{staticClass:"message",attrs:{type:"text",placeholder:"Write your message"}})])}]};e.a=i},"U/dO":function(t,e,s){"use strict";e.a={data:function(){return{isOpen:!1}},methods:{toggleSidebar:function(){this.isOpen=!this.isOpen},submit_by_id:function(){var t=document.getElementById("name").value,e=document.getElementById("email").value;document.getElementById("form_id").submit(),alert(" Name : "+t+" Email : "+e+" Submitted Successfully......")}}}},cyIW:function(t,e,s){var a=s("gUSd");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("544201cc",a,!1,{sourceMap:!1})},gUSd:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".row1[data-v-982b356c]{margin-bottom:15px}.action[data-v-982b356c]{height:3em;width:100%}.message[data-v-982b356c]{height:15em;width:100%}.submit[data-v-982b356c]{width:100%;color:#fff;background-color:#f21;height:2.9em}",""])}});