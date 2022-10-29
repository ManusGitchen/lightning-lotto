<template>
  <div class="welcome">
    <v-card>
      <!-- src="https://picsum.photos/920" -->
      <v-img
        v-bind:src="require('../assets/lightning-banner.jpg')"
        max-height="400px"
        cover
        class="bg-grey-lighten-2"
      />
      <div  class="banner-text">
        <v-card-title class="banner-text--headline">
          Lightning-Lotto        
        </v-card-title>
        <v-card-title class="banner-text--subheadline">
          ...weil es wahrscheinlicher ist vom Blitz getroffen zu werden, als im Lotto zu gewinnen...
        </v-card-title>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.banner-text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  top: 0;
  background: rgba(0,0,0,.3);
  color: #fff;
  width: 100%;
  height: 100%;
  
  &--headline {
    line-height: 4rem !important;
    white-space: initial;
    font-size: 3rem;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  &--subheadline {
    line-height: 3rem !important;
    white-space: initial;
    font-size: 2rem;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
