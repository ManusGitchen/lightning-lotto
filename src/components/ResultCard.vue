<template>
  <v-card
    class="mx-auto result-card"
    variant="outlined"
    
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{overline}}
        </div>
        <div class="text-h6 mb-1">
          {{title}}
        </div>
        <div class="text-caption">
          {{description}}
          <p>Gewonnen haben die Zahlen: <span class="numbers" v-for="number in numbers">{{number}}</span></p>
          <p v-if="additionalNumbers.length!=0">Zusatzzahl: <span class="numbers" v-for="add in additionalNumbers">{{add}}</span></p>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script lang="ts">
export default ({
  props: {
    overline: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default:''
    },
    numbers: {
      type: Array,
      default: () => []
    },
    additionalNumbers: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.result-card {
  margin-bottom: 1rem;
}
.numbers {
  border-right: 1px solid #333;
  padding: 0 .3rem;

  &:last-child{
    border: 0;
  }
}
</style>