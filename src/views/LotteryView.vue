<template>
  <v-container class="lottery">
    <ResultCard v-for="draw in displayDraws.draws" :key="draw.date"
    :overline="draw.date"
    :title="draw.seo.title"
    :description="draw.seo.description"
    :numbers="draw.numbers"
    :additional-numbers="draw.additionalNumbers"
    />
  </v-container>
</template>

<script lang="ts">
import ResultCard from '../components/ResultCard.vue'
export default ({
  components: {
    ResultCard
  },
  computed: {
    /**
     * Get fetched data from local store.
     * use it for the component ResultCard
     */
    displayDraws() {
      return (this as any).$store.getters.getDraws
    }
  }
})
</script>
