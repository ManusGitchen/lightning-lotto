<template>  
  <v-card
    class="mx-auto  pa-4"
    color="var(--primary)"
    theme="dark"
    :title="title"
  >
    <v-card-text class="text-h6">
      {{teaser}}
    </v-card-text>

    <v-card-actions>
      <v-btn
      variant="outlined"
      color="white"
    >
      Mehr erfahren
    </v-btn>
    </v-card-actions>
  </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Promotion',
    props: {
      title: {
        type: String,
        default:'',
        requiered: true
      },
      teaser: {
        type: String,
        default: ''
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  
  </style>
  