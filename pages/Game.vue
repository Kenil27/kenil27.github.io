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
        "r1c1",
        "r1c2",
        "r1c3",
        "r2c1",
        "r2c2",
        "r2c3",
        "r3c1",
        "r3c2",
        "r3c3"
      ],
      coins: {},
      isXTurn: true
    };
  },
  methods: {
    onCellClick(pos) {
      console.log("you clicked here:", this.coins[pos]);
      if (this.coins[pos]) {
          // do nothing
      } else {
        this.setCellValue(pos, this.isXTurn ? "X" : "O");
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
    }
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