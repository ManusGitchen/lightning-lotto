<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      src="https://images.pexels.com/photos/5550130/pexels-photo-5550130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
export default ({
  name:'TeaserCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
.result-card {
  margin-bottom: 1rem;
}
.numbers {
  border-right: 1px solid #333;
  padding: 0 .3rem;

  &:last-child{
    border: 0;
  }
}
</style>