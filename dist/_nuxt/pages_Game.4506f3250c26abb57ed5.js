webpackJsonp([0],{"8lKC":function(t,e,i){var n=i("TTZm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("52dc67f8",n,!1,{sourceMap:!1})},Jj5A:function(t,e,i){"use strict";var n=i("bOdI"),s=i.n(n),a=i("Dd8w"),c=i.n(a);e.a={data:function(){return{items:["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"],coins:{},isXTurn:!0}},methods:{onCellClick:function(t){console.log("you clicked here:",this.coins[t]),this.coins[t]||(this.setCellValue(t,this.isXTurn?"X":"O"),this.isXTurn=!this.isXTurn)},setCellValue:function(t,e){this.coins=c()({},this.coins,s()({},t,e))},getCellValue:function(t){return this.coins[t]}}}},TTZm:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-f8061f90]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.game[data-v-f8061f90]{margin:2%}.r1[data-v-f8061f90]{background-color:#bbadad;display:-webkit-box;display:-ms-flexbox;display:flex}.t--cell[data-v-f8061f90]{border:1px solid #000;width:100px;height:100px;text-align:center}",""])},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("C4MV"),a=(n=s)&&n.__esModule?n:{default:n};e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},o0p3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"game"},[i("nuxt-link",{staticClass:"home-button",attrs:{to:"/"}},[t._v("Bact to Home\n        ")]),t._m(0),i("div",{staticClass:"r1"},[i("div",{staticClass:"row"},t._l(t.items,function(e){return i("div",{key:e,staticClass:"col-md-4 t--cell",on:{click:function(i){t.onCellClick(e)}}},[t._v("\n                    "+t._s(t.getCellValue(e))+"\n                ")])}))])],1)])};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("u",[this._v(" Tic Tac Toe !!")])])}]};e.a=s},vi8I:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Jj5A"),s=i("o0p3"),a=!1;var c=function(t){a||i("8lKC")},l=i("VU/8")(n.a,s.a,!1,c,"data-v-f8061f90",null);l.options.__file="pages\\Game.vue",e.default=l.exports}});