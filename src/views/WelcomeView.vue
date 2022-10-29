<template>
  <div class="home">
    <Banner msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Banner
},
});
</script>
