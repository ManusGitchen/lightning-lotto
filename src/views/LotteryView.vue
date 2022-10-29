<template>
  <div class="lottery">
    <h1>lottery</h1>
    <v-select
      label="Select"
      :items="gameTypes"
      variant="underlined"
      v-model="selected"
      @input="getGameData"
    />
    <ResultCard v-for="draw in displayDraws.draws" :key="draw.date"
    :overline="draw.date"
    :title="draw.seo.title"
    :description="draw.seo.description"
    :numbers="draw.numbers"
    :additional-numbers="draw.additionalNumbers"
    />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import ResultCard from '../components/ResultCard.vue'
export default ({
  components: {
    ResultCard
  },
  data: () => ({
    gameTypes: ['cash4life', 'elgordo', 'elnino', 'eurojackpot', 'euromillions', 'gluecksspirale', 'gluecksspirale_jahresrente', 'halloweenlotterie', 'keno', 'lotto', 'lotto6aus45', 'lotto6aus45_joker', 'lottoplus', 'megamillions', 'minilos', 'minilotto', 'osterlotterie', 'powerball', 'siegerchance', 'silvestermillionen', 'sommerlotterie', 'sonntagslotto', 'spiel77', 'super6', 'superlotto', 'swisslotto', 'swisslotto_joker', 'weihnachtslotterie', 'worldmillions'],
    selected: 'cash4life',
  }),
  
  computed: {
    getGameData() {
      (this as any).$store.dispatch('gameData', (this as any).selected)
    },
    displayDraws() {
      return (this as any).$store.getters.getDraws
    }
  }

})
</script>
