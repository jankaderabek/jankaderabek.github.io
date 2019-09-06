import { SET_TALKS } from './mutations'
import { ActionContext, ActionTree } from '~/node_modules/vuex'
import { TalksState, Talk } from '~/store/talks/index'

export const FETCH_TALKS = 'talks/fetchTalks'

export const actions: ActionTree<TalksState, TalksState> = {
  fetchTalks (context: ActionContext<TalksState, TalksState>): Promise<Talk[]> {
    return this.$axios.$get<Talk[]>('/talks').then((talks: Talk[]): Talk[] => {
      context.commit(SET_TALKS, talks)

      return talks
    })
  }
}

export default actions
