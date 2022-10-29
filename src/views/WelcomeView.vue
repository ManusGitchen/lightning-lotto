<template>
  <div v-if="displayError">{{displayError}}</div>
  <v-container v-else class="home">
    <Banner 
      title="Lightning-Lotto"
      teaser="...weil es wahrscheinlicher ist vom Blitz getroffen zu werden, als im Lotto zu gewinnen..."
      v-bind:img="require('../assets/lightning-banner.jpg')"
      maxHeight="400px"
    />
  </v-container>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h2>Unsere beliebtesten Jackpots</h2>
      </v-col>
      <v-col
        v-for="fav in favoriteGames"
        v-bind:key="fav"
        cols="12"
        sm="6"
        md="4"
      >
        <v-sheet class="ma-2 pa-2">
          <TeaserCard
          :title="fav"
          :to="'/lottery'"
          subtitle="Jackpot"
          @click="selectGame(fav)"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import TeaserCard from '@/components/TeaserCard.vue'
import axios from 'axios';

export default defineComponent({
  name: 'WelcomeView',
  components: {
    Banner,
    TeaserCard
  },
  data:() => ({
    favoriteGames: ['eurojackpot','gluecksspirale','halloweenlotterie','lotto', 'lotto6aus45','sonntagslotto'],
  }),
  computed: {
    displayError() {
      return (this as any).$store.getters.getBackendError
    }
  },
  methods: {
    selectGame(fav:string){
      (this as any).$store.dispatch('gameData', fav)
    }
  }
});
</script>
