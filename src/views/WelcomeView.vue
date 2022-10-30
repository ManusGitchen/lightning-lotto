<template>
  <div v-if="displayError">{{displayError}}</div>
  <v-container v-else class="welcome">
    <Banner 
      title="Lightning-Lotto"
      teaser="...weil es wahrscheinlicher ist vom Blitz getroffen zu werden..."
      v-bind:img="require('../assets/lightning-banner.jpg')"
      maxHeight="400px"
    />
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Unsere beliebtesten Jackpots</h2>
      </v-col>
      <v-col
        v-for="fav in favoriteGames"
        v-bind:key="fav"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-sheet>
          <TeaserCard
          :title="fav"
          :to="'/lottery'"
          @click="selectGame(fav)"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>  
  <v-container>
    <Promotion
      title="Lightning Stars"
      teaser="Mit unseren BestOf Spielen wirst du zum Lightning! Jede Woche neue Jackpots. Jede Woche neue Chancen!"
    />
  </v-container> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import TeaserCard from '@/components/TeaserCard.vue'
import Promotion from '@/components/Promotion.vue'

export default defineComponent({
  name: 'WelcomeView',
  components: {
    Banner,
    TeaserCard,
    Promotion
  },
  data:() => ({
    favoriteGames: ['eurojackpot','gluecksspirale','halloweenlotterie','lotto', 'lotto6aus45','sonntagslotto'],
  }),
  computed: {
    /**
     * If there are backend errors fetched, the page will show error messages instaed
     */
    displayError() {
      return (this as any).$store.getters.getBackendError
    }
  },
  methods: {
    /**
     * set the selected game (out of favoritGames) and dispatch to action with axios call. 
     * The action will fetch data about the selected game
     * @param fav selected game
     */
    selectGame(fav:string){
      (this as any).$store.dispatch('gameData', fav)
    }
  }
});
</script>
