<template>
    <div class="container-fluid">  
        <div class='game'>
            <nuxt-link to="/" class="home-button"><b> Back to Home</b>
            </nuxt-link>
            <h2><u><b> Tic Tac Toe !!</b></u></h2>
                <div class='r1'>
                    <div class="row">
                    <div 
                        v-for="item in items" 
                        :key="item"
                        @click="onCellClick(item)" 
                        class="col-md-4 t--cell"
                    >
                        {{getCellValue(item)}}
                    </div>
                    </div>
                </div>
                
                <div class="display-result">
                  <h3 v-if="isGameOver">Game Over. {{isXTurn ? "X" : "O"}} wins</h3>
                  <button class='reset' v-if="isGameOver" @click="resetGame()">Restart Game</button>
                  <button class='reset' v-if="isgameDraw" @click="drawGame()"> Start a New Game</button>
                </div>
        </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      items: [
        "r0c0",
        "r0c1",
        "r0c2",
        "r1c0",
        "r1c1",
        "r1c2",
        "r2c0",
        "r2c1",
        "r2c2"
      ],
      coins: {},
      isXTurn: true,
      isGameOver: false,
      isgameDraw: false,
      count: 0
    };
  },
  methods: {
    checkWinner(currentRow, currentCol, player) {
      let isHorizontal = true;
      let isVertical = true;
      let isDiagonal = true;
      let isDiagonal2 = true;

      for (let i = 0; i < 3; i++) {
        if (this.coins["r" + currentRow + "c" + i] !== player) {
          isHorizontal = false;
        }
      }

      for (let j = 0; j < 3; j++) {
        if (this.coins["r" + j + "c" + currentCol] !== player) {
          isVertical = false;
        }
      }
      for (let l = 0; l < 3; l++) {
        for (let m = 0; m < 3; m++) {
          if (l === m) {
            if (this.coins["r" + l + "c" + m] !== player) isDiagonal = false;
          } else if (l !== m && (l + m) % 2 === 0) {
            if (this.coins["r" + l + "c" + m] !== player) isDiagonal2 = false;
          }
        }
      }
      if (this.coins["r" + currentRow + "c" + currentCol] === player)
        this.count += 1;
      if (isHorizontal || isVertical || isDiagonal || isDiagonal2)
        return isHorizontal || isVertical || isDiagonal || isDiagonal2;
      if (this.count === 9) {
        alert("Game Over. Result : Draw");
        this.isgameDraw = true;
      }

      return isHorizontal || isVertical || isDiagonal || isDiagonal2;
    },

    onCellClick(pos) {
      if (this.isGameOver) {
        return;
      }
      console.log("you clicked here:", this.coins[pos]);
      if (this.coins[pos]) {
        // do nothing
      } else {
        const player = this.isXTurn ? "X" : "O";
        this.setCellValue(pos, player);
        const row = pos.substring(1, 2);
        const col = pos.substring(3);
        const result = this.checkWinner(row, col, player);

        if (result) {
          alert(`Hey, Congratulations ! ${player} wins`);
          this.isGameOver = true;
          return;
        }
        // switch turn
        this.isXTurn = !this.isXTurn;
      }
    },
    setCellValue(pos, value) {
      this.coins = {
        ...this.coins,
        [pos]: value
      };
    },
    getCellValue(pos) {
      return this.coins[pos];
    },
    resetGame() {
      this.coins = "";
      this.isGameOver = false;
      this.count = 0;
    },
    drawGame() {
      this.coins = "";
      this.isgameDraw = false;
      this.count = 0;
    }
  }
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  background-image: url("/x0.jpg");
  background-position: center center;
  background-size: cover;
}
h2 {
  text-align: center;
  padding: 2%;
}
.game {
  margin: 2%;
}
.r1 {
  background-color: white;
  display: flex;
}
.t--cell {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  text-align: center;
}
.display-result{
  text-align: center;
}
.reset{
  background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer; 
}
</style>