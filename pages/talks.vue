<template>
  <div>
    <div>
      <h2 class="subtitle">
        Přednášky
      </h2>

      <div v-for="talk in talks" :key="talk.name">
        {{ talk.title }}
      </div>
    </div>
  </div>
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
