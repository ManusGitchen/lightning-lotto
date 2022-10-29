<template>
  <header></header>
  <main>
    <router-view/>
  </main>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>