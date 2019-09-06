import { MutationTree } from '~/node_modules/vuex'
import { Talk, TalksState } from '~/store/talks/index'

export const SET_TALKS = 'SET TALKS'

export const mutations: MutationTree<TalksState> = {
  [SET_TALKS] (state: TalksState, talks: Talk[]): void {
    state.talks = talks
  }
}

export default mutations
