(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(t,i,e){var n=e(139);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(21).default)("09ec0f00",n,!0,{sourceMap:!1})},138:function(t,i,e){"use strict";var n=e(133);e.n(n).a},139:function(t,i,e){(t.exports=e(20)(!1)).push([t.i,"\n.container-fluid[data-v-58e638d2]{display:flex;justify-content:center\n}\n.game[data-v-58e638d2]{margin:2%\n}\n.r1[data-v-58e638d2]{background-color:#bbadad;display:flex\n}\n.t--cell[data-v-58e638d2]{border:1px solid #000;width:100px;height:100px;text-align:center\n}",""])},143:function(t,i,e){"use strict";e.r(i);var n=e(76),s=e.n(n),c=e(18),r=e.n(c),a={data:function(){return{items:["r0c0","r0c1","r0c2","r1c0","r1c1","r1c2","r2c0","r2c1","r2c2"],coins:{},isXTurn:!0,isGameOver:!1,isgameDraw:!1,count:0}},methods:{checkWinner:function(t,i,e){for(var n=!0,s=!0,c=!0,r=!0,a=0;a<3;a++)this.coins["r"+t+"c"+a]!==e&&(n=!1);for(var o=0;o<3;o++)this.coins["r"+o+"c"+i]!==e&&(s=!1);for(var l=0;l<3;l++)for(var u=0;u<3;u++)l===u?this.coins["r"+l+"c"+u]!==e&&(c=!1):l!==u&&(l+u)%2==0&&this.coins["r"+l+"c"+u]!==e&&(r=!1);return this.coins["r"+t+"c"+i]===e&&(this.count+=1),n||s||c||r?n||s||c||r:(9===this.count&&(alert("Game Over. Result : Draw"),this.isgameDraw=!0),n||s||c||r)},onCellClick:function(t){if(!this.isGameOver)if(console.log("you clicked here:",this.coins[t]),this.coins[t]);else{var i=this.isXTurn?"X":"O";this.setCellValue(t,i);var e=t.substring(1,2),n=t.substring(3);if(this.checkWinner(e,n,i))return alert("Hey, Congratulations ! ".concat(i," wins")),void(this.isGameOver=!0);this.isXTurn=!this.isXTurn}},setCellValue:function(t,i){this.coins=r()({},this.coins,s()({},t,i))},getCellValue:function(t){return this.coins[t]},resetGame:function(){this.coins="",this.isGameOver=!1,this.count=0},drawGame:function(){this.coins="",this.isgameDraw=!1,this.count=0}}},o=(e(138),e(14)),l=Object(o.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"game"},[e("nuxt-link",{staticClass:"home-button",attrs:{to:"/"}},[t._v("Back to Home\n        ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"r1"},[e("div",{staticClass:"row"},t._l(t.items,function(i){return e("div",{key:i,staticClass:"col-md-4 t--cell",on:{click:function(e){t.onCellClick(i)}}},[t._v("\n                    "+t._s(t.getCellValue(i))+"\n                ")])}))]),t._v(" "),t.isGameOver?e("h3",[t._v("Game Over. "+t._s(t.isXTurn?"X":"O")+" wins")]):t._e(),t._v(" "),e("div",[t.isGameOver?e("button",{on:{click:function(i){t.resetGame()}}},[t._v("Restart Game")]):t._e(),t._v(" "),t.isgameDraw?e("button",{on:{click:function(i){t.drawGame()}}},[t._v(" Start a New Game")]):t._e()])],1)])},[function(){var t=this.$createElement,i=this._self._c||t;return i("h3",[i("u",[this._v(" Tic Tac Toe !!")])])}],!1,null,"58e638d2",null);l.options.__file="Game.vue";i.default=l.exports}}]);