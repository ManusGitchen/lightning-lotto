<template>
  <header>
    <Header/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'; 

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
  },
});
</script>