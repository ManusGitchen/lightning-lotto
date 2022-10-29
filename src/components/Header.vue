<template>
  <nav>
    <v-tabs
      v-model="tab"
      background-color="primary"
    >
    <router-link to="/"><v-tab value="welcome">Welcome</v-tab></router-link>
    <router-link to="/lottery"><v-tab value="lottery">Lottery</v-tab></router-link>
    </v-tabs>
    
  </nav>
</template>

<script lang="ts">
export default ({
  data: () => ({
    tab: 'welcome',
  })
})
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>