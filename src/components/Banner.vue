<template>
  <div class="welcome">
    <v-card>
      <v-img
        v-bind:src="img"
        :max-height="maxHeight"
        cover
        class="bg-grey-lighten-2"
      />
      <div  class="banner-text">
        <v-card-title class="banner-text--headline">
          {{title}}        
        </v-card-title>
        <v-card-title class="banner-text--subheadline">
          {{teaser}}
        </v-card-title>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Banner',
  props: {
    title: {
      type: String,
      default:'',
      requiered: true
    },
    teaser: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: ''
    }
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
    text-align: center;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
