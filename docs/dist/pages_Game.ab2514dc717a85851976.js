webpackJsonp([0],{"8lKC":function(t,e,i){var s=i("TTZm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("52dc67f8",s,!1,{sourceMap:!1})},Jj5A:function(t,e,i){"use strict";var s=i("bOdI"),n=i.n(s),r=i("Dd8w"),c=i.n(r);e.a={data:function(){return{items:["r0c0","r0c1","r0c2","r1c0","r1c1","r1c2","r2c0","r2c1","r2c2"],coins:{},isXTurn:!0}},methods:{checkWinner:function(t,e,i){for(var s=!0,n=!0,r=!0,c=0;c<3;c++)this.coins["r"+t+"c"+c]!==i&&(s=!1);for(var a=0;a<3;a++)this.coins["r"+a+"c"+e]!==i&&(n=!1);for(var o=0;o<3;o++)this.coins["r"+o+"c"+o]!==i&&(r=!1);for(var l=0;l<3;l++)for(var u=0;u<3;u++)(l+u)%2==0&&this.coins["r"+l+"c"+u]!==i&&(r=!1);return s||n||r},onCellClick:function(t){if(console.log("you clicked here:",this.coins[t]),this.coins[t]);else{var e=this.isXTurn?"X":"O";this.setCellValue(t,e);var i=t.substring(1,2),s=t.substring(3),n=this.checkWinner(i,s,e);this.isXTurn=!this.isXTurn,n&&alert("Hey "+e+" wins")}},setCellValue:function(t,e){this.coins=c()({},this.coins,n()({},t,e))},getCellValue:function(t){return this.coins[t]}}}},TTZm:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-f8061f90]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.game[data-v-f8061f90]{margin:2%}.r1[data-v-f8061f90]{background-color:#bbadad;display:-webkit-box;display:-ms-flexbox;display:flex}.t--cell[data-v-f8061f90]{border:1px solid #000;width:100px;height:100px;text-align:center}",""])},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var s,n=i("C4MV"),r=(s=n)&&s.__esModule?s:{default:s};e.default=function(t,e,i){return e in t?(0,r.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},o0p3:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"game"},[i("nuxt-link",{staticClass:"home-button",attrs:{to:"/"}},[t._v("Bact to Home\n        ")]),t._m(0),i("div",{staticClass:"r1"},[i("div",{staticClass:"row"},t._l(t.items,function(e){return i("div",{key:e,staticClass:"col-md-4 t--cell",on:{click:function(i){t.onCellClick(e)}}},[t._v("\n                    "+t._s(t.getCellValue(e))+"\n                ")])}))])],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("u",[this._v(" Tic Tac Toe !!")])])}]};e.a=n},vi8I:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Jj5A"),n=i("o0p3"),r=!1;var c=function(t){r||i("8lKC")},a=i("VU/8")(s.a,n.a,!1,c,"data-v-f8061f90",null);a.options.__file="pages\\Game.vue",e.default=a.exports}});