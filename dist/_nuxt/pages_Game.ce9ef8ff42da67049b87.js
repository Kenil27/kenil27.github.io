webpackJsonp([0],{"8lKC":function(t,e,i){var s=i("TTZm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("52dc67f8",s,!1,{sourceMap:!1})},Jj5A:function(t,e,i){"use strict";var s=i("bOdI"),n=i.n(s),a=i("Dd8w"),r=i.n(a);e.a={data:function(){return{items:["r0c0","r0c1","r0c2","r1c0","r1c1","r1c2","r2c0","r2c1","r2c2"],coins:{},isXTurn:!0,isGameOver:!1,isgameDraw:!1,count:0}},methods:{checkWinner:function(t,e,i){for(var s=!0,n=!0,a=!0,r=!0,c=0;c<3;c++)this.coins["r"+t+"c"+c]!==i&&(s=!1);for(var o=0;o<3;o++)this.coins["r"+o+"c"+e]!==i&&(n=!1);for(var l=0;l<3;l++)for(var u=0;u<3;u++)l===u?this.coins["r"+l+"c"+u]!==i&&(a=!1):l!==u&&(l+u)%2==0&&this.coins["r"+l+"c"+u]!==i&&(r=!1);return this.coins["r"+t+"c"+e]===i&&(this.count+=1),s||n||a||r?s||n||a||r:(9===this.count&&(alert("Game Over. Result : Draw"),this.isgameDraw=!0),s||n||a||r)},onCellClick:function(t){if(!this.isGameOver)if(console.log("you clicked here:",this.coins[t]),this.coins[t]);else{var e=this.isXTurn?"X":"O";this.setCellValue(t,e);var i=t.substring(1,2),s=t.substring(3);if(this.checkWinner(i,s,e))return alert("Hey, Congratulations ! "+e+" wins"),void(this.isGameOver=!0);this.isXTurn=!this.isXTurn}},setCellValue:function(t,e){this.coins=r()({},this.coins,n()({},t,e))},getCellValue:function(t){return this.coins[t]},resetGame:function(){this.coins="",this.isGameOver=!1,this.count=0},drawGame:function(){this.coins="",this.isgameDraw=!1,this.count=0}}}},TTZm:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container-fluid[data-v-f8061f90]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.game[data-v-f8061f90]{margin:2%}.r1[data-v-f8061f90]{background-color:#bbadad;display:-webkit-box;display:-ms-flexbox;display:flex}.t--cell[data-v-f8061f90]{border:1px solid #000;width:100px;height:100px;text-align:center}",""])},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var s,n=i("C4MV"),a=(s=n)&&s.__esModule?s:{default:s};e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},o0p3:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"game"},[i("nuxt-link",{staticClass:"home-button",attrs:{to:"/"}},[t._v("Bact to Home\n        ")]),t._m(0),i("div",{staticClass:"r1"},[i("div",{staticClass:"row"},t._l(t.items,function(e){return i("div",{key:e,staticClass:"col-md-4 t--cell",on:{click:function(i){t.onCellClick(e)}}},[t._v("\n                    "+t._s(t.getCellValue(e))+"\n                ")])}))]),t.isGameOver?i("h3",[t._v("Game Over. "+t._s(t.isXTurn?"X":"O")+" wins")]):t._e(),i("div",[t.isGameOver?i("button",{on:{click:function(e){t.resetGame()}}},[t._v("Restart Game")]):t._e(),t.isgameDraw?i("button",{on:{click:function(e){t.drawGame()}}},[t._v(" Start a New Game")]):t._e()])],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("u",[this._v(" Tic Tac Toe !!")])])}]};e.a=n},vi8I:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Jj5A"),n=i("o0p3"),a=!1;var r=function(t){a||i("8lKC")},c=i("VU/8")(s.a,n.a,!1,r,"data-v-f8061f90",null);c.options.__file="pages\\Game.vue",e.default=c.exports}});