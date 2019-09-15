<template>
  <v-app dark>
    <v-app-bar
      app
    >
      <v-toolbar-title v-text="'Jan Kadeřábek'" />

      <v-spacer />

      <v-btn
        v-for="item in links"
        :key="item.link"
        text
        rounded
        :to="item.link"
        class="ma-4"
      >
        {{ item.name }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      app
      class="justify-center"
    >
      <span>&copy; Jan Kadeřábek 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Přednášky',
          link: '/talks'
        }
      ]
    }
  }
})
</script>
