<template>
    <div class="container">  
        <div class='game'>
            <nuxt-link to="/" class="home-button">Bact to Home
            </nuxt-link>
            <h3><u> Tic Tac Toe !!</u></h3>
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
    };
  },
  methods: {
    checkWinner(currentRow, currentCol, player) {
      
      let isHorizontal = true
      let isVertical = true
      let isDiagonal = true
      for (let i = 0; i < 3; i++) {
        if (this.coins["r"+currentRow+"c"+i] !== player) {
          isHorizontal = false
        }
      }

      for (let j = 0; j < 3; j++) {
        if (this.coins["r"+j+"c"+currentCol] !== player) {
          isVertical = false
        }
      }
      for(let k =0; k < 3; k++){
        if(this.coins["r"+k+"c"+k] !== player)
        isDiagonal = false
      }
      
      for(let l =0;l<3;l++){
        for(let m=0;m<3;m++){
          if((l+m)%2 === 0)
          if(this.coins['r'+l+'c'+m] !== player)
          isDiagnal = false
        }
      }

      return isHorizontal || isVertical || isDiagonal
    },
    onCellClick(pos) {
      console.log("you clicked here:", this.coins[pos]);
      if (this.coins[pos]) {
          // do nothing
      } else {
        const player = this.isXTurn ? "X" : "O"
        this.setCellValue(pos, player);
        const row = pos.substring(1, 2)
        const col = pos.substring(3)
        const result = this.checkWinner(row, col, player)
        
        // switch turn
        this.isXTurn = !this.isXTurn;

        if (result) {
          alert(`Hey ${player} wins`)
        }
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
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.game {
  margin: 2%;
}
.r1 {
  background-color: rgb(187, 173, 173);
  display: flex;
}
.t--cell {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>