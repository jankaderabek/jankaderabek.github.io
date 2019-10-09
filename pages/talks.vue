<template>
  <v-container>
    <v-row>
      <h2 class="subtitle">
        Přednášky
      </h2>
    </v-row>

    <v-row v-for="talk in talks" :key="talk.name">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ talk.title }}</v-card-title>

          <v-card-text>{{ talk.date }}</v-card-text>

          <v-card-actions>
            <v-btn
              text
              target="_blank"
              :href="talk.link"
            >
              Odkaz
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types/app'
import { FETCH_TALKS } from '~/store/talks/actions'
import { GET_TALKS } from '~/store/talks/getters'
import { Talk } from '~/store/talks'

@Component({
  fetch (context: Context): Promise<any> {
    return context.store.dispatch(FETCH_TALKS)
  }
})
export default class extends Vue {
  get talks (): Talk[] {
    return this.$store.getters[GET_TALKS]
  }
}
</script>

<style>
</style>
